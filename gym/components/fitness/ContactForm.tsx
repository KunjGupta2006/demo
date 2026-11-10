"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Free Trial",
    preferredTime: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    return /^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select what you are interested in";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#191917] border border-[#72B47B]/40 rounded-[8px] p-8 sm:p-10 text-center animate-in zoom-in-95 duration-200">
        <div className="w-14 h-14 bg-[#72B47B]/10 rounded-full flex items-center justify-center text-[#72B47B] mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl text-[#F1EEE7] uppercase tracking-wider mb-2">
          ENQUIRY RECEIVED
        </h3>
        <p className="font-body text-sm text-[#B8B3A8] mb-6">
          Thanks <span className="text-[#F1EEE7] font-semibold">{formData.name}</span> — your enquiry has been logged. A demo team member will respond shortly.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              interest: "Free Trial",
              preferredTime: "",
              message: "",
            });
          }}
          variant="secondary"
          size="sm"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#191917] border border-[rgba(241,238,231,0.10)] rounded-[8px] p-6 sm:p-8 space-y-5"
      noValidate
    >
      <h3 className="font-display text-2xl text-[#F1EEE7] uppercase tracking-wider mb-2">
        Send Us a Message
      </h3>

      <div>
        <label htmlFor="contact-name" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
          Full Name <span className="text-[#C8A45D]">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Aarav Mehta"
          className={`w-full px-4 py-3 bg-[#10100F] border rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] ${
            errors.name ? "border-[#D85C52]" : "border-[rgba(241,238,231,0.15)]"
          }`}
        />
        {errors.name && (
          <p className="text-[#D85C52] text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Phone Number <span className="text-[#C8A45D]">*</span>
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98200 12345"
            className={`w-full px-4 py-3 bg-[#10100F] border rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] ${
              errors.phone ? "border-[#D85C52]" : "border-[rgba(241,238,231,0.15)]"
            }`}
          />
          {errors.phone && (
            <p className="text-[#D85C52] text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Email <span className="text-[#77776F] font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="aarav@example.com"
            className="w-full px-4 py-3 bg-[#10100F] border border-[rgba(241,238,231,0.15)] rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="interest" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Interested In <span className="text-[#C8A45D]">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#10100F] border border-[rgba(241,238,231,0.15)] rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
          >
            <option value="Free Trial">Book Free Trial</option>
            <option value="Membership">Membership Plans</option>
            <option value="Personal Training">Personal Training (1:1)</option>
            <option value="Small Group Training">Small Group Coaching</option>
            <option value="General Question">General Question</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-preferredTime" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Preferred Contact Time
          </label>
          <input
            type="text"
            id="contact-preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="e.g. Mornings after 9 AM"
            className="w-full px-4 py-3 bg-[#10100F] border border-[rgba(241,238,231,0.15)] rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
          Message <span className="text-[#77776F] font-normal">(Optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you reach your goals?"
          className="w-full px-4 py-3 bg-[#10100F] border border-[rgba(241,238,231,0.15)] rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" /> Send Enquiry
          </span>
        )}
      </Button>
    </form>
  );
};
