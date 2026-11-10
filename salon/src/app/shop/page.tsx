"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CartDrawer, CartItem } from "@/components/shop/CartDrawer";
import { PRODUCTS_DATA } from "@/data/products";

export default function ShopPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: (typeof PRODUCTS_DATA)[0]) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ShellLayout>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      {/* Header */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="flex flex-col sm:flex-row items-baseline justify-between max-w-4xl">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-2">
                [Atelier Formulations & Instruments]
              </span>
              <Heading level={1} size="display-xl" className="mb-4">
                Botanical Apothecary
              </Heading>
              <p className="text-[16px] text-[#666159] leading-relaxed font-light">
                Cold-extracted bioactives, low-pH cuticle glazes, and hand-carved buffalo horn combs. Formulated in small Parisian batches without synthetic silicones.
              </p>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="mt-6 sm:mt-0 font-mono text-[12px] uppercase tracking-wider text-[#171614] hover:text-[#B38E58] border border-[rgba(23,22,20,0.15)] px-4 py-2.5 transition-colors cursor-pointer flex items-center space-x-2 shrink-0"
            >
              <span>Bag</span>
              <span className="bg-[#B38E58] text-[#171614] rounded-full px-2 py-0.5 text-[10px] font-medium">
                {totalItemCount}
              </span>
            </button>
          </div>
        </Container>
      </Section>

      {/* Product Catalog Grid */}
      <Section variant="surface" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="bg-[#F8F6F1] border border-[rgba(23,22,20,0.08)] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="relative aspect-[4/5] bg-[#EFECE5] overflow-hidden mb-6 border border-[rgba(23,22,20,0.06)]">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover grayscale group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#121110]/80 text-[#F8F6F1] font-mono text-[9px] uppercase tracking-widest px-2 py-0.5">
                      {product.volume}
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B38E58] block mb-1">
                    {product.brand}
                  </span>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="font-serif text-[1.4rem] text-[#171614] hover:text-[#B38E58] transition-colors leading-tight block mb-2"
                  >
                    {product.title}
                  </Link>

                  <p className="text-[13px] text-[#666159] leading-relaxed line-clamp-2 mb-4 font-light">
                    {product.description}
                  </p>

                  <span className="font-mono text-[15px] font-medium text-[#171614] block mb-6">
                    ${product.price} USD
                  </span>
                </div>

                <div className="space-y-2 pt-4 border-t border-[rgba(23,22,20,0.06)]">
                  <Button
                    onClick={() => addToCart(product)}
                    variant="brass"
                    size="sm"
                    className="w-full"
                  >
                    Add to Bag
                  </Button>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="block text-center font-sans text-[11px] uppercase tracking-wider text-[#666159] hover:text-[#171614] py-1"
                  >
                    Inspect Formulation →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
