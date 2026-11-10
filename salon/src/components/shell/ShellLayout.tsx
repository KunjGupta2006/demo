"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";
import { CustomCursor } from "./CustomCursor";
import { StickyBookingBar } from "./StickyBookingBar";
import { WhatsAppButton } from "./WhatsAppButton";
import { CookieBanner } from "./CookieBanner";

interface ShellLayoutProps {
  children: React.ReactNode;
}

export function ShellLayout({ children }: ShellLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#F8F6F1] text-[#171614]">
      {/* Global Experience Enhancers */}
      <Preloader />
      <CustomCursor />
      <CookieBanner />
      <WhatsAppButton />
      <StickyBookingBar />

      {/* Main Navigation */}
      <Header
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        isMobileMenuOpen={mobileMenuOpen}
      />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Page Slot */}
      <main className="flex-1 w-full pt-[76px]">{children}</main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
