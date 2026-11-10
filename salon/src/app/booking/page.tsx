"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";
import { STYLISTS_DATA } from "@/data/stylists";
import { PACKAGES_DATA } from "@/data/packages";
import { BookingState } from "@/types";

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");
  const preselectedStylist = searchParams.get("stylist");
  const preselectedPackage = searchParams.get("package");

  // Initial state with lazy initializer
  const [booking, setBooking] = useState<BookingState>(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("care4u_booking_state");
      if (saved && !preselectedService && !preselectedStylist && !preselectedPackage) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    const matchedPkg = preselectedPackage
      ? PACKAGES_DATA.find((p) => p.slug === preselectedPackage || p.id === preselectedPackage)
      : null;

    return {
      step: 1,
      selectedServiceIds: preselectedService
        ? [preselectedService]
        : matchedPkg
        ? ["cut-architectural", "treat-japanese-headspa"]
        : ["cut-architectural"],
      selectedStylistId: preselectedStylist || null,
      date: null,
      timeSlot: null,
      addons: [],
      customer: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: matchedPkg ? `Package Request: ${matchedPkg.title}` : "",
      },
    };
  });

  const [confirmedReference, setConfirmedReference] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);

  // Save to sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("care4u_booking_state", JSON.stringify(booking));
    }
  }, [booking]);

  const selectedServices = SERVICES_DATA.filter((s) =>
    booking.selectedServiceIds.includes(s.id)
  );
  const totalMinutes = selectedServices.reduce((sum, s) => sum + s.durationMinutes, 0);
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const selectedStylist = STYLISTS_DATA.find((st) => st.id === booking.selectedStylistId);

  // Time Slots
  const morningSlots = ["09:30", "10:30", "11:15", "11:45"];
  const afternoonSlots = ["14:00", "15:15", "16:30", "17:45", "18:30"];

  // 14 days calendar
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    const dayOfWeek = d.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
    return {
      dateString: d.toISOString().split("T")[0],
      displayDay: d.toLocaleDateString("en-US", { weekday: "short" }),
      displayDate: d.getDate(),
      displayMonth: d.toLocaleDateString("en-US", { month: "short" }),
      isClosed: dayOfWeek === 1, // Closed on Mondays
    };
  });

  const handleServiceToggle = (id: string) => {
    setBooking((prev) => {
      const exists = prev.selectedServiceIds.includes(id);
      if (exists && prev.selectedServiceIds.length === 1) return prev;
      return {
        ...prev,
        selectedServiceIds: exists
          ? prev.selectedServiceIds.filter((item) => item !== id)
          : [...prev.selectedServiceIds, id],
      };
    });
  };

  const handleConfirmReservation = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });
      const data = await res.json();
      setConfirmedReference(data.referenceCode || `C4U-${Math.floor(100000 + Math.random() * 900000)}`);
      sessionStorage.removeItem("care4u_booking_state");
    } catch {
      setConfirmedReference(`C4U-${Math.floor(100000 + Math.random() * 900000)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateIcsDownload = () => {
    if (!booking.date || !booking.timeSlot) return "#";
    const [h, m] = booking.timeSlot.split(":").map(Number);
    const startIso = `${booking.date.replace(/-/g, "")}T${String(h).padStart(2, "0")}${String(m).padStart(2, "0")}00`;
    const endH = Math.floor(h + totalMinutes / 60);
    const endM = (m + (totalMinutes % 60)) % 60;
    const endIso = `${booking.date.replace(/-/g, "")}T${String(endH).padStart(2, "0")}${String(endM).padStart(2, "0")}00`;

    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Care4U Studio Appointment\nDESCRIPTION:Appointment with ${selectedStylist ? selectedStylist.name : "Stylist"} for ${selectedServices.map(s => s.title).join(", ")}.\nLOCATION:48 Quai de la Tournelle, 75005 Paris\nDTSTART:${startIso}\nDTEND:${endIso}\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;

    return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
  };

  return (
    <div className="w-full">
      {/* Confirmation Screen */}
      {confirmedReference ? (
        <Section variant="light" padding="xl">
          <Container size="narrow">
            <div className="bg-white p-8 sm:p-14 border border-slate-200 text-center shadow-xl rounded-2xl">
              <span className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[26px] mx-auto mb-6 shadow-sm">
                ✓
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[12px] font-medium rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                Appointment Confirmed
              </div>
              <Heading level={1} size="display-xl" className="mb-4">
                You’re All Set!
              </Heading>
              <p className="text-[16px] text-slate-600 font-normal max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you, {booking.customer.firstName}. Your appointment at Care4U Studio Paris has been booked. A confirmation email is on its way to you.
              </p>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left max-w-md mx-auto mb-10 space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-200/80 pb-3">
                  <span className="text-[12px] text-slate-500 uppercase tracking-wider font-mono">
                    Booking Code
                  </span>
                  <span className="text-[15px] font-bold text-sky-600 font-mono tracking-wider">
                    {confirmedReference}
                  </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-slate-200/80 pb-3">
                  <span className="text-[12px] text-slate-500 uppercase tracking-wider font-mono">
                    Date & Time
                  </span>
                  <span className="text-[14px] text-slate-900 font-medium">
                    {booking.date} at {booking.timeSlot}
                  </span>
                </div>

                <div className="flex justify-between items-baseline border-b border-slate-200/80 pb-3">
                  <span className="text-[12px] text-slate-500 uppercase tracking-wider font-mono">
                    Stylist
                  </span>
                  <span className="text-[14px] text-slate-900 font-medium">
                    {selectedStylist ? selectedStylist.name : "First Available Stylist"}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[12px] text-slate-500 uppercase tracking-wider font-mono">
                    Estimated Time & Total
                  </span>
                  <span className="text-[15px] font-bold text-emerald-600 font-mono">
                    {totalMinutes} MIN · ${totalPrice} USD
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={generateIcsDownload()}
                  download={`Care4U_Studio_${confirmedReference}.ics`}
                  className="inline-flex items-center justify-center text-[13px] font-medium py-3 px-6 bg-slate-900 text-white rounded-lg hover:bg-sky-600 transition-colors shadow-sm"
                >
                  Add to Calendar (.ICS) 📅
                </a>
                <Button href="/" variant="secondary" size="md">
                  Back to Home
                </Button>
              </div>

              <div className="mt-8 text-[12px] text-slate-500">
                Need to change or cancel? Call us directly at <a href="tel:+33142685500" className="underline text-sky-600 font-medium">+33 1 42 68 55 00</a>
              </div>
            </div>
          </Container>
        </Section>
      ) : (
        /* Wizard Steps Stage */
        <Section variant="light" padding="lg">
          <Container>
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[12px] font-medium rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Online Booking
              </div>
              <Heading level={1} size="h1" className="mb-4">
                Book Your Appointment
              </Heading>
              <p className="text-[15px] text-slate-600 max-w-xl">
                Choose your services, stylist, and time in a few quick steps. We look forward to welcoming you to the studio.
              </p>

              {/* Stepper Tabs */}
              <div className="grid grid-cols-5 gap-2 border-b border-slate-200 pb-3 mt-8 text-center text-[12px] font-medium">
                {[
                  { s: 1, label: "1. Services" },
                  { s: 2, label: "2. Stylist" },
                  { s: 3, label: "3. Date & Time" },
                  { s: 4, label: "4. Details" },
                  { s: 5, label: "5. Review" },
                ].map((stepItem) => (
                  <button
                    key={stepItem.s}
                    type="button"
                    onClick={() => {
                      if (stepItem.s < booking.step) {
                        setBooking({ ...booking, step: stepItem.s as 1 | 2 | 3 | 4 | 5 });
                      }
                    }}
                    disabled={stepItem.s > booking.step}
                    className={`pb-2.5 border-b-2 transition-all ${
                      booking.step === stepItem.s
                        ? "border-sky-600 text-sky-600 font-semibold"
                        : booking.step > stepItem.s
                        ? "border-slate-800 text-slate-800 cursor-pointer"
                        : "border-transparent text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    <span className="hidden sm:inline">{stepItem.label}</span>
                    <span className="sm:hidden">Step {stepItem.s}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Booking Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
              
              {/* Wizard Content (8 cols) */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 border border-slate-200 rounded-2xl shadow-sm">
                
                {/* STEP 1: SERVICES SELECTION */}
                {booking.step === 1 && (
                  <div>
                    <h2 className="font-serif text-[1.6rem] text-slate-900 mb-2">
                      Select Services
                    </h2>
                    <p className="text-[14px] text-slate-500 mb-6 font-normal">
                      Select one or more services for your visit.
                    </p>

                    <div className="space-y-3">
                      {SERVICES_DATA.map((srv) => {
                        const isSelected = booking.selectedServiceIds.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => handleServiceToggle(srv.id)}
                            className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-sky-50/60 border-sky-400 shadow-sm"
                                : "bg-slate-50/70 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center space-x-4">
                              <span
                                className={`w-5 h-5 rounded-md border flex items-center justify-center font-mono text-[11px] ${
                                  isSelected
                                    ? "bg-sky-600 text-white border-sky-600"
                                    : "border-slate-300 bg-white"
                                }`}
                              >
                                {isSelected ? "✓" : ""}
                              </span>
                              <div>
                                <h3 className="font-serif text-[1.15rem] text-slate-900 leading-tight">
                                  {srv.title}
                                </h3>
                                <span className="text-[12px] text-slate-500 block mt-0.5">
                                  {srv.category} · {srv.durationMinutes} mins
                                </span>
                              </div>
                            </div>

                            <span className="text-[15px] font-semibold text-slate-900 font-mono">
                              ${srv.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                      <Button
                        onClick={() => setBooking({ ...booking, step: 2 })}
                        variant="crystal"
                        size="md"
                      >
                        Continue to Stylist →
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 2: STYLIST SELECTION */}
                {booking.step === 2 && (
                  <div>
                    <h2 className="font-serif text-[1.6rem] text-slate-900 mb-2">
                      Choose Your Stylist
                    </h2>
                    <p className="text-[14px] text-slate-500 mb-6 font-normal">
                      Select a specific stylist or choose First Available for the most flexible appointment times.
                    </p>

                    <div className="space-y-4">
                      {/* Option: First Available */}
                      <div
                        onClick={() => setBooking({ ...booking, selectedStylistId: null })}
                        className={`p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          booking.selectedStylistId === null
                            ? "bg-sky-50/60 border-sky-400 shadow-sm"
                            : "bg-slate-50/70 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                        }`}
                      >
                        <div>
                          <h3 className="font-serif text-[1.2rem] text-slate-900 leading-tight">
                            First Available Stylist
                          </h3>
                          <p className="text-[13px] text-slate-500 mt-0.5">
                            Book with whichever skilled team member has the earliest open slot.
                          </p>
                        </div>
                        <span className="text-[11px] font-semibold bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Recommended
                        </span>
                      </div>

                      {/* Stylists Roster */}
                      {STYLISTS_DATA.map((st) => {
                        const isSelected = booking.selectedStylistId === st.id;
                        return (
                          <div
                            key={st.id}
                            onClick={() => setBooking({ ...booking, selectedStylistId: st.id })}
                            className={`p-5 rounded-xl border transition-all cursor-pointer flex items-center space-x-4 ${
                              isSelected
                                ? "bg-sky-50/60 border-sky-400 shadow-sm"
                                : "bg-slate-50/70 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                              <Image
                                src={st.avatar}
                                alt={st.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-serif text-[1.2rem] text-slate-900 leading-tight">
                                {st.name}
                              </h3>
                              <span className="text-[12px] text-sky-600 font-medium block">
                                {st.role} · {st.experienceYears} Years Exp.
                              </span>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {st.specialties.slice(0, 3).map((sp) => (
                                  <span key={sp} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                    {sp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, step: 1 })}
                        className="text-[13px] font-medium text-slate-600 hover:text-slate-900"
                      >
                        ← Back to Services
                      </button>
                      <Button
                        onClick={() => setBooking({ ...booking, step: 3 })}
                        variant="crystal"
                        size="md"
                      >
                        Continue to Date & Time →
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 3: DATE & TIME */}
                {booking.step === 3 && (
                  <div>
                    <h2 className="font-serif text-[1.6rem] text-slate-900 mb-2">
                      Choose Date & Time
                    </h2>
                    <p className="text-[14px] text-slate-500 mb-6 font-normal">
                      We are open Tuesday through Sunday from 9:30 AM to 7:30 PM.
                    </p>

                    {/* Date Horizontal Picker */}
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                      1. Select Day
                    </span>
                    <div className="flex space-x-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
                      {availableDates.map((item) => {
                        const isSelected = booking.date === item.dateString;
                        return (
                          <button
                            key={item.dateString}
                            type="button"
                            disabled={item.isClosed}
                            onClick={() => setBooking({ ...booking, date: item.dateString, timeSlot: null })}
                            className={`p-3 text-center shrink-0 w-20 rounded-xl border transition-all cursor-pointer ${
                              item.isClosed
                                ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                                : isSelected
                                ? "bg-sky-600 text-white border-sky-600 shadow-md"
                                : "bg-white text-slate-900 border-slate-200 hover:border-sky-400"
                            }`}
                          >
                            <span className="text-[11px] uppercase block font-medium">
                              {item.displayDay}
                            </span>
                            <span className="font-serif text-[1.5rem] leading-none block my-1">
                              {item.displayDate}
                            </span>
                            <span className={`text-[10px] uppercase block ${isSelected ? "text-sky-100" : "text-slate-500"}`}>
                              {item.isClosed ? "Closed" : item.displayMonth}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Time Slots */}
                    {booking.date ? (
                      <div>
                        <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-500 block mb-2.5">
                          2. Select Time Slot
                        </span>

                        <div className="space-y-4">
                          <div>
                            <span className="text-[12px] font-medium text-sky-700 block mb-2">
                              Morning Slots (09:30 AM — 12:00 PM)
                            </span>
                            <div className="grid grid-cols-4 gap-2.5">
                              {morningSlots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setBooking({ ...booking, timeSlot: slot })}
                                  className={`py-2.5 text-center font-mono text-[13px] rounded-lg border transition-colors cursor-pointer ${
                                    booking.timeSlot === slot
                                      ? "bg-sky-600 text-white font-semibold border-sky-600 shadow-sm"
                                      : "bg-slate-50 text-slate-900 border-slate-200 hover:border-sky-300"
                                  }`}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="text-[12px] font-medium text-sky-700 block mb-2">
                              Afternoon Slots (02:00 PM — 06:30 PM)
                            </span>
                            <div className="grid grid-cols-4 gap-2.5">
                              {afternoonSlots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setBooking({ ...booking, timeSlot: slot })}
                                  className={`py-2.5 text-center font-mono text-[13px] rounded-lg border transition-colors cursor-pointer ${
                                    booking.timeSlot === slot
                                      ? "bg-sky-600 text-white font-semibold border-sky-600 shadow-sm"
                                      : "bg-slate-50 text-slate-900 border-slate-200 hover:border-sky-300"
                                  }`}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center text-[14px] text-slate-500">
                        Please select an available date above to see open times.
                      </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, step: 2 })}
                        className="text-[13px] font-medium text-slate-600 hover:text-slate-900"
                      >
                        ← Back to Stylist
                      </button>
                      <Button
                        onClick={() => setBooking({ ...booking, step: 4 })}
                        variant="crystal"
                        size="md"
                        disabled={!booking.date || !booking.timeSlot}
                      >
                        Continue to Details →
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 4: GUEST DETAILS */}
                {booking.step === 4 && (
                  <div>
                    <h2 className="font-serif text-[1.6rem] text-slate-900 mb-2">
                      Your Details
                    </h2>
                    <p className="text-[14px] text-slate-500 mb-6 font-normal">
                      We’ll send your booking confirmation and reminder to this email and phone number.
                    </p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={booking.customer.firstName}
                            onChange={(e) =>
                              setBooking({
                                ...booking,
                                customer: { ...booking.customer, firstName: e.target.value },
                              })
                            }
                            placeholder="Amélie"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={booking.customer.lastName}
                            onChange={(e) =>
                              setBooking({
                                ...booking,
                                customer: { ...booking.customer, lastName: e.target.value },
                              })
                            }
                            placeholder="Poulain"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={booking.customer.email}
                            onChange={(e) =>
                              setBooking({
                                ...booking,
                                customer: { ...booking.customer, email: e.target.value },
                              })
                            }
                            placeholder="amelie@paris.fr"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={booking.customer.phone}
                            onChange={(e) =>
                              setBooking({
                                ...booking,
                                customer: { ...booking.customer, phone: e.target.value },
                              })
                            }
                            placeholder="+33 6 12 34 56 78"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                          Notes or Hair Goals (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={booking.customer.notes}
                          onChange={(e) =>
                            setBooking({
                              ...booking,
                              customer: { ...booking.customer, notes: e.target.value },
                            })
                          }
                          placeholder="Previous color history, sensitive scalp, or wanting a new style..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, step: 3 })}
                        className="text-[13px] font-medium text-slate-600 hover:text-slate-900"
                      >
                        ← Back to Schedule
                      </button>
                      <Button
                        onClick={() => setBooking({ ...booking, step: 5 })}
                        variant="crystal"
                        size="md"
                        disabled={
                          !booking.customer.firstName ||
                          !booking.customer.lastName ||
                          !booking.customer.email ||
                          !booking.customer.phone
                        }
                      >
                        Review Booking →
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 5: REVIEW & CONFIRM */}
                {booking.step === 5 && (
                  <div>
                    <h2 className="font-serif text-[1.6rem] text-slate-900 mb-2">
                      Review Your Appointment
                    </h2>
                    <p className="text-[14px] text-slate-500 mb-6 font-normal">
                      Please check the details below before confirming.
                    </p>

                    <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200 mb-6 text-[14px]">
                      <div className="flex justify-between border-b border-slate-200/80 pb-3">
                        <span className="text-slate-500">Services:</span>
                        <span className="font-medium text-slate-900 text-right">
                          {selectedServices.map((s) => s.title).join(", ")}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-3">
                        <span className="text-slate-500">Stylist:</span>
                        <span className="font-medium text-slate-900">
                          {selectedStylist ? selectedStylist.name : "First Available"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-3">
                        <span className="text-slate-500">Date & Time:</span>
                        <span className="font-medium text-slate-900">
                          {booking.date} at {booking.timeSlot}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-3">
                        <span className="text-slate-500">Guest:</span>
                        <span className="text-slate-900 font-medium">
                          {booking.customer.firstName} {booking.customer.lastName} ({booking.customer.phone})
                        </span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-[12px] uppercase font-mono text-slate-500">Estimated Total:</span>
                        <span className="font-mono text-[16px] font-bold text-sky-600">
                          ${totalPrice} USD ({totalMinutes} MIN)
                        </span>
                      </div>
                    </div>

                    {/* Policy Acceptance Checkbox */}
                    <div className="flex items-start space-x-3 mb-8">
                      <input
                        type="checkbox"
                        id="policyCheck"
                        checked={policyAccepted}
                        onChange={(e) => setPolicyAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
                      />
                      <label htmlFor="policyCheck" className="text-[13px] text-slate-600 leading-snug">
                        I agree to the studio&apos;s 48-hour cancellation policy.
                      </label>
                    </div>

                    <div className="flex justify-between border-t border-slate-200 pt-6 items-center">
                      <button
                        type="button"
                        onClick={() => setBooking({ ...booking, step: 4 })}
                        className="text-[13px] font-medium text-slate-600 hover:text-slate-900"
                      >
                        ← Back to Details
                      </button>
                      <Button
                        onClick={handleConfirmReservation}
                        variant="crystal"
                        size="lg"
                        disabled={!policyAccepted || isSubmitting}
                      >
                        {isSubmitting ? "Confirming..." : "Confirm Booking"}
                      </Button>
                    </div>
                  </div>
                )}

              </div>

              {/* Sidebar Summary (4 cols) */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 sticky top-28 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">
                    Summary
                  </span>
                </div>
                <h3 className="font-serif text-[1.3rem] text-slate-900 mb-4">
                  Your Visit
                </h3>

                <div className="space-y-2.5 border-b border-slate-200 pb-4 mb-4">
                  {selectedServices.map((srv) => (
                    <div key={srv.id} className="flex justify-between text-[13px]">
                      <span className="text-slate-800 font-medium">{srv.title}</span>
                      <span className="font-mono text-slate-500">${srv.price}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-[12px] text-slate-600 border-b border-slate-200 pb-4 mb-4">
                  <div className="flex justify-between">
                    <span>Estimated Duration:</span>
                    <span className="text-slate-900 font-medium">{totalMinutes} mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stylist:</span>
                    <span className="text-slate-900 font-medium">
                      {selectedStylist ? selectedStylist.name.split(" ")[0] : "First Available"}
                    </span>
                  </div>
                  {booking.date && (
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="text-slate-900 font-medium">{booking.date}</span>
                    </div>
                  )}
                  {booking.timeSlot && (
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="text-slate-900 font-medium">{booking.timeSlot}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-[12px] uppercase tracking-wider font-mono text-slate-500">
                    Total
                  </span>
                  <span className="font-serif text-[1.8rem] text-slate-900 font-medium leading-none">
                    ${totalPrice}
                  </span>
                </div>

                <div className="text-[12px] text-slate-500 space-y-1 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                  <p>✓ Free courtyard valet parking</p>
                  <p>✓ Refreshments & tea included</p>
                </div>
              </div>

            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}

export default function BookingPage() {
  return (
    <ShellLayout>
      <Suspense fallback={<div className="p-20 text-center font-mono text-slate-500">Loading booking...</div>}>
        <BookingContent />
      </Suspense>
    </ShellLayout>
  );
}
