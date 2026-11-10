import Link from "next/link";
import { Container } from "@/components/ui/container";
import { InstagramIcon, FacebookIcon, GoogleIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import clinic from "@/data/clinic";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-18 pb-28 lg:pb-16 border-t border-slate-800" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Brand & Summary */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-sm">
                A
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Aura Dental
              </span>
            </Link>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              Gentle, pain-free dental care in Indiranagar, Bengaluru. Advanced 3D smile design, clean private rooms, and transparent pricing.
            </p>

            <div className="flex gap-2 pt-1">
              {clinic.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  {social.platform === "instagram" && <InstagramIcon className="w-3.5 h-3.5" />}
                  {social.platform === "facebook" && <FacebookIcon className="w-3.5 h-3.5" />}
                  {social.platform === "google" && <GoogleIcon className="w-3.5 h-3.5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              <li><a href="/#services" className="hover:text-white transition-colors">Checkup & Teeth Cleaning</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Laser Teeth Whitening</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Invisible Clear Aligners</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Permanent Dental Implants</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Painless Root Canal</a></li>
            </ul>
          </div>

          {/* Studio Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-normal">
              <li><a href="/#results" className="hover:text-white transition-colors">Before & After</a></li>
              <li><a href="/#doctors" className="hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing & EMI</a></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Find Clinic</Link></li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Visit Us
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400 font-normal leading-relaxed">
              <p>{clinic.address.full}</p>
              <p>
                Phone:{" "}
                <a href={`tel:${clinic.phone}`} className="text-white hover:underline">
                  {clinic.phone}
                </a>
              </p>
              <p className="text-slate-500">
                Mon – Sat: 9:00 AM – 8:00 PM (Sun: 10 AM – 2 PM)
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                  "Hi Aura Dental! I would like to inquire about appointments."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-white hover:border-emerald-500 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <span>·</span>
            <span>{clinic.disclaimer}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
