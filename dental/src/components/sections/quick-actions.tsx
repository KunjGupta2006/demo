"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import clinic from "@/data/clinic";

const items = [
  {
    icon: Calendar,
    title: "Book Online",
    desc: "Instant confirmation in 60s",
    href: "/book",
    isExternal: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    desc: "Replies in under 5 mins",
    href: `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent("Hello Aura Dental, I would like to book an appointment.")}`,
    isExternal: true,
  },
  {
    icon: Phone,
    title: "Call Direct",
    desc: "+91 98765 43210",
    href: `tel:${clinic.phone}`,
    isExternal: false,
  },
  {
    icon: MapPin,
    title: "Find Clinic",
    desc: "12th Main Road, Indiranagar",
    href: clinic.address.mapsUrl,
    isExternal: true,
  },
];

export function QuickActions() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {items.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="group p-6 sm:p-7 transition-all duration-300 hover:bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              );

              return item.isExternal ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : item.href.startsWith("tel:") ? (
                <a key={item.title} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <Link key={item.title} href={item.href} className="block">
                  {content}
                </Link>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
