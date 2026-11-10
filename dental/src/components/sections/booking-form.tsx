"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { bookingSchema, timeSlots, BookingFormData } from "@/lib/schemas";
import clinic from "@/data/clinic";

export function BookingForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || clinic.services[0].name;
  const initialDoctor = searchParams.get("doctor") || "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    service: initialService,
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    timeSlot: timeSlots[2],
    name: "",
    phone: "",
    note: initialDoctor ? `Preferred Doctor: ${initialDoctor}` : "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateStep1 = () => {
    if (!formData.service) {
      setErrors({ service: "Please choose a treatment" });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStep2 = () => {
    if (!formData.date) {
      setErrors({ date: "Please pick a date" });
      return false;
    }
    if (!formData.timeSlot) {
      setErrors({ timeSlot: "Please choose a time slot" });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof BookingFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof BookingFormData;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <Section className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-16">
        <Container>
          <div className="max-w-lg mx-auto bg-white rounded-[28px] p-8 sm:p-12 border border-slate-200 shadow-card text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                Appointment Reserved
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900">
                You&apos;re all set, {formData.name}!
              </h2>
              <p className="text-sm text-slate-600 font-normal">
                We have saved your appointment slot and sent a copy to your phone.
              </p>
            </div>

            {/* Appointment summary */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left text-xs sm:text-sm space-y-3 border border-slate-200">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-normal">Treatment</span>
                <span className="font-bold text-slate-900">{formData.service}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-normal">Date</span>
                <span className="font-bold text-slate-900">{formData.date}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-normal">Time</span>
                <span className="font-bold text-blue-600">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-normal">Mobile</span>
                <span className="font-bold text-slate-900">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-normal">Location</span>
                <span className="font-bold text-slate-900">12th Main Road, Indiranagar</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <Button asChild size="lg" className="w-full rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm">
                <a
                  href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                    `Hi Aura Dental! I just booked an appointment for ${formData.service} on ${formData.date} at ${formData.timeSlot} (Name: ${formData.name}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setIsSuccess(false);
                  setStep(1);
                }}
                className="w-full rounded-full text-xs font-semibold uppercase tracking-wider border-slate-300"
              >
                Book Another Visit
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="book" className="bg-slate-50 py-16 border-b border-slate-200">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Online Scheduling
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            Book an Appointment in 60 Seconds
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            No waiting room delays. Appointments are spaced 30 minutes apart so you are seen right on time.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-[28px] p-7 sm:p-10 border border-slate-200 shadow-card">
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
            {[
              { num: 1, label: "Treatment" },
              { num: 2, label: "Date & Time" },
              { num: 3, label: "Your Info" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= s.num
                      ? "bg-blue-600 text-white shadow-2xs"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {s.num}
                </div>
                <span className={`text-xs font-bold ${step >= s.num ? "text-slate-900" : "text-slate-400"}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="mb-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    What would you like to visit us for?
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    Select a dental treatment below. Unsure? Choose Checkup & Cleaning.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {clinic.services.map((srv) => {
                    const isSelected = formData.service === srv.name;
                    return (
                      <button
                        type="button"
                        key={srv.slug}
                        onClick={() => setFormData({ ...formData, service: srv.name })}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600 shadow-2xs"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <p className="font-heading font-bold text-sm text-slate-900 mb-0.5">
                          {srv.name}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          From ₹{srv.priceStarting.toLocaleString("en-IN")} · {srv.duration}
                        </p>
                      </button>
                    );
                  })}
                </div>
                {errors.service && (
                  <p className="text-xs text-rose-600 font-medium mt-1">{errors.service}</p>
                )}

                <div className="pt-6 flex justify-end">
                  <Button
                    type="button"
                    size="md"
                    className="rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white px-7"
                    onClick={() => {
                      if (validateStep1()) setStep(2);
                    }}
                  >
                    <span>Next: Choose Time</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Slot */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Pick a convenient date and time
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    We reserve a private, sanitized treatment suite for your entire slot.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    <Calendar className="w-3.5 h-3.5 inline mr-1 text-blue-600" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                  {errors.date && <p className="text-xs text-rose-600 font-medium mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    <Clock className="w-3.5 h-3.5 inline mr-1 text-blue-600" />
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                            isSelected
                              ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                              : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  {errors.timeSlot && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.timeSlot}</p>
                  )}
                </div>

                <div className="pt-4 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    className="rounded-full text-xs font-semibold uppercase tracking-wider"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                    <span>Back</span>
                  </Button>
                  <Button
                    type="button"
                    size="md"
                    className="rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white px-7"
                    onClick={() => {
                      if (validateStep2()) setStep(3);
                    }}
                  >
                    <span>Next: Your Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Submit */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Patient Details
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    We will send appointment details to your mobile number.
                  </p>
                </div>

                <Input
                  label="Full Name"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />

                <Input
                  label="Mobile / WhatsApp Number"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                />

                <Textarea
                  label="Anything we should know? (e.g. Tooth sensitivity, nervous about pain, etc.)"
                  placeholder="e.g. Have mild pain in upper molar; please explain before starting."
                  value={formData.note || ""}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  rows={3}
                />

                <div className="pt-4 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    className="rounded-full text-xs font-semibold uppercase tracking-wider"
                    onClick={() => setStep(2)}
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                    <span>Back</span>
                  </Button>
                  <Button type="submit" size="md" className="rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-sm">
                    Confirm Appointment
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}
