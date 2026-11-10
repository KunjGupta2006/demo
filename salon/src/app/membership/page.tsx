"use client";

import React, { useState } from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function MembershipPage() {
  const [giftAmount, setGiftAmount] = useState(250);
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [voucherGenerated, setVoucherGenerated] = useState<string | null>(null);

  const tiers = [
    {
      name: "L'Initié",
      price: 160,
      interval: "monthly",
      tagline: "Foundational maintenance for the discerning patron",
      features: [
        "Monthly dry precision haircut or fringe renewal",
        "Quarterly scalp diagnostic micro-scan",
        "Priority reservation booking window (7 days)",
        "10% courtesy on all botanical take-home formulas",
      ],
      popular: false,
    },
    {
      name: "Le Privilège",
      price: 280,
      interval: "monthly",
      tagline: "Complete color, scalp, and cut stewardship",
      features: [
        "Monthly dry precision cut & blowout",
        "Bimonthly acidic shine gloss or mineral balayage refresh",
        "Two Japanese carbonated head spa baths per year",
        "48-hour guaranteed appointment booking",
        "15% courtesy on take-home formulations and tools",
      ],
      popular: true,
    },
    {
      name: "L'Étoile",
      price: 520,
      interval: "monthly",
      tagline: "Unlimited couture access and private suite exclusivity",
      features: [
        "Unlimited precision haircuts and editorial styling",
        "Complete seasonal French clay balayage or silk bleaching",
        "Four Japanese head spa and scalp detox immersions per year",
        "24-hour concierge direct booking guarantee",
        "Exclusive private mezzanine suite reservation at every visit",
        "Quarterly full-sized bespoke product dispatch",
      ],
      popular: false,
    },
  ];

  const handleGenerateGiftCard = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `C4U-${Math.floor(100000 + Math.random() * 900000)}`;
    setVoucherGenerated(code);
  };

  return (
    <ShellLayout>
      {/* Page Header */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
              [Patron Privileges & Gift Vouchers]
            </span>
            <Heading level={1} size="display-xl" className="mb-6">
              Care4U Atelier Privé
            </Heading>
            <p className="text-[16px] text-[#666159] leading-relaxed max-w-2xl font-light">
              Annual patron memberships designed for individuals seeking guaranteed priority access to our master sculptors, dedicated acoustic suites, and ongoing trichological care.
            </p>
          </div>
        </Container>
      </Section>

      {/* Tier Comparison Cards */}
      <Section variant="surface" padding="xl" hairlineBottom={true}>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58] block mb-2">
              [Membership Tiers]
            </span>
            <Heading level={2} size="h1">
              Select Your Studio Stewardship
            </Heading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-8 sm:p-10 flex flex-col justify-between border ${
                  t.popular
                    ? "bg-[#121110] text-[#F8F6F1] border-[#B38E58] shadow-2xl relative"
                    : "bg-[#F8F6F1] text-[#171614] border-[rgba(23,22,20,0.1)]"
                }`}
              >
                {t.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#B38E58] text-[#171614] text-[10px] font-mono tracking-widest uppercase px-3 py-1 font-medium">
                    Most Favored
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-[2.2rem] leading-tight mb-2">
                    {t.name}
                  </h3>
                  <p className="text-[13px] text-[#666159] mb-6 font-light">
                    {t.tagline}
                  </p>

                  <div className="font-mono text-[2.4rem] font-medium leading-none mb-6">
                    €{t.price}
                    <span className="text-[12px] font-light text-[#666159] ml-1">
                      / MONTH
                    </span>
                  </div>

                  <div className="border-t border-[rgba(23,22,20,0.1)] pt-6 mb-8">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#B38E58] block mb-4">
                      Tier Privileges:
                    </span>
                    <ul className="space-y-3 text-[13px] leading-relaxed font-light">
                      {t.features.map((feat) => (
                        <li key={feat} className="flex items-start space-x-2.5">
                          <span className="text-[#B38E58] mt-0.5">✓</span>
                          <span className={t.popular ? "text-[#F8F6F1]/85" : "text-[#171614]"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button
                    href="/contact"
                    variant={t.popular ? "brass" : "primary"}
                    size="md"
                    className="w-full"
                  >
                    Inquire for {t.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gift Voucher Purchase Form */}
      <Section id="gift-cards" variant="light" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#EFECE5] p-8 sm:p-12 border border-[rgba(23,22,20,0.08)]">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B38E58] block mb-2">
                [Artisanal Gift Certificates]
              </span>
              <Heading level={2} size="h1" className="mb-4">
                Gift a Private Studio Ceremony
              </Heading>
              <p className="text-[14px] text-[#666159] leading-relaxed mb-8">
                Gift cards are redeemable against all coiffure rituals, private suite reservations, and botanical take-home formulations. Valid for 24 months.
              </p>

              {voucherGenerated ? (
                <div className="p-8 bg-[#121110] text-[#F8F6F1] border border-[#B38E58]">
                  <span className="font-mono text-[11px] text-[#B38E58] uppercase tracking-widest block mb-2">
                    Voucher Issued & Confirmed
                  </span>
                  <div className="font-serif text-[2.4rem] text-[#F8F6F1] mb-2">
                    €{giftAmount} Gift Card
                  </div>
                  <div className="font-mono text-[15px] bg-[#1C1A18] p-3 text-center border border-[rgba(248,246,241,0.15)] tracking-widest text-[#B38E58] my-4">
                    {voucherGenerated}
                  </div>
                  <p className="text-[12px] text-[#666159] mb-6">
                    A digital certificate has been dispatched. Present this code at the studio concierge upon arrival.
                  </p>
                  <Button onClick={() => setVoucherGenerated(null)} variant="brass" size="sm">
                    Purchase Another Voucher
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleGenerateGiftCard} className="space-y-6">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2.5">
                      Select Value (Euros)
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {[150, 250, 450, 650].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setGiftAmount(val)}
                          className={`py-3 text-center font-mono text-[13px] border transition-colors cursor-pointer ${
                            giftAmount === val
                              ? "bg-[#171614] text-[#F8F6F1] border-[#171614]"
                              : "bg-[#F8F6F1] text-[#171614] border-[rgba(23,22,20,0.15)] hover:border-[#171614]"
                          }`}
                        >
                          €{val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                        Recipient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Geneviève Moreau"
                        className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] px-4 py-3 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                        Your Name (Sender) *
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Alexandre Roy"
                        className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] px-4 py-3 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#666159] mb-2">
                      Personalized Message (Printed on Vellum Card)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Wishing you a restorative coiffure ritual in Paris..."
                      className="w-full bg-[#F8F6F1] border border-[rgba(23,22,20,0.15)] p-4 text-[14px] text-[#171614] focus:outline-none focus:border-[#B38E58]"
                    />
                  </div>

                  <Button type="submit" variant="brass" size="lg" className="w-full">
                    Issue Digital Voucher (€{giftAmount})
                  </Button>
                </form>
              )}
            </div>

            {/* Right Card Mockup Preview (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md aspect-[16/10] bg-[#121110] text-[#F8F6F1] p-8 border border-[#B38E58]/50 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-serif text-[1.4rem] uppercase tracking-wider block">
                      CARE4U STUDIO
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B38E58]">
                      PARIS 5E · QUAI DE LA TOURNELLE
                    </span>
                  </div>
                  <span className="font-mono text-[11px] uppercase text-[#666159]">
                    CERTIFICAT D&apos;HONNEUR
                  </span>
                </div>

                <div className="my-auto py-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#666159] block">
                    VALUED AT
                  </span>
                  <span className="font-serif text-[2.8rem] text-[#B38E58] leading-none">
                    €{giftAmount}
                  </span>
                  <p className="text-[12px] font-sans text-[#F8F6F1]/70 mt-2 italic">
                    {recipientName ? `Pour: ${recipientName}` : "Pour: L'Hôte Privé"}
                  </p>
                </div>

                <div className="flex justify-between items-end border-t border-[rgba(248,246,241,0.1)] pt-3 text-[10px] font-mono text-[#666159]">
                  <span>REDEEMABLE 24 MONTHS</span>
                  <span>NO. 75005-ATELIER</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
