import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { Service } from "@/data/clinic";
import clinic from "@/data/clinic";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedServices = clinic.services.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <div className="bg-white">
      {/* Service Hero Header */}
      <section className="pt-36 pb-16 border-b border-slate-200 bg-slate-50/60">
        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-slate-900">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                Dental Care
              </span>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 leading-[1.1] tracking-tight">
                {service.name}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                {service.overview}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-700 font-medium">
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-blue-600" /> Duration: {service.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Pain-Free Promise
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 3D Digital Simulation
                </span>
              </div>
            </div>

            {/* Quick Action Reservation Box */}
            <div className="lg:col-span-4 bg-white rounded-[26px] p-7 border border-slate-200 shadow-card space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-0.5">
                  Treatment Fee
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-heading font-extrabold text-3xl text-slate-900">
                    ₹{service.priceStarting.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-slate-500">({service.priceRange})</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Clear written quote before we begin. 0% interest monthly EMI available.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <Button asChild size="lg" className="w-full rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                  <Link href={`/book?service=${encodeURIComponent(service.name)}`}>
                    Book This Treatment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="md" className="w-full rounded-full text-xs font-semibold uppercase tracking-wider border-slate-300">
                  <a
                    href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                      `Hi! I have a question regarding ${service.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Sections */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Indications */}
              <div>
                <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">
                  Is this treatment right for you?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.whoIsItFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/80 rounded-2xl p-4.5 border border-slate-200 flex items-start gap-3"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-normal leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedure Steps */}
              <div>
                <h2 className="font-heading font-bold text-2xl text-slate-900 mb-5">
                  What happens during your visit
                </h2>
                <div className="space-y-3">
                  {service.procedureSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-slate-200 shadow-2xs"
                    >
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="text-sm text-slate-800 font-normal leading-relaxed pt-0.5">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery */}
              <div className="bg-blue-50/60 rounded-2xl p-6 sm:p-7 border border-blue-200 space-y-1.5">
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Aftercare & Recovery
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {service.recovery}
                </p>
              </div>

              {/* FAQ */}
              {service.faq && service.faq.length > 0 && (
                <div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900 mb-5">
                    Common Questions
                  </h2>
                  <div className="space-y-3">
                    {service.faq.map((q, idx) => (
                      <div key={idx} className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 space-y-1.5">
                        <h4 className="font-heading font-bold text-base text-slate-900">
                          {q.question}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          {q.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  Other Popular Treatments
                </h4>
                <div className="space-y-2 divide-y divide-slate-200">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="flex items-center justify-between py-3 hover:text-blue-600 transition-colors group"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {rel.name}
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">
                          From ₹{rel.priceStarting.toLocaleString("en-IN")}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Free Consult Card */}
              <div className="bg-slate-950 rounded-2xl p-7 text-white space-y-3 shadow-card border border-slate-800">
                <h4 className="font-heading font-bold text-lg">
                  Not sure what you need?
                </h4>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Book a simple checkup session with digital X-rays to get personalized advice.
                </p>
                <div className="pt-1">
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold uppercase tracking-wider w-full">
                    <Link href="/book">Book ₹500 Checkup</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
