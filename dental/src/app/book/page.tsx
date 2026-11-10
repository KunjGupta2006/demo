import { Suspense } from "react";
import { Metadata } from "next";
import { BookingForm } from "@/components/sections/booking-form";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Book an Appointment — Pain-Free Dental Care",
  description:
    "Schedule your dental appointment at Aura Dental Studio in Indiranagar, Bengaluru. Same-day appointments, no waiting delays, and instant confirmation.",
};

export default function BookPage() {
  return (
    <div className="pt-24 pb-12">
      <Suspense
        fallback={
          <Container className="py-24 text-center">
            <div className="animate-pulse space-y-4 max-w-md mx-auto">
              <div className="h-8 bg-slate-200 rounded-full w-48 mx-auto" />
              <div className="h-4 bg-slate-100 rounded-full w-64 mx-auto" />
              <div className="h-64 bg-slate-100 rounded-3xl" />
            </div>
          </Container>
        }
      >
        <BookingForm />
      </Suspense>
    </div>
  );
}
