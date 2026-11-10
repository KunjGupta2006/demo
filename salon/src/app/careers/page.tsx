"use client";

import React, { useState } from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    role: "senior-cutter",
    coverNote: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openRoles = [
    {
      title: "Senior Architectural Hair Sculptor",
      experience: "7+ Years Required",
      type: "Full-Time Atelier Residency",
      description:
        "Mastery of dry precision geometric cutting, perimeter line calibration, and cranial density management. Prior education with Sassoon or Toni&Guy creative academies preferred.",
    },
    {
      title: "Clinical Trichologist & Head Spa Specialist",
      experience: "5+ Years Required",
      type: "Full-Time Specialist",
      description:
        "Specialized in Japanese carbonated water hydrotherapy, scalp pore camera diagnostics, and biodynamic oil infusions. Certification in scalp pathology or trichology required.",
    },
    {
      title: "Chroma Colorist Apprentice",
      experience: "2+ Years Salon Experience",
      type: "Residency Mentorship",
      description:
        "Direct mentorship under head colorist Kaito Tanaka. Intensive training in French freehand kaolin clay painting and zero-damage melanin-preserving blonde chemistry.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <ShellLayout>
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
              [Atelier Residencies]
            </span>
            <Heading level={1} size="display-xl" className="mb-6">
              Residencies & Fellowships
            </Heading>
            <p className="text-[16px] text-[#666159] leading-relaxed max-w-2xl font-light">
              We seek uncompromising artists who treat hair as an anatomical medium. Our fellowship offers private acoustic suites, continuous master education, and fair commission models.
            </p>
          </div>
        </Container>
      </Section>

      {/* Open Roles Matrix */}
      <Section variant="surface" padding="xl" hairlineBottom={true}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58] block mb-2">
              [Open Fellowships]
            </span>
            <Heading level={2} size="h1" className="mb-12">
              Current Open Residencies
            </Heading>

            <div className="space-y-6">
              {openRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#F8F6F1] border border-[rgba(23,22,20,0.08)] flex flex-col md:flex-row md:items-baseline justify-between gap-6"
                >
                  <div className="max-w-xl">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#B38E58] block mb-1">
                      {role.type} · {role.experience}
                    </span>
                    <h3 className="font-serif text-[1.8rem] text-[#171614] mb-3">
                      {role.title}
                    </h3>
                    <p className="text-[14px] text-[#666159] leading-relaxed font-light">
                      {role.description}
                    </p>
                  </div>

                  <a
                    href="#apply"
                    className="shrink-0 font-mono text-[12px] uppercase tracking-wider text-[#171614] hover:text-[#B38E58] border border-[rgba(23,22,20,0.2)] px-5 py-3 text-center transition-colors"
                  >
                    Apply for Role ↓
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Application Form */}
      <Section id="apply" variant="light" padding="xl">
        <Container size="narrow">
          <div className="bg-[#EFECE5] p-8 sm:p-12 border border-[rgba(23,22,20,0.08)]">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B38E58] block mb-2">
              [Fellowship Application]
            </span>
            <h2 className="font-serif text-[2.2rem] text-[#171614] mb-3">
              Transmit Your Dossier
            </h2>
            <p className="text-[14px] text-[#666159] mb-8 font-light">
              All applications are reviewed directly by creative director Éléonore Vance. Discretion is strictly maintained.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-[#121110] text-[#F8F6F1] border border-[#B38E58] text-center">
                <span className="font-serif text-[1.8rem] text-[#F8F6F1] block mb-2">
                  Dossier Received
                </span>
                <p className="text-[13px] text-[#666159] leading-relaxed">
                  Thank you, {formData.name}. If your aesthetic portfolio aligns with our current residency openings, we will invite you to an in-person cutting session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean-Luc Dubois"
                      className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] px-4 py-3 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="j.dubois@hair.fr"
                      className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] px-4 py-3 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                      Portfolio or Instagram Handle *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="@jeanluc.cuts or url"
                      className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] px-4 py-3 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                      Residency Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] px-4 py-3 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                    >
                      <option value="senior-cutter">Senior Architectural Hair Sculptor</option>
                      <option value="trichologist">Clinical Trichologist & Head Spa</option>
                      <option value="color-apprentice">Chroma Colorist Apprentice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                    Statement of Haircraft Philosophy *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Describe your training lineage, cutting philosophy, and why you wish to practice within our private suites..."
                    className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] p-4 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                  />
                </div>

                <Button type="submit" variant="brass" size="lg" className="w-full">
                  Transmit Fellowship Dossier
                </Button>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
