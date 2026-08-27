import React from "react";
import Link from "next/link";
import { Dumbbell, MapPin, Phone, Mail, Clock } from "lucide-react";
import { businessDetails } from "@/data/business";

export const Footer = () => {
  return (
    <footer className="bg-[#191917] border-t border-[rgba(241,238,231,0.10)] text-[#B8B3A8] pt-16 pb-24 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-16 border-b border-[rgba(241,238,231,0.08)]">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-[#C8A45D] flex items-center justify-center text-[#10100F] font-bold">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-display text-2xl tracking-wider text-[#F1EEE7] uppercase">
                SPARK <span className="text-[#C8A45D]">FITNESS</span>
              </span>
            </Link>
            <p className="font-body text-sm text-[#B8B3A8] leading-relaxed max-w-sm">
              {businessDetails.positioning}
            </p>
            <div className="pt-2 font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-semibold">
              {businessDetails.tagline}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-lg tracking-wider text-[#F1EEE7] uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 font-subhead text-xs uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#C8A45D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-[#C8A45D] transition-colors">
                  Training Floor
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="hover:text-[#C8A45D] transition-colors">
                  Memberships
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="hover:text-[#C8A45D] transition-colors">
                  Coaching Team
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-[#C8A45D] transition-colors">
                  Member Results
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C8A45D] transition-colors">
                  About the Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Training Programs */}
          <div className="space-y-3">
            <h4 className="font-display text-lg tracking-wider text-[#F1EEE7] uppercase">
              Programs
            </h4>
            <ul className="space-y-2.5 font-subhead text-xs uppercase tracking-wider">
              <li>
                <Link href="/training#strength-lab" className="hover:text-[#C8A45D] transition-colors">
                  Strength Lab
                </Link>
              </li>
              <li>
                <Link href="/training#performance" className="hover:text-[#C8A45D] transition-colors">
                  Athletic Performance
                </Link>
              </li>
              <li>
                <Link href="/training#small-group" className="hover:text-[#C8A45D] transition-colors">
                  Small Group Coaching
                </Link>
              </li>
              <li>
                <Link href="/training#personal-training" className="hover:text-[#C8A45D] transition-colors">
                  1:1 Personal Training
                </Link>
              </li>
              <li>
                <Link href="/book-trial" className="text-[#C8A45D] hover:underline transition-colors font-bold">
                  Book Free Trial →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Hours */}
          <div className="space-y-3">
            <h4 className="font-display text-lg tracking-wider text-[#F1EEE7] uppercase">
              Location & Hours
            </h4>
            <div className="space-y-3 text-xs text-[#B8B3A8]">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>
                  {businessDetails.location.address}, {businessDetails.location.neighborhood}, {businessDetails.location.city} {businessDetails.location.pincode}
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a href={`tel:${businessDetails.contact.phone}`} className="hover:text-[#F1EEE7]">
                  {businessDetails.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a href={`mailto:${businessDetails.contact.email}`} className="hover:text-[#F1EEE7]">
                  {businessDetails.contact.email}
                </a>
              </div>
              <div className="pt-2 border-t border-[rgba(241,238,231,0.06)] space-y-1">
                <div className="flex items-center gap-1.5 font-subhead text-[11px] uppercase tracking-wider text-[#F1EEE7] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#C8A45D]" /> Operating Hours
                </div>
                {businessDetails.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-[11px]">
                    <span className="text-[#77776F]">{h.days}:</span>
                    <span className="text-[#B8B3A8] font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Notice */}
        <div className="mt-8 p-4 rounded bg-[#262622] border border-[rgba(241,238,231,0.08)] text-xs text-[#77776F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="font-semibold text-[#C8A45D]">Demonstration Website Notice:</span> Spark Fitness is a fictional business project for portfolio demonstration purposes only. All contact info, addresses, pricing, and trainer profiles are illustrative demo content.
          </div>
          <Link href="/book-trial" className="shrink-0 text-[#F1EEE7] underline hover:text-[#C8A45D]">
            Test Trial Booking Form
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-subhead text-xs text-[#77776F]">
          <div>
            © {new Date().getFullYear()} Spark Fitness Club. All rights reserved. Bandra West, Mumbai.
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-[#F1EEE7]">Privacy Policy</a>
            <a href="#" className="hover:text-[#F1EEE7]">Terms of Service</a>
            <a href="#" className="hover:text-[#F1EEE7]">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
