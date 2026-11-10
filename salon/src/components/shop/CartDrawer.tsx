"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { Button } from "@/components/ui/Button";
import { IconClose } from "@/components/ui/Icons";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderComplete(true);
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Atelier Botanical Bag"
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs"
    >
      <div className="w-full max-w-md bg-[#F8F6F1] text-[#171614] h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[rgba(23,22,20,0.1)]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B38E58] block">
              [Atelier Formulations]
            </span>
            <h3 className="font-serif text-[1.6rem] text-[#171614]">
              Your Formulation Bag
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#171614] hover:text-[#B38E58] transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <IconClose size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 py-6 overflow-y-auto">
          {isOrderComplete ? (
            <div className="p-8 text-center my-auto flex flex-col items-center">
              <span className="w-12 h-12 rounded-full bg-[#3F5A2A]/15 text-[#3F5A2A] flex items-center justify-center font-mono text-[20px] mb-4">
                ✓
              </span>
              <h4 className="font-serif text-[1.8rem] text-[#171614] mb-2">
                Order Documented
              </h4>
              <p className="text-[13px] text-[#666159] leading-relaxed mb-6 font-light">
                Your botanical formulations will be packaged in recyclable vellum with a personalized apothecary card.
              </p>
              <Button onClick={onClose} variant="primary" size="sm">
                Continue Exploration
              </Button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20 text-[#666159]">
              <p className="font-serif text-[1.4rem] text-[#171614] mb-2">
                Your bag is empty
              </p>
              <p className="text-[13px] font-light max-w-xs mx-auto mb-6">
                Explore our cold-extracted follicle serums and hand-carved horn combs.
              </p>
              <Button onClick={onClose} variant="secondary" size="sm">
                Browse Boutique
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex space-x-4 border-b border-[rgba(23,22,20,0.06)] pb-6"
                >
                  <div className="relative w-20 h-24 bg-[#EFECE5] shrink-0 border border-[rgba(23,22,20,0.08)]">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-[1.2rem] text-[#171614] leading-tight">
                        {item.product.title}
                      </h4>
                      <span className="font-mono text-[10px] text-[#666159] uppercase block mt-0.5">
                        {item.product.volume}
                      </span>
                      <span className="font-mono text-[13px] font-medium text-[#171614] block mt-1">
                        ${item.product.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[rgba(23,22,20,0.2)] font-mono text-[11px]">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                          }
                          className="px-2 py-0.5 hover:bg-[#EFECE5]"
                        >
                          −
                        </button>
                        <span className="px-2.5 py-0.5">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-2 py-0.5 hover:bg-[#EFECE5]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[11px] font-mono text-[#DC2626] hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {!isOrderComplete && items.length > 0 && (
          <div className="border-t border-[rgba(23,22,20,0.1)] pt-6 space-y-4">
            <div className="flex items-baseline justify-between font-mono">
              <span className="text-[12px] uppercase text-[#666159]">
                Estimated Subtotal
              </span>
              <span className="text-[1.4rem] font-serif font-medium text-[#171614]">
                ${subtotal} USD
              </span>
            </div>

            <p className="text-[11px] font-mono text-[#666159]">
              Complimentary carbon-neutral courier delivery across Europe.
            </p>

            <Button
              onClick={handleCheckout}
              variant="brass"
              size="lg"
              disabled={isCheckingOut}
              className="w-full"
            >
              {isCheckingOut ? "Securing Formulation..." : `Checkout ($${subtotal})`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
