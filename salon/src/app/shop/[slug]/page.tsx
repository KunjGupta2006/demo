import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { PRODUCTS_DATA } from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <ShellLayout>
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Product Image (5 cols) */}
            <div className="lg:col-span-5 relative aspect-[3/4] bg-[#EFECE5] border border-[rgba(23,22,20,0.1)] overflow-hidden shadow-lg sticky top-28">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover grayscale"
              />
              <div className="absolute top-4 left-4 bg-[#121110]/85 text-[#F8F6F1] font-mono text-[10px] tracking-widest uppercase px-3 py-1">
                {product.volume}
              </div>
            </div>

            {/* Right Product Narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B38E58] mb-3">
                <Link href="/shop" className="hover:underline">
                  BOUTIQUE
                </Link>
                <span>/</span>
                <span>{product.brand.toUpperCase()}</span>
              </div>

              <Heading level={1} size="display-xl" className="mb-2">
                {product.title}
              </Heading>

              <div className="font-mono text-[2rem] font-medium text-[#171614] mb-6">
                ${product.price} USD
              </div>

              <p className="text-[16px] text-[#666159] leading-relaxed mb-8 font-light">
                {product.description}
              </p>

              <div className="flex gap-4 mb-10 pb-8 border-b border-[rgba(23,22,20,0.1)]">
                <Button href="/shop" variant="brass" size="lg" className="flex-1">
                  Return to Boutique to Order
                </Button>
              </div>

              {/* Bioactive Benefits */}
              <div className="mb-10">
                <h3 className="font-serif text-[1.4rem] text-[#171614] mb-4">
                  Bioactive Clinical Efficacy
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-[14px] text-[#171614]">
                      <span className="text-[#B38E58]">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Ritual */}
              <div className="p-6 bg-[#EFECE5] border border-[rgba(23,22,20,0.08)] mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B38E58] block mb-2">
                  [Application Ritual]
                </span>
                <p className="text-[14px] text-[#171614] leading-relaxed font-light">
                  {product.usage}
                </p>
              </div>

              {/* Ingredients Matrix */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#666159] block mb-2">
                  Full Botanical Formulation (INCI):
                </span>
                <p className="font-mono text-[11px] text-[#666159] leading-relaxed break-words">
                  {product.ingredients}
                </p>
              </div>

            </div>

          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
