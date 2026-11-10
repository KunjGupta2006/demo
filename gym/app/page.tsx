import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  Dumbbell
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/data/programs";
import { membershipPlans } from "@/data/memberships";
import { coaches } from "@/data/coaches";
import { testimonials, progressTimeline } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { businessDetails } from "@/data/business";
import { FAQAccordion } from "@/components/fitness/FAQAccordion";
import { Gallery } from "@/components/fitness/Gallery";

export default function Home() {
  const headCoach = coaches[0];
  const supportingCoaches = coaches.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 2: HERO */}
      <section className="relative min-h-[calc(100vh-80px)] min-h-[680px] flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden border-b border-[rgba(241,238,231,0.10)]">
        {/* Full Bleed Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
            alt="Athlete performing heavy deadlift at Spark Fitness Bandra"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-75 scale-[1.02] transition-transform duration-1000"
          />
          {/* Radial & Linear Dark Gradients for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10100F] via-[#10100F]/80 to-transparent w-full md:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-[#10100F]/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 md:px-10 flex flex-col justify-between min-h-[500px]">
          {/* Eyebrow Location Tag */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#262622]/80 backdrop-blur-md border border-[rgba(241,238,231,0.15)] rounded text-xs font-subhead uppercase tracking-[0.25em] text-[#C8A45D] font-bold mb-6">
              <MapPin className="w-3.5 h-3.5" /> BANDRA WEST / MUMBAI
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F1EEE7] uppercase leading-[0.88] tracking-tight mb-6 max-w-4xl animate-fade-up">
              TRAIN WITH <span className="text-[#C8A45D] transition-colors hover:text-[#DFC17A]">INTENT.</span>
            </h1>

            <p className="font-subhead text-xl sm:text-2xl font-bold text-[#F1EEE7] max-w-2xl mb-4 tracking-wide animate-fade-up">
              Build strength. Move better. Become harder to stop.
            </p>

            <p className="font-body text-base sm:text-lg text-[#B8B3A8] max-w-xl font-normal leading-relaxed mb-8 animate-fade-up">
              A serious strength and conditioning club for people who want expert coaching, high-grade equipment and a structured plan built around measurable progress.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none animate-fade-up">
              <Button href="/book-trial" variant="primary" size="lg">
                Book a Free Trial
              </Button>
              <Button href="/training" variant="secondary" size="lg">
                Explore Training
              </Button>
            </div>

            {/* Microcopy */}
            <div className="flex items-center gap-2 mt-4 text-xs font-subhead uppercase tracking-wider text-[#77776F] animate-fade-up">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
              <span>45-minute coached trial session • No commitment required</span>
            </div>
          </div>

          {/* Decorative Bottom Bar */}
          <div className="pt-16 flex items-end justify-between text-xs font-subhead uppercase tracking-widest text-[#77776F] border-t border-[rgba(241,238,231,0.08)] mt-12 hidden sm:flex animate-fade-in">
            <div>STRENGTH • CONDITIONING • COACHING</div>
            <a href="#proof-strip" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1 group">
              SCROLL TO TRAIN <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROOF STRIP */}
      <section id="proof-strip" className="bg-[#191917] border-b border-[rgba(241,238,231,0.10)] py-8">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[rgba(241,238,231,0.08)]">
            <div className="pt-4 md:pt-0 md:pr-6 hover:-translate-y-0.5 transition-transform">
              <div className="font-display text-2xl sm:text-3xl text-[#F1EEE7] uppercase tracking-wider">
                COACH-LED
              </div>
              <div className="font-subhead text-xs text-[#77776F] uppercase tracking-widest mt-1">
                Zero Unsupervised Guesswork
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 hover:-translate-y-0.5 transition-transform">
              <div className="font-display text-2xl sm:text-3xl text-[#F1EEE7] uppercase tracking-wider">
                PROGRAMMED
              </div>
              <div className="font-subhead text-xs text-[#77776F] uppercase tracking-widest mt-1">
                4-Week Overload Blocks
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 hover:-translate-y-0.5 transition-transform">
              <div className="font-display text-2xl sm:text-3xl text-[#F1EEE7] uppercase tracking-wider">
                PREMIUM
              </div>
              <div className="font-subhead text-xs text-[#77776F] uppercase tracking-widest mt-1">
                Eleiko Racks & Platforms
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 hover:-translate-y-0.5 transition-transform">
              <div className="font-display text-2xl sm:text-3xl text-[#C8A45D] uppercase tracking-wider">
                SMALL GROUPS
              </div>
              <div className="font-subhead text-xs text-[#77776F] uppercase tracking-widest mt-1">
                Capped at 6 Members / Coach
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRAINING PHILOSOPHY (THE DISTRICT METHOD) */}
      <section className="py-20 md:py-28 border-b border-[rgba(241,238,231,0.10)] bg-[#10100F]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <SectionLabel>THE DISTRICT METHOD</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F1EEE7] uppercase leading-[0.95] tracking-tight">
                DON'T JUST WORK OUT. <br />
                <span className="text-[#C8A45D]">TRAIN FOR SOMETHING.</span>
              </h2>
              <p className="font-body text-base md:text-lg text-[#B8B3A8] leading-relaxed">
                Every session on our floor has a clear target. Our coaches combine strength fundamentals, athletic conditioning, movement quality, and progressive loading so you always know exactly what you are working toward.
              </p>

              {/* Three Vertical Principles */}
              <div className="space-y-6 pt-4">
                <div className="flex gap-4 p-5 bg-[#191917] rounded-[8px] border border-[rgba(241,238,231,0.08)] hover-card-lift">
                  <div className="w-10 h-10 rounded bg-[#C8A45D]/10 flex items-center justify-center text-[#C8A45D] shrink-0 font-display text-xl font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wider text-[#F1EEE7]">
                      PROGRESSIVE
                    </h3>
                    <p className="font-body text-sm text-[#B8B3A8] mt-1">
                      Training evolves as your capacity evolves. No random daily workouts designed simply to tire you out.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-[#191917] rounded-[8px] border border-[rgba(241,238,231,0.08)] hover-card-lift">
                  <div className="w-10 h-10 rounded bg-[#C8A45D]/10 flex items-center justify-center text-[#C8A45D] shrink-0 font-display text-xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wider text-[#F1EEE7]">
                      COACHED
                    </h3>
                    <p className="font-body text-sm text-[#B8B3A8] mt-1">
                      Technique, intensity, and bar velocity are actively guided by coaches who know your background and targets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-[#191917] rounded-[8px] border border-[rgba(241,238,231,0.08)] hover-card-lift">
                  <div className="w-10 h-10 rounded bg-[#C8A45D]/10 flex items-center justify-center text-[#C8A45D] shrink-0 font-display text-xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wider text-[#F1EEE7]">
                      MEASURABLE
                    </h3>
                    <p className="font-body text-sm text-[#B8B3A8] mt-1">
                      Track meaningful improvements in barbell strength, work capacity, and joint mobility over structured blocks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Documentary Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] md:h-[580px] w-full rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.12)] bg-[#191917] group">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
                  alt="Head Coach Kabir Malhotra correcting athlete squat mechanics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#10100F]/90 backdrop-blur-md border border-[rgba(241,238,231,0.10)] rounded">
                  <div className="font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                    BANDRA FACILITY • COACHING IN ACTION
                  </div>
                  <div className="font-display text-lg text-[#F1EEE7] uppercase mt-1">
                    "Every Rep Earned With Form"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRAINING PROGRAMS */}
      <section className="py-20 md:py-28 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>OUR SERVICES</SectionLabel>
          <SectionHeading
            title="FIND YOUR TRAINING FLOOR."
            subtitle="Select the coaching format that fits your experience, schedule, and performance intent."
          />

          {/* Programs Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Program Card (Strength Lab - Large Panel) */}
            <div className="lg:col-span-7 bg-[#262622] rounded-[8px] border border-[rgba(241,238,231,0.10)] overflow-hidden flex flex-col justify-between group hover-card-lift">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={programs[0].image}
                  alt={programs[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262622] via-[#262622]/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#10100F]/90 backdrop-blur-sm border border-[rgba(241,238,231,0.15)] rounded font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                    {programs[0].tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-3xl sm:text-4xl text-[#F1EEE7] uppercase">
                  {programs[0].title}
                </h3>
                <p className="font-body text-base text-[#B8B3A8] leading-relaxed">
                  {programs[0].description}
                </p>

                <ul className="space-y-2 pt-2">
                  {programs[0].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#F1EEE7]">
                      <Check className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-subhead uppercase tracking-wider text-[#77776F]">
                    {programs[0].idealFor}
                  </span>
                  <Button href={programs[0].ctaHref} variant="accent" size="sm">
                    {programs[0].ctaText}
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column (Stacked 3 Programs) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {programs.slice(1).map((program) => (
                <div
                  key={program.id}
                  className="bg-[#262622] p-6 rounded-[8px] border border-[rgba(241,238,231,0.10)] hover-card-lift group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="font-subhead text-[10px] uppercase tracking-widest text-[#C8A45D] font-bold">
                        {program.tag}
                      </span>
                      <h4 className="font-display text-2xl text-[#F1EEE7] uppercase mt-0.5 group-hover:text-[#C8A45D] transition-colors">
                        {program.title}
                      </h4>
                    </div>
                    <Button href={program.ctaHref} variant="ghost" size="sm" className="shrink-0">
                      View →
                    </Button>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#B8B3A8] leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRAINING FLOOR EXPERIENCE */}
      <section className="py-20 md:py-28 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Collage Left */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-72 rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.10)] hover-card-lift">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
                  alt="Bandra strength floor power racks"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-72 rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.10)] mt-6 hover-card-lift">
                <Image
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
                  alt="Dumbbells and Eleiko plate details"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-72 rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.10)] -mt-6 hover-card-lift">
                <Image
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
                  alt="Conditioning turf track"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 sm:h-72 rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.10)] hover-card-lift">
                <Image
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop"
                  alt="Architectural lighting and barbell area"
                  fill
                  sizes="50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>THE ENVIRONMENT</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F1EEE7] uppercase leading-[0.95]">
                BUILT FOR SERIOUS WORK.
              </h2>
              <p className="font-body text-base md:text-lg text-[#B8B3A8] leading-relaxed">
                A focused training floor with enough room to move, enough calibrated equipment to progress, and an atmosphere designed to leave distractions outside.
              </p>

              {/* Equipment Feature Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Olympic Lifting Platforms",
                  "Heavy Power Racks",
                  "Dual Cable Stations",
                  "Dumbbells (5kg to 50kg)",
                  "Sled Turf Track",
                  "Active Mobility Zone",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 bg-[#191917] rounded border border-[rgba(241,238,231,0.08)] hover:border-[#C8A45D]/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#C8A45D]" />
                    <span className="font-subhead text-xs font-semibold text-[#F1EEE7] uppercase tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button href="/book-trial" variant="primary" size="md">
                  Book a Coached Floor Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MEMBERSHIPS PREVIEW */}
      <section className="py-20 md:py-28 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>TRANSPARENT PRICING</SectionLabel>
          <SectionHeading
            title="CHOOSE YOUR COMMITMENT."
            subtitle="No hidden activation fees, no multi-year lock-in traps. Just clear pricing for dedicated strength."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-[8px] p-8 flex flex-col justify-between relative hover-card-lift ${
                  plan.featured
                    ? "bg-[#262622] border-2 border-[#C8A45D] shadow-2xl scale-100 lg:scale-[1.03] z-10"
                    : "bg-[#10100F] border border-[rgba(241,238,231,0.10)]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#C8A45D] text-[#10100F] font-subhead text-[10px] font-bold uppercase tracking-widest rounded shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-3xl uppercase text-[#F1EEE7]">
                    {plan.name}
                  </h3>
                  <p className="font-body text-xs text-[#B8B3A8] mt-1 mb-6">
                    {plan.tagline}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl text-[#F1EEE7] tracking-tight">
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

                <div className="space-y-3">
                  <Button
                    href={plan.ctaHref}
                    variant={plan.featured ? "accent" : "secondary"}
                    size="md"
                    className="w-full text-center"
                  >
                    {plan.cta}
                  </Button>
                  <p className="text-[10px] text-center text-[#77776F] uppercase tracking-wider">
                    Demo pricing — replaceable before launch
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/memberships"
              className="inline-flex items-center gap-2 font-subhead text-xs uppercase tracking-widest text-[#C8A45D] hover:underline font-bold transition-all hover:translate-x-1"
            >
              Compare All Plan Features & Options →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: COACH SPOTLIGHT */}
      <section className="py-20 md:py-28 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>EXPERT LEADERSHIP</SectionLabel>
          <SectionHeading
            title="COACHING CHANGES EVERYTHING."
            subtitle="Our coaches are full-time performance practitioners focused on posture, mechanics, and measurable strength."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Featured Coach Portrait */}
            <div className="lg:col-span-6 bg-[#191917] rounded-[8px] border border-[rgba(241,238,231,0.10)] overflow-hidden hover-card-lift">
              <div className="relative h-[420px] sm:h-[500px] w-full group">
                <Image
                  src={headCoach.image}
                  alt={headCoach.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191917] via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <span className="font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                  {headCoach.role}
                </span>
                <h3 className="font-display text-4xl text-[#F1EEE7] uppercase">
                  {headCoach.name}
                </h3>
                <p className="font-body text-sm text-[#B8B3A8] leading-relaxed">
                  "{headCoach.philosophy}"
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {headCoach.specialty.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#262622] rounded text-[11px] font-subhead uppercase tracking-wider text-[#F1EEE7]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Supporting Coaches List */}
            <div className="lg:col-span-6 space-y-6">
              {supportingCoaches.map((coach) => (
                <div
                  key={coach.id}
                  className="bg-[#191917] p-5 sm:p-6 rounded-[8px] border border-[rgba(241,238,231,0.10)] flex items-center gap-5 hover-card-lift group"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border border-[rgba(241,238,231,0.2)]">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      sizes="96px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="font-subhead text-[10px] uppercase tracking-widest text-[#C8A45D] font-bold">
                      {coach.role}
                    </span>
                    <h4 className="font-display text-2xl text-[#F1EEE7] uppercase mt-0.5 group-hover:text-[#C8A45D] transition-colors">
                      {coach.name}
                    </h4>
                    <p className="font-body text-xs text-[#B8B3A8] line-clamp-2 mt-1">
                      {coach.bio}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <Button href="/coaches" variant="secondary" size="md">
                  Meet the Full Coaching Team →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: RESULTS / SOCIAL PROOF */}
      <section className="py-20 md:py-28 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>MEMBER OUTCOMES</SectionLabel>
          <SectionHeading
            title="THE WORK SHOWS."
            subtitle="Authentic member feedback from Bandra professionals who prioritized structured coaching."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#262622] p-8 rounded-[8px] border border-[rgba(241,238,231,0.10)] flex flex-col justify-between space-y-6 hover-card-lift"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C8A45D]/40">
                      <Image src={t.image} alt={t.name} fill sizes="48px" className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-[#F1EEE7] uppercase">{t.name}, {t.age}</h4>
                      <span className="font-subhead text-[10px] uppercase tracking-wider text-[#77776F]">{t.profession}</span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-[#B8B3A8] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(241,238,231,0.06)]">
                  <div className="font-subhead text-[10px] uppercase tracking-widest text-[#C8A45D] font-bold">
                    Key Outcome
                  </div>
                  <div className="font-subhead text-xs font-semibold text-[#F1EEE7] mt-0.5">
                    {t.keyOutcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: PROGRESS TIMELINE */}
      <section className="py-20 md:py-28 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>PROGRESSION PHILOSOPHY</SectionLabel>
          <SectionHeading
            title="PROGRESS ISN'T A BEFORE-AND-AFTER PHOTO."
            subtitle="We focus on performance markers, joint stability, and consistent habit building that lasts."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {progressTimeline.map((item) => (
              <div key={item.step} className="bg-[#191917] p-6 rounded-[8px] border border-[rgba(241,238,231,0.10)] space-y-3 hover-card-lift">
                <div className="font-display text-4xl text-[#C8A45D]">{item.step}</div>
                <h3 className="font-display text-2xl text-[#F1EEE7] uppercase">{item.title}</h3>
                <p className="font-body text-xs text-[#B8B3A8] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: COMMUNITY SECTION */}
      <section className="py-20 md:py-28 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>THE ATMOSPHERE</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F1EEE7] uppercase leading-[0.95]">
                TRAIN TOGETHER.
              </h2>
              <p className="font-body text-base md:text-lg text-[#B8B3A8] leading-relaxed">
                The room is focused. The people aren't distant. Train alongside Bandra members who care about showing up, lifting with technique, and supporting each other's progress.
              </p>
              <div className="pt-2">
                <Button href="/book-trial" variant="primary" size="md">
                  Join a Coached Session
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.12)] hover-card-lift group">
              <Image
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop"
                alt="Community members after workout at Spark Fitness"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: GALLERY WITH LIGHTBOX */}
      <section className="py-20 md:py-28 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>VISUAL TOUR</SectionLabel>
          <SectionHeading
            title="INSIDE THE CLUB."
            subtitle="Explore our equipment, training floor, and coaching environment. Click any photo for expanded view."
          />
          <Gallery />
        </div>
      </section>

      {/* SECTION 13: FAQ ACCORDION */}
      <section className="py-20 md:py-28 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel gold className="justify-center flex">FREQUENT QUESTIONS</SectionLabel>
          <SectionHeading
            title="EVERYTHING YOU NEED TO KNOW."
            subtitle="Got questions before booking your trial? We have straightforward answers."
            align="center"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION 14: LOCATION & HOURS */}
      <section className="py-20 md:py-28 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>FIND US</SectionLabel>
          <SectionHeading
            title="YOUR NEW TRAINING FLOOR."
            subtitle="Conveniently situated on Linking Road Extension in the heart of Bandra West."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Details Left */}
            <div className="lg:col-span-5 bg-[#191917] p-8 rounded-[8px] border border-[rgba(241,238,231,0.10)] flex flex-col justify-between space-y-6 hover-card-lift">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl uppercase text-[#F1EEE7]">
                    Spark Fitness Bandra
                  </h3>
                  <p className="font-body text-sm text-[#B8B3A8] mt-1 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-1" />
                    <span>{businessDetails.location.fullAddress}</span>
                  </p>
                </div>

                <div className="space-y-2 border-t border-[rgba(241,238,231,0.08)] pt-6">
                  <div className="font-subhead text-xs uppercase tracking-wider text-[#C8A45D] font-bold flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Club Operational Hours
                  </div>
                  {businessDetails.hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span className="text-[#77776F]">{h.days}:</span>
                      <span className="text-[#F1EEE7] font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t border-[rgba(241,238,231,0.08)] pt-6">
                  <div className="flex items-center gap-2 text-sm text-[#B8B3A8]">
                    <Phone className="w-4 h-4 text-[#C8A45D]" />
                    <span>Phone: {businessDetails.contact.phone}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  href="https://maps.google.com/?q=Bandra+West+Mumbai"
                  external
                  variant="primary"
                  size="sm"
                  className="flex-1"
                >
                  Get Directions
                </Button>
                <Button
                  href={`tel:${businessDetails.contact.phone}`}
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                >
                  Call Club
                </Button>
              </div>
            </div>

            {/* Stylized Map Visual Right */}
            <div className="lg:col-span-7 relative bg-[#191917] rounded-[8px] border border-[rgba(241,238,231,0.10)] overflow-hidden min-h-[350px] flex items-center justify-center p-8 text-center hover-card-lift">
              <div className="space-y-4 max-w-md">
                <div className="w-14 h-14 bg-[#C8A45D]/10 rounded-full flex items-center justify-center text-[#C8A45D] mx-auto animate-bounce">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl uppercase text-[#F1EEE7]">
                  Bandra West Location Map
                </h4>
                <p className="font-body text-xs text-[#B8B3A8]">
                  Near Turner Road Junction • 14 Linking Road Extension. Fictional demo location visual representation.
                </p>
                <div className="p-3 bg-[#262622] rounded text-xs text-[#C8A45D] font-subhead uppercase tracking-wider font-semibold">
                  5 Mins Walk From Bandra Station West
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL TRIAL CTA */}
      <section className="py-24 bg-gradient-to-b from-[#10100F] to-[#191917] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10 space-y-6">
          <SectionLabel gold className="justify-center flex">TAKE THE FIRST STEP</SectionLabel>
          <h2 className="font-display text-5xl sm:text-7xl text-[#F1EEE7] uppercase leading-[0.9] tracking-tight">
            YOUR NEXT SESSION <br />
            <span className="text-[#C8A45D]">STARTS HERE.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#B8B3A8] max-w-xl mx-auto">
            Stop collecting unused gym memberships. Start building a purposeful training practice with expert coaches in Bandra West.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="/book-trial" variant="primary" size="lg">
              Book Your Free Trial
            </Button>
            <Button href="/memberships" variant="secondary" size="lg">
              View Memberships
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
