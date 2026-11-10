import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services in the same or nearby category
  const relatedServices = SERVICES_DATA.filter(
    (s) => s.id !== service.id && (s.category === service.category || s.badge)
  ).slice(0, 3);

  return (
    <ShellLayout>
      {/* Service Header Stage */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B38E58]">
                <Link href="/services" className="hover:underline">
                  SERVICES
                </Link>
                <span>/</span>
                <span>{service.category.toUpperCase()}</span>
              </div>

              <Heading level={1} size="display-xl" className="mb-4">
                {service.title}
              </Heading>

              <p className="font-mono text-[13px] uppercase tracking-wider text-[#B38E58] mb-6">
                {service.subtitle}
              </p>

              <p className="text-[17px] text-[#666159] leading-relaxed mb-8 max-w-xl font-light">
                {service.description}
              </p>

              <div className="flex items-center space-x-6 p-4 bg-[#EFECE5] border border-[rgba(23,22,20,0.08)] max-w-md mb-8">
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#666159]">
                    Duration
                  </span>
                  <span className="block font-mono text-[16px] font-medium text-[#171614]">
                    {service.durationMinutes} Minutes
                  </span>
                </div>
                <div className="w-px h-8 bg-[rgba(23,22,20,0.15)]" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#666159]">
                    Investment
                  </span>
                  <span className="block font-mono text-[16px] font-medium text-[#171614]">
                    ${service.price} USD
                  </span>
                </div>
                <div className="w-px h-8 bg-[rgba(23,22,20,0.15)]" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#666159]">
                    Setting
                  </span>
                  <span className="block font-sans text-[13px] font-medium text-[#171614]">
                    Private Suite
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  href={`/booking?service=${service.id}`}
                  variant="brass"
                  size="lg"
                >
                  Book This Specific Service
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Inquire with Concierge
                </Button>
              </div>
            </div>

            {/* Right Large Hero Visual (5 cols) */}
            <div className="lg:col-span-5 relative aspect-[4/5] bg-[#EFECE5] border border-[rgba(23,22,20,0.1)] overflow-hidden shadow-xl">
              <Image
                src={service.featuredImage}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover grayscale contrast-[1.08]"
              />
              <div className="absolute top-4 left-4 bg-[#121110]/85 text-[#F8F6F1] font-mono text-[10px] uppercase tracking-widest px-3 py-1.5">
                DOSSIER // {service.id.toUpperCase()}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Inclusions & 4-Step Process Section */}
      <Section variant="surface" padding="xl" hairlineBottom={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: What's Included (5 cols) */}
            <div className="lg:col-span-5 bg-[#F8F6F1] p-8 sm:p-10 border border-[rgba(23,22,20,0.08)]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58] block mb-2">
                [Protocol Checklist]
              </span>
              <h3 className="font-serif text-[1.8rem] text-[#171614] mb-6">
                What Is Included
              </h3>

              <ul className="space-y-4">
                {service.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[14px] text-[#171614]">
                    <span className="text-[#B38E58] font-mono font-medium">0{idx + 1}</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {service.recommendedAddons && (
                <div className="mt-8 pt-6 border-t border-[rgba(23,22,20,0.08)]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#666159] block mb-2">
                    Recommended Add-ons:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.recommendedAddons.map((addon) => (
                      <span
                        key={addon}
                        className="font-mono text-[11px] bg-[#EFECE5] text-[#171614] px-2.5 py-1 border border-[rgba(23,22,20,0.08)]"
                      >
                        + {addon}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: 4-Step Process Methodology (7 cols) */}
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58] block mb-2">
                [The Methodology]
              </span>
              <h3 className="font-serif text-[2.2rem] text-[#171614] mb-8">
                The Four-Step Ceremony
              </h3>

              <div className="space-y-8">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-6">
                    <span className="font-serif text-[2rem] leading-none text-[#B38E58] shrink-0 w-8">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-serif text-[1.4rem] text-[#171614] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[14px] text-[#666159] leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* FAQs & Related Services */}
      <Section variant="light" padding="xl">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58] block mb-2">
              [Trichological Inquiries]
            </span>
            <Heading level={2} size="h1" className="mb-6">
              Frequently Clarified Inquiries
            </Heading>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-[#EFECE5] border border-[rgba(23,22,20,0.08)]">
                  <h4 className="font-serif text-[1.2rem] text-[#171614] mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-[14px] text-[#666159] leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="border-t border-[rgba(23,22,20,0.1)] pt-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58] block mb-6">
                [Complementary Ceremonies]
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedServices.map((rel) => (
                  <div key={rel.id} className="p-6 bg-[#EFECE5] border border-[rgba(23,22,20,0.08)] flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-[#666159]">
                        {rel.durationMinutes} MIN · ${rel.price}
                      </span>
                      <h4 className="font-serif text-[1.4rem] text-[#171614] mt-1 mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-[13px] text-[#666159] line-clamp-2 mb-4 font-light">
                        {rel.subtitle}
                      </p>
                    </div>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="editorial-link font-sans text-[11px] uppercase tracking-wider text-[#171614] font-medium"
                    >
                      Inspect Service →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </ShellLayout>
  );
}
