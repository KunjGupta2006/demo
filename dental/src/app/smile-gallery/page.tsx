import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SmileSlider } from "@/components/sections/smile-slider";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Real Smile Transformations — Before & After Results",
  description:
    "See authentic before and after results from real patients at Aura Dental Studio in Indiranagar, Bengaluru. Veneers, clear aligners, and laser teeth whitening.",
};

const galleryCases = [
  {
    title: "Handcrafted Porcelain Veneers",
    category: "Smile Makeover",
    doctor: "Dr. Priya Sharma",
    image: "/images/smile-transformation.jpg",
    details: "8 Ceramic Veneers · Natural Bright White",
    timeframe: "2 Weeks · 3 Visits",
    description: "Fixed chipped edges, uneven gaps, and deep staining with natural-looking custom porcelain veneers that match her facial symmetry.",
  },
  {
    title: "Clear Invisible Aligners",
    category: "Teeth Straightening",
    doctor: "Dr. Arjun Mehta",
    image: "/images/smile-after.jpg",
    details: "Zero Metal Brackets · 14 Trays",
    timeframe: "7 Months",
    description: "Closed a wide front gap and gently aligned crowded lower teeth without pulling any teeth or wearing painful metal wires.",
  },
  {
    title: "1-Hour Laser Teeth Whitening",
    category: "Brightening",
    doctor: "Dr. Neha Reddy",
    image: "/images/smile-before.jpg",
    details: "6 Shades Brighter · Enamel Safe",
    timeframe: "Single 60-Minute Visit",
    description: "Removed stubborn coffee and tea stains in a single comfortable afternoon session with zero lingering sensitivity.",
  },
];

export default function SmileGalleryPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="text-[11px] font-semibold tracking-wider text-slate-800 uppercase">
                Real Patient Results
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-950 font-extrabold tracking-tight leading-[1.08]">
              Real smiles. <span className="text-[#0066FF]">Zero filters</span>.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Every photo in our gallery shows real patients treated in our Indiranagar clinic. No Photoshop, no stock models—just healthy, confidence-boosting results.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Split Comparison */}
      <SmileSlider />

      {/* Curated Case Study Grid */}
      <Section className="py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs uppercase tracking-wider font-bold text-[#0066FF] block mb-2">
              Recent Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl text-slate-950 font-bold tracking-tight">
              A closer look at how we help patients smile again
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryCases.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-slate-200 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 border border-slate-200 shadow-xs">
                      {item.timeframe}
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#0066FF] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl text-slate-950 font-bold tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Result Metric</div>
                    <div className="font-semibold text-slate-950">{item.details}</div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{item.doctor}</span>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-1 font-bold text-[#0066FF] hover:text-[#0052cc] transition-colors"
                  >
                    <span>Book Checkup</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TestimonialCarousel />
      <FinalCTA />
    </>
  );
}
