"use client";

import { useState, useEffect } from "react";
import clinic from "@/data/clinic";

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  isLoaded: boolean;
  currentDay: string;
  message: string;
}

export function useIsOpen(): OpenStatus {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDay, setCurrentDay] = useState("Monday");
  const [message, setMessage] = useState("Open today 09:00 AM – 08:00 PM");

  useEffect(() => {
    function check() {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: clinic.timezone })
      );
      const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
      setCurrentDay(dayName);
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const todayHours = clinic.hours.find((h) => h.day.toLowerCase() === dayName.toLowerCase());
      if (!todayHours || todayHours.isClosed) {
        setIsOpen(false);
        setMessage("Closed today — emergency line active");
        setIsLoaded(true);
        return;
      }

      const [openH, openM] = todayHours.open.split(":").map(Number);
      const [closeH, closeM] = todayHours.close.split(":").map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      const openNow = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
      setIsOpen(openNow);
      setMessage(
        openNow
          ? `Open today until ${todayHours.close}`
          : `Opens ${todayHours.open} on ${dayName}`
      );
      setIsLoaded(true);
    }

    check();
    const interval = setInterval(check, 60_000);
    return () => clearInterval(interval);
  }, []);

  return {
    isOpen,
    label: isLoaded ? (isOpen ? "Open now" : "Closed") : "",
    isLoaded,
    currentDay,
    message,
  };
}
