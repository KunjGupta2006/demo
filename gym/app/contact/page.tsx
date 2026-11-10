import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessDetails } from "@/data/business";
import { ContactForm } from "@/components/fitness/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact & Location | Spark Fitness Bandra West",
  description: "Get in touch with Spark Fitness Bandra West, Mumbai. Address, operating hours, direct phone, WhatsApp and enquiry form.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#F1EEE7] uppercase leading-[0.9] max-w-4xl">
            TALK TO OUR <span className="text-[#C8A45D]">DESK TEAM.</span>
          </h1>
          <p className="font-body text-base md:text-xl text-[#B8B3A8] max-w-2xl mt-6 leading-relaxed">
            Have questions about membership options, coaching availability, or finding the Bandra facility? Send us a message or call directly.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-[#191917]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Details & Fast Actions */}
            <div className="lg:col-span-5 space-y-8 bg-[#10100F] p-8 rounded-[8px] border border-[rgba(241,238,231,0.10)]">
              <div>
                <h3 className="font-display text-3xl text-[#F1EEE7] uppercase mb-2">
                  Spark Fitness Bandra
                </h3>
                <p className="font-body text-sm text-[#B8B3A8] flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
                  <span>{businessDetails.location.fullAddress}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${businessDetails.contact.phone}`}
                  className="flex items-center justify-center gap-2 p-3 bg-[#262622] rounded border border-[rgba(241,238,231,0.12)] font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold hover:border-[#C8A45D]"
                >
                  <Phone className="w-4 h-4 text-[#C8A45D]" /> Call Desk
                </a>
                <a
                  href="https://wa.me/919000000000?text=Hi%20Spark%20Fitness,%20I'd%20like%20to%20enquire%20about%20a%20free%20trial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-[#262622] rounded border border-[rgba(241,238,231,0.12)] font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold hover:border-[#72B47B]"
                >
                  <MessageCircle className="w-4 h-4 text-[#72B47B]" /> WhatsApp
                </a>
              </div>

              {/* Operating Hours Table */}
              <div className="border-t border-[rgba(241,238,231,0.08)] pt-6 space-y-3">
                <div className="font-subhead text-xs uppercase tracking-wider text-[#C8A45D] font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Operating Hours
                </div>
                <div className="space-y-2 text-sm">
                  {businessDetails.hours.map((h) => (
                    <div key={h.days} className="flex justify-between border-b border-[rgba(241,238,231,0.04)] pb-2">
                      <span className="text-[#77776F]">{h.days}</span>
                      <span className="text-[#F1EEE7] font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[rgba(241,238,231,0.08)] pt-6 text-xs text-[#77776F] space-y-1">
                <div><strong className="text-[#B8B3A8]">Email:</strong> {businessDetails.contact.email}</div>
                <div><strong className="text-[#B8B3A8]">Landmark:</strong> {businessDetails.location.landmark}</div>
                <div className="pt-2 text-[11px] text-[#C8A45D]">Demo address & contact info for presentation.</div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
