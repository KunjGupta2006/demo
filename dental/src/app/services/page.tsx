import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/final-cta";
import clinic from "@/data/clinic";

export const metadata: Metadata = {
  title: "Treatments & Services — Pain-Free Dental Care",
  description:
    "Explore our full range of dental treatments at Aura Dental Studio in Indiranagar, Bengaluru. Teeth whitening, braces, clear aligners, implants, root canals, and pediatric care.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Complete Treatment List
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.08]">
              Gentle treatments for <span className="text-blue-600">every smile</span>.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Every procedure at Aura Dental Studio is delivered with modern 3D digital precision, sterile rooms, and honest upfront prices.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-20 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinic.services.map((service, idx) => (
              <div
                key={service.slug}
                className="bg-slate-50/70 rounded-[26px] p-7 border border-slate-200 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-400 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      From ₹{service.priceStarting.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.name}
                  </h2>
                  
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 pt-2">
                    {service.whoIsItFor.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-semibold uppercase tracking-wider border-slate-300">
                    <Link href={`/services/${service.slug}`}>
                      Details
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                    <Link href={`/book?service=${encodeURIComponent(service.name)}`}>
                      Book
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
