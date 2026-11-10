import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/service-detail";
import { FinalCTA } from "@/components/sections/final-cta";
import clinic from "@/data/clinic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clinic.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = clinic.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} — Pain-Free Treatment in Bengaluru`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | ${clinic.name}`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = clinic.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetail service={service} />
      <FinalCTA />
    </>
  );
}
