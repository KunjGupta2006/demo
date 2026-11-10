import Link from "next/link";
import { Smile, Home, Calendar, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-24 pb-12 bg-gradient-to-b from-mint-tint/20 via-background to-background">
      <Container>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-mint-tint text-primary flex items-center justify-center mx-auto shadow-sm">
            <Smile className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Error 404</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
              Page Not Found
            </h1>
            <p className="text-muted text-sm sm:text-base">
              Looks like this tooth is missing! The page you were looking for doesn’t exist or has moved.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/book">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
