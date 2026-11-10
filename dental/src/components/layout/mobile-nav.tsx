"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { Button } from "@/components/ui/button";
import clinic from "@/data/clinic";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <MotionConfig reducedMotion="user">
      <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-[60]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  className="fixed inset-0 z-[70] bg-white flex flex-col"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 32, stiffness: 320 }}
                >
                  <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

                  <div className="flex items-center justify-between h-20 px-6 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-heading font-extrabold text-sm">
                        A
                      </div>
                      <span className="font-heading font-bold text-lg text-slate-900">
                        Aura Dental
                      </span>
                    </div>

                    <Dialog.Close asChild>
                      <button
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
                        aria-label="Close menu"
                      >
                        <X className="w-4 h-4 text-slate-700" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav
                    className="flex-1 flex flex-col gap-1 px-6 pt-6"
                    aria-label="Mobile navigation"
                  >
                    {links.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="flex items-center justify-between h-14 text-base font-bold text-slate-900 hover:text-blue-600 transition-colors border-b border-slate-100"
                        >
                          <span>{link.label}</span>
                          <span className="text-slate-400 text-sm">→</span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="px-6 pb-10 space-y-3">
                    <Button asChild size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider">
                      <Link href="/book" onClick={onClose} className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Book Appointment</span>
                      </Link>
                    </Button>
                    <div className="pt-2 text-center text-xs text-slate-500 font-medium">
                      Indiranagar, Bengaluru · Call {clinic.phone}
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </MotionConfig>
  );
}
