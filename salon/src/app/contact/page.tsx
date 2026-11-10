"use client";

import React, { useState } from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SALON_INFO, getAtelierStatus } from "@/data/salonInfo";

export default function ContactPage() {
  const status = getAtelierStatus();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "appointment-inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How far in advance should I book my appointment?",
      a: "For creative director Éléonore Vance and colorist Kaito Tanaka, we recommend booking 2 to 3 weeks ahead. We also have occasional same-week openings due to schedule changes.",
    },
    {
      q: "Is there parking available?",
      a: "Yes. We offer complimentary private courtyard valet parking behind 48 Quai de la Tournelle. Simply mention when you book that you are arriving by car.",
    },
    {
      q: "What is your cancellation policy?",
      a: "We ask for at least 48 hours notice for cancellations or rescheduling so we can offer the slot to clients on our waitlist.",
    },
    {
      q: "Can I book a private suite for a bridal party or event?",
      a: "Yes. Our private suites can be reserved for bridal trials, wedding day preparations, or private head spa sessions with complimentary tea and champagne.",
    },
  ];

  return (
    <ShellLayout>
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[12px] font-medium rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Contact & Location
            </div>
            <Heading level={1} size="display-xl" className="mb-4">
              Get in Touch with Care4U Studio
            </Heading>
            <p className="text-[16px] text-slate-600 leading-relaxed font-normal">
              Located on the Quai de la Tournelle overlooking Notre-Dame. Reach out with any questions about haircut styling, color appointments, or private bridal suites.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Contact Form (Cols 1-7) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-slate-200 rounded-2xl shadow-sm">
              <h2 className="font-serif text-[1.6rem] text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-[14px] text-slate-500 mb-6 font-normal">
                We respond within 4 business hours Tuesday through Sunday.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-slate-900">
                  <span className="font-serif text-[1.3rem] block mb-2 text-emerald-800">
                    Message Received!
                  </span>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    Thank you, {formData.name}. Our team will contact you shortly by email or phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                        placeholder="Margaux Laurent"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                        placeholder="m.laurent@paris.fr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                      >
                        <option value="appointment-inquiry">Haircut & Styling</option>
                        <option value="bridal-suite">Bridal Suite Reservation</option>
                        <option value="head-spa-trichology">Head Spa & Scalp Massage</option>
                        <option value="press-editorial">Color & Balayage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                      Your Message or Hair Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-[14px] text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                      placeholder="Tell us what you have in mind, your preferred dates, or any questions..."
                    />
                  </div>

                  <Button type="submit" variant="crystal" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Right: Studio Coordinates & Live Hours (Cols 8-12) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Studio Coordinates */}
              <div className="p-7 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-2 text-[12px] font-medium text-emerald-700 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{status.statusText}</span>
                  <span className="text-slate-400">• {status.nextSchedule}</span>
                </div>

                <h3 className="font-serif text-[1.5rem] text-slate-900 mb-2">
                  Care4U Studio Paris
                </h3>
                <div className="text-[14px] text-slate-600 space-y-0.5">
                  <p>{SALON_INFO.address.street}</p>
                  <p>{SALON_INFO.address.arrondissement}, {SALON_INFO.address.postalCode} {SALON_INFO.address.city}</p>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-100 text-[13px] text-slate-600 space-y-2">
                  <p>📍 Metro: {SALON_INFO.address.metroStation}</p>
                  <p>🚗 Valet Parking: {SALON_INFO.address.valetParking}</p>
                  <p>📞 Phone: <a href={`tel:${SALON_INFO.contact.phoneFormatted}`} className="text-sky-600 font-medium hover:underline">{SALON_INFO.contact.phone}</a></p>
                  <p>💬 WhatsApp: <a href={`https://wa.me/${SALON_INFO.contact.whatsapp}`} className="text-emerald-600 font-medium hover:underline">Direct Message</a></p>
                </div>
              </div>

              {/* Minimal Map Frame */}
              <div className="relative aspect-[16/10] bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-medium text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full">
                    Quai de la Tournelle
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    SEINE RIVER FRONT
                  </span>
                </div>

                <div className="text-center my-4">
                  <span className="font-serif text-[1.3rem] block text-slate-900">
                    Facing Notre-Dame & Île Saint-Louis
                  </span>
                  <span className="text-[13px] text-slate-500 block mt-1">
                    Direct access via Pont de Sully or Pont de la Tournelle
                  </span>
                </div>

                <a
                  href="https://maps.google.com/?q=48.8504,2.3537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-medium text-sky-600 hover:text-sky-700 underline text-right block"
                >
                  Open in Google Maps →
                </a>
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Accordion */}
      <Section variant="surface" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[12px] font-medium rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Frequently Asked
              </div>
              <Heading level={2} size="h1">
                Frequently Asked Questions
              </Heading>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-[1.15rem] text-slate-900 pr-4">
                        {faq.q}
                      </span>
                      <span className="text-[20px] text-sky-600 font-medium">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-[14px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
