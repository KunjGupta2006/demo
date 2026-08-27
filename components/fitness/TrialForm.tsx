"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  phone: string;
  email: string;
  experience: string;
  goal: string;
  preferredDay: string;
  preferredTime: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  experience?: string;
  goal?: string;
  preferredDay?: string;
}

export const TrialForm = ({ defaultPlan }: { defaultPlan?: string }) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    experience: "",
    goal: "",
    preferredDay: "Weekday Morning (6 AM - 10 AM)",
    preferredTime: "Morning",
    notes: defaultPlan ? `Interested in plan: ${defaultPlan}` : "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhone = (phone: string) => {
    // Validates 10 digit Indian number or +91 standard formats
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    return /^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone);
  };

  const validateEmail = (email: string) => {
    if (!email) return true; // Optional field
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your training experience level";
    }

    if (!formData.goal) {
      newErrors.goal = "Please select your primary training goal";
    }

    if (!formData.preferredDay) {
      newErrors.preferredDay = "Please select a preferred day";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate server processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#191917] border border-[#C8A45D]/40 rounded-[8px] p-8 sm:p-12 text-center max-w-xl mx-auto shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-[#C8A45D]/10 rounded-full flex items-center justify-center text-[#C8A45D] mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-3xl sm:text-4xl text-[#F1EEE7] uppercase tracking-wider mb-3">
          YOU'RE ON THE LIST.
        </h3>
        <p className="font-body text-base text-[#B8B3A8] mb-6 leading-relaxed">
          Thank you, <span className="text-[#F1EEE7] font-semibold">{formData.name}</span>. Your trial request has been logged. A Spark coach will contact you at <span className="text-[#C8A45D] font-mono">{formData.phone}</span> within 2 hours to confirm your starting slot.
        </p>
        <div className="p-4 bg-[#262622] rounded text-xs text-[#77776F] mb-6 text-left border border-[rgba(241,238,231,0.06)]">
          <span className="text-[#C8A45D] font-semibold">Demo Note:</span> In production, this triggers an automated SMS & WhatsApp notification to the Bandra desk manager and client.
        </div>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              experience: "",
              goal: "",
              preferredDay: "Weekday Morning (6 AM - 10 AM)",
              preferredTime: "Morning",
              notes: "",
            });
          }}
          variant="secondary"
          size="md"
        >
          Book Another Session
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#191917] border border-[rgba(241,238,231,0.12)] rounded-[8px] p-6 sm:p-10 shadow-xl space-y-6"
      noValidate
    >
      <div className="border-b border-[rgba(241,238,231,0.08)] pb-6 mb-6">
        <div className="flex items-center gap-2 text-[#C8A45D] font-subhead text-xs uppercase tracking-widest font-bold mb-1">
          <Dumbbell className="w-4 h-4" /> Coached 45-Minute Trial Session
        </div>
        <h3 className="font-display text-2xl sm:text-3xl text-[#F1EEE7] uppercase">
          Start Your Coached Trial
        </h3>
        <p className="font-body text-xs text-[#B8B3A8] mt-1">
          No credit card required • Zero high-pressure sales pitch
        </p>
      </div>

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Full Name <span className="text-[#C8A45D]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Aarav Mehta"
            className={`w-full px-4 py-3 bg-[#10100F] border rounded text-sm text-[#F1EEE7] placeholder-[#77776F] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] ${
              errors.name ? "border-[#D85C52]" : "border-[rgba(241,238,231,0.15)]"
            }`}
          />
          {errors.name && (
            <p className="text-[#D85C52] text-xs mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Phone Number <span className="text-[#C8A45D]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98200 12345"
            className={`w-full px-4 py-3 bg-[#10100F] border rounded text-sm text-[#F1EEE7] placeholder-[#77776F] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] ${
              errors.phone ? "border-[#D85C52]" : "border-[rgba(241,238,231,0.15)]"
            }`}
          />
          {errors.phone && (
            <p className="text-[#D85C52] text-xs mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email */}
      <div>
        <label htmlFor="email" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
          Email Address <span className="text-[#77776F] font-normal">(Optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="aarav@example.com"
          className={`w-full px-4 py-3 bg-[#10100F] border rounded text-sm text-[#F1EEE7] placeholder-[#77776F] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] ${
            errors.email ? "border-[#D85C52]" : "border-[rgba(241,238,231,0.15)]"
          }`}
        />
        {errors.email && (
          <p className="text-[#D85C52] text-xs mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
          </p>
        )}
      </div>

      {/* Row 3: Experience & Goal Selects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="experience" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Training Experience <span className="text-[#C8A45D]">*</span>
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[#10100F] border rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] ${
              errors.experience ? "border-[#D85C52]" : "border-[rgba(241,238,231,0.15)]"
            }`}
          >
            <option value="">Select your experience...</option>
            <option value="Complete beginner">Complete beginner (New to strength)</option>
            <option value="Some experience">Some experience (Tried commercial gyms)</option>
            <option value="Regular gym-goer">Regular gym-goer (Consistent 1+ yrs)</option>
            <option value="Advanced lifter">Advanced lifter (Powerlifting/Barbell focus)</option>
          </select>
          {errors.experience && (
            <p className="text-[#D85C52] text-xs mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.experience}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="goal" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Primary Goal <span className="text-[#C8A45D]">*</span>
          </label>
          <select
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[#10100F] border rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] ${
              errors.goal ? "border-[#D85C52]" : "border-[rgba(241,238,231,0.15)]"
            }`}
          >
            <option value="">Select primary goal...</option>
            <option value="Build strength & muscle">Build Strength & Muscle</option>
            <option value="Improve athletic capacity">Improve Athletic Performance</option>
            <option value="Body composition">Body Composition & Lean Physique</option>
            <option value="Fix posture & mobility">Fix Posture & Joint Mobility</option>
            <option value="Structured accountability">Structured Accountability</option>
          </select>
          {errors.goal && (
            <p className="text-[#D85C52] text-xs mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.goal}
            </p>
          )}
        </div>
      </div>

      {/* Preferred Day & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDay" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Preferred Day Slot <span className="text-[#C8A45D]">*</span>
          </label>
          <select
            id="preferredDay"
            name="preferredDay"
            value={formData.preferredDay}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#10100F] border border-[rgba(241,238,231,0.15)] rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
          >
            <option value="Weekday Morning (6 AM - 10 AM)">Weekday Morning (6 AM - 10 AM)</option>
            <option value="Weekday Evening (5 PM - 9 PM)">Weekday Evening (5 PM - 9 PM)</option>
            <option value="Saturday Morning (7 AM - 12 PM)">Saturday Morning (7 AM - 12 PM)</option>
            <option value="Sunday Session (8 AM - 1 PM)">Sunday Session (8 AM - 1 PM)</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
            Specific Time Window
          </label>
          <input
            type="text"
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="e.g. 7:30 AM or 7:00 PM"
            className="w-full px-4 py-3 bg-[#10100F] border border-[rgba(241,238,231,0.15)] rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-semibold mb-2">
          Injury History / Additional Notes <span className="text-[#77776F] font-normal">(Optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any prior joint injuries, specific questions or plan preferences..."
          className="w-full px-4 py-3 bg-[#10100F] border border-[rgba(241,238,231,0.15)] rounded text-sm text-[#F1EEE7] focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full text-center"
      >
        {isSubmitting ? "Submitting Request..." : "Book My Free Trial"}
      </Button>

      <p className="text-center font-subhead text-[11px] uppercase tracking-wider text-[#77776F]">
        Bandra West Studio • 14 Linking Road Ext. • +91 90000 00000
      </p>
    </form>
  );
};
