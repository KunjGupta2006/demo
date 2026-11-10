"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import clinic from "@/data/clinic";

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        {/* Soft Modern Luminous Mesh Background */}
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[620px] pointer-events-none opacity-60 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,102,255,0.09),transparent_70%)]" 
        />

        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 z-10">
              {/* Live Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-800">
                  Open Today · Indiranagar, Bengaluru
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-blue-600">
                  New Patients Welcome
                </span>
              </motion.div>

              {/* Bold Human Headline (No Jargon) */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading font-extrabold text-slate-950 text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] tracking-tight"
              >
                Dentistry that actually feels <span className="text-blue-600">gentle</span>.
              </motion.h1>

              {/* Clear, Simple Copy */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              >
                No pain, no lectures, and no surprise bills. We give you comfortable, unhurried dental care in private suites with modern 3D technology.
              </motion.p>

              {/* Direct Simple CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <Button asChild size="lg" className="rounded-full px-8 text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-elevated hover:shadow-card transition-all">
                  <Link href="/book" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Book in 60 Seconds</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-7 text-xs font-semibold uppercase tracking-wider border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50">
                  <a href="#services" className="flex items-center gap-2">
                    <span>Explore Treatments</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </Button>
              </motion.div>

              {/* Verified Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="pt-4 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs font-medium text-slate-600 border-t border-slate-200/80"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Pain-Free Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>3D Digital Smile Scan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-slate-800" />
                  <span>Upfront Written Pricing</span>
                </div>
              </motion.div>
            </div>

            {/* Right Cinematic Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Image Frame with Smooth Scale Hover */}
                <div className="relative rounded-[26px] overflow-hidden border border-slate-200/80 shadow-card bg-slate-100 aspect-[4/4.8] group">
                  <Image
                    src="/images/studio-operatory.jpg"
                    alt="Modern private dental suite in Indiranagar Bengaluru"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent pointer-events-none" />

                  {/* Bottom Image Overlay Pill */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-card flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-sm text-slate-900">
                        Private Treatment Suite
                      </p>
                      <p className="text-xs text-slate-500 font-normal">
                        Soundproof room with tranquil garden view
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Floating Rating Pill */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="absolute -top-4 -right-4 sm:-right-6 bg-white py-3 px-4 rounded-2xl border border-slate-200 shadow-elevated flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-heading font-bold text-sm">
                    4.9
                  </div>
                  <div>
                    <div className="flex items-center text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 block mt-0.5">
                      250+ Google Reviews
                    </span>
                  </div>
                </motion.div>

                {/* Floating Doctor Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden sm:flex absolute -bottom-4 -left-6 bg-white p-3 pr-4 rounded-2xl border border-slate-200 shadow-elevated items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-blue-600 shrink-0">
                    <Image
                      src="/images/dr-priya-sharma.jpg"
                      alt="Dr. Priya Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-xs text-slate-900 block">
                      Dr. Priya Sharma
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Clinic Founder & Specialist
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Clean Metric Counters */}
          <div className="mt-14 sm:mt-18 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "10,000+", label: "Happy Patients Treated" },
              { num: "4.9 ★", label: "Google Rating Score" },
              { num: "12+ Yrs", label: "Specialist Experience" },
              { num: "Zero", label: "Waiting Room Delays" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight block">
                  {stat.num}
                </span>
                <p className="text-xs text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
}
