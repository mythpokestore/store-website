"use client";

import { useMemo, useState } from "react";
import { productCollections } from "../data/products";
import { ProductCard } from "./ProductCard";

export function ProductShowcase() {
  const defaultCollection =
    productCollections.find((collection) => collection.id === "acrylic") ??
    productCollections[0];

  const [activeCollectionId, setActiveCollectionId] = useState<
    "canvas" | "acrylic"
  >(defaultCollection?.id ?? "acrylic");

  const activeCollection = useMemo(
    () =>
      productCollections.find(
        (collection) => collection.id === activeCollectionId,
      ) ?? productCollections[0],
    [activeCollectionId],
  );

  if (!activeCollection) {
    return null;
  }

  return (
    <section
      id="products"
      className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            Browse Frames
          </p>
          <h2 className="font-heading text-3xl uppercase tracking-[0.08em] sm:text-4xl">
            Pick a type, then explore designs within that type.
          </h2>
          <p className="max-w-2xl text-sm text-white/60">
            Swap between Acrylic for gloss depth or Canvas for a gallery finish.
            Every frame ships ready to mount with hardware and collectors’ grade
            protection.
          </p>
        </header>

        <div className="flex flex-wrap items-center gap-3">
          {productCollections.map((collection) => {
            const isActive = collection.id === activeCollectionId;
            return (
              <button
                key={collection.id}
                type="button"
                onClick={() => setActiveCollectionId(collection.id)}
                className={`inline-flex items-center rounded-full border px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-myth-purple bg-myth-purple text-white"
                    : "border-white/10 bg-surface-elevated text-white/70 hover:text-white"
                }`}
              >
                {collection.title.split(" ")[0]}
              </button>
            );
          })}
        </div>

        <div className="space-y-6 rounded-3xl border border-surface-border bg-surface-elevated/60 p-8 shadow-[0_25px_60px_-45px_rgba(139,92,246,0.5)] sm:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-heading text-2xl uppercase tracking-[0.08em] text-white">
                {activeCollection.title}
              </h3>
              <p className="mt-3 text-sm text-white/60">
                {activeCollection.description}
              </p>
            </div>
            <p className="max-w-lg text-xs text-white/50">
              {activeCollection.detail}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeCollection.products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                variant={activeCollection.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
