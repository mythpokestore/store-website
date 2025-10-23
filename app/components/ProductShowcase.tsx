"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

  const carouselRef = useRef<HTMLDivElement>(null);
  const [{ canPrev, canNext }, setScrollState] = useState({
    canPrev: false,
    canNext: true,
  });

  const updateScrollState = useCallback(() => {
    const node = carouselRef.current;
    if (!node) {
      setScrollState({ canPrev: false, canNext: false });
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = node;
    const maxScrollLeft = Math.max(scrollWidth - clientWidth, 0);
    setScrollState({
      canPrev: scrollLeft > 16,
      canNext: scrollLeft < maxScrollLeft - 16,
    });
  }, []);

  const scrollByCard = useCallback((direction: "prev" | "next") => {
    const node = carouselRef.current;
    if (!node) {
      return;
    }

    const firstChild = node.firstElementChild as HTMLElement | null;
    const gap = 24; // corresponds to gap-6 (1.5rem)
    const offset = (firstChild?.clientWidth ?? node.clientWidth) + gap;

    node.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) {
      return;
    }

    updateScrollState();
    const handleScroll = () => updateScrollState();

    node.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      node.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) {
      return;
    }

    node.scrollTo({ left: 0 });
    updateScrollState();
  }, [activeCollection.id, updateScrollState]);

  if (!activeCollection) {
    return null;
  }

  return (
    <section
      id="products"
      className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-12 lg:px-20 scroll-mt-28"
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
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="order-1 md:order-none">
              <h3 className="font-heading text-2xl uppercase tracking-[0.08em] text-white">
                {activeCollection.title}
              </h3>
              <p className="mt-3 text-sm text-white/60">
                {activeCollection.description}
              </p>
            </div>
            <p className="order-3 max-w-lg text-xs text-white/50 md:order-none">
              {activeCollection.detail}
            </p>
            <div className="order-2 flex items-center gap-2 md:order-none">
              <button
                type="button"
                onClick={() => scrollByCard("prev")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                disabled={!canPrev}
                aria-label="Scroll products left"
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
                  <path d="m15 6-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("next")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                disabled={!canNext}
                aria-label="Scroll products right"
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

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {activeCollection.products.map((product) => (
                <div
                  key={product.name}
                  className="snap-start h-full shrink-0 basis-[min(320px,_100%)] sm:basis-[min(360px,_70%)] lg:basis-[min(380px,_45%)] xl:basis-[min(400px,_33%)]"
                >
                  <ProductCard product={product} variant={activeCollection.id} />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-surface-elevated/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-surface-elevated/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
