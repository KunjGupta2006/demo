import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { membershipPlans, membershipComparisonMatrix } from "@/data/memberships";
import { FAQAccordion } from "@/components/fitness/FAQAccordion";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Memberships & Pricing | Spark Fitness Bandra",
  description: "Transparent membership pricing for Spark Fitness Bandra West. District Access ₹3,500/mo, Coach+ ₹6,500/mo, Private Performance ₹11,500/mo.",
};

export default function MembershipsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>MEMBERSHIP OPTIONS</SectionLabel>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#F1EEE7] uppercase leading-[0.9] max-w-4xl">
            INVEST IN YOUR <span className="text-[#C8A45D]">STRENGTH.</span>
          </h1>
          <p className="font-body text-base md:text-xl text-[#B8B3A8] max-w-2xl mt-6 leading-relaxed">
            No lock-in traps, no signup penalties. Simple monthly billing designed for serious, consistent strength work.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-20 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-[8px] p-8 flex flex-col justify-between relative ${
                  plan.featured
                    ? "bg-[#262622] border-2 border-[#C8A45D] shadow-2xl scale-100 lg:scale-[1.03]"
                    : "bg-[#10100F] border border-[rgba(241,238,231,0.10)]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#C8A45D] text-[#10100F] font-subhead text-[10px] font-bold uppercase tracking-widest rounded">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h2 className="font-display text-3xl uppercase text-[#F1EEE7]">
                    {plan.name}
                  </h2>
                  <p className="font-body text-xs text-[#B8B3A8] mt-1 mb-6">
                    {plan.tagline}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl text-[#F1EEE7]">
                      {plan.price}
                    </span>
                    <span className="font-subhead text-xs uppercase tracking-widest text-[#77776F]">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 border-t border-[rgba(241,238,231,0.08)] pt-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#B8B3A8]">
                        <Check className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={plan.ctaHref}
                  variant={plan.featured ? "accent" : "secondary"}
                  size="md"
                  className="w-full text-center"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Detailed Feature Comparison Table (Desktop & Tablet) */}
          <div className="mt-16">
            <SectionHeading
              title="FULL PLAN COMPARISON."
              subtitle="See exactly what is included across each membership tier."
            />

            <div className="overflow-x-auto rounded-[8px] border border-[rgba(241,238,231,0.10)] bg-[#10100F]">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-[rgba(241,238,231,0.12)] bg-[#262622]">
                    <th className="p-5 font-subhead text-xs uppercase tracking-widest text-[#F1EEE7] font-bold w-1/3">
                      Features & Services
                    </th>
                    <th className="p-5 font-subhead text-xs uppercase tracking-widest text-[#B8B3A8] font-bold text-center">
                      District Access <br /><span className="text-[#C8A45D]">₹3,500/mo</span>
                    </th>
                    <th className="p-5 font-subhead text-xs uppercase tracking-widest text-[#F1EEE7] font-bold text-center bg-[#C8A45D]/10">
                      Coach+ <br /><span className="text-[#C8A45D]">₹6,500/mo</span>
                    </th>
                    <th className="p-5 font-subhead text-xs uppercase tracking-widest text-[#B8B3A8] font-bold text-center">
                      Private Performance <br /><span className="text-[#C8A45D]">₹11,500/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(241,238,231,0.06)] text-xs">
                  {membershipComparisonMatrix.map((row, i) => (
                    <tr key={i} className="hover:bg-[#191917]">
                      <td className="p-5 font-subhead font-semibold text-[#F1EEE7]">
                        {row.feature}
                      </td>
                      <td className="p-5 text-center text-[#B8B3A8]">
                        {typeof row.district === "boolean" ? (
                          row.district ? (
                            <Check className="w-5 h-5 text-[#C8A45D] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-[#77776F] mx-auto opacity-40" />
                          )
                        ) : (
                          <span className="font-semibold text-[#F1EEE7]">{row.district}</span>
                        )}
                      </td>
                      <td className="p-5 text-center text-[#F1EEE7] bg-[#C8A45D]/5">
                        {typeof row.coachPlus === "boolean" ? (
                          row.coachPlus ? (
                            <Check className="w-5 h-5 text-[#C8A45D] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-[#77776F] mx-auto opacity-40" />
                          )
                        ) : (
                          <span className="font-bold text-[#C8A45D]">{row.coachPlus}</span>
                        )}
                      </td>
                      <td className="p-5 text-center text-[#B8B3A8]">
                        {typeof row.private === "boolean" ? (
                          row.private ? (
                            <Check className="w-5 h-5 text-[#C8A45D] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-[#77776F] mx-auto opacity-40" />
                          )
                        ) : (
                          <span className="font-semibold text-[#F1EEE7]">{row.private}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#10100F]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <SectionHeading title="MEMBERSHIP QUESTIONS." align="center" />
          <FAQAccordion items={faqs.filter(f => f.category === "Memberships" || f.category === "Free Trial")} />
          <div className="mt-12 text-center">
            <Button href="/book-trial" variant="primary" size="lg">
              Book Free Coached Trial First
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
