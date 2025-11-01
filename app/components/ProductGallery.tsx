"use client";

import { useMemo, useState } from "react";
import type { Product } from "../data/products";
import { variantMeta } from "../data/products";

type ProductVariant = keyof typeof variantMeta;

type ProductGalleryProps = {
  product: Product;
  variant: ProductVariant;
};

const opacity = (color: string, alpha: string) => `${color}${alpha}`;

export function ProductGallery({ product, variant }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { label } = variantMeta[variant];
  const [primary, secondary, accent] = product.palette;

  const slides = useMemo(
    () => [
      {
        id: `${product.slug}-hero`,
        caption: `${label} — Front Composition`,
        background: `linear-gradient(155deg, ${opacity(primary, "66")}, ${opacity(
          secondary,
          "33",
        )}, ${opacity(accent, "22")})`,
      },
      {
        id: `${product.slug}-edge`,
        caption: `${label} — Edge Detail`,
        background: `linear-gradient(135deg, ${opacity(accent, "55")}, ${opacity(
          primary,
          "22",
        )}, ${opacity(secondary, "11")})`,
      },
      {
        id: `${product.slug}-texture`,
        caption: `${label} — Texture Closeup`,
        background: `radial-gradient(circle at 20% 20%, ${opacity(
          secondary,
          "55",
        )}, transparent 60%), linear-gradient(160deg, ${opacity(
          primary,
          "22",
        )}, ${opacity(accent, "55")})`,
      },
      {
        id: `${product.slug}-lighting`,
        caption: `${label} — Lighting Shift`,
        background: `linear-gradient(165deg, ${opacity(
          accent,
          "66",
        )}, ${opacity(primary, "33")}), radial-gradient(circle at 80% 30%, ${opacity(
          secondary,
          "44",
        )}, transparent 55%)`,
      },
    ],
    [accent, label, primary, product.slug, secondary],
  );

  const goTo = (index: number) => {
    if (index < 0 || index >= slides.length) {
      return;
    }
    setCurrentIndex(index);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-surface-elevated/60">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <div
                className="flex h-80 items-center justify-center rounded-[calc(theme(borderRadius.3xl)-4px)] bg-gradient-to-b from-[#161126] via-[#0b0818] to-[#04020b] text-center shadow-[0_30px_70px_-45px_rgba(139,92,246,0.6)]"
                style={{ backgroundImage: slide.background }}
              >
                <p className="mx-auto max-w-sm text-xs uppercase tracking-[0.3em] text-white/30">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface-elevated/80 text-white/70 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous gallery image"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 6 9 12l6 6" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === slides.length - 1}
            className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface-elevated/80 text-white/70 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next gallery image"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2.5 w-2.5 rounded-full border transition ${
                isActive
                  ? "border-myth-purple bg-myth-purple shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                  : "border-white/15 bg-white/10 hover:border-myth-purple/40 hover:bg-myth-purple/30"
              }`}
              aria-label={`View gallery slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}

