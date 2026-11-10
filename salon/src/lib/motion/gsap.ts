"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Set default animation configs
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  // Optimize ScrollTrigger refresh
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}

export { gsap, ScrollTrigger, useGSAP };
