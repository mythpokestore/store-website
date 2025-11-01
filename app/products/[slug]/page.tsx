import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  variantMeta,
} from "../../data/products";
import { ProductGallery } from "../../components/ProductGallery";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({
  params,
}: ProductDetailPageProps): Metadata {
  const entry = getProductBySlug(params.slug);

  if (!entry) {
    return {
      title: "Product Not Found | MythPoke Frames",
    };
  }

  const { product, variant } = entry;
  const meta = variantMeta[variant];

  return {
    title: `${product.name} | MythPoke ${meta.label} Frame`,
    description: `${product.name} — ${meta.spec}. Tagged ${product.tag} and finished with ${product.rarity} detailing. Explore the full MythPoke collection.`,
  };
}

export default function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const entry = getProductBySlug(params.slug);

  if (!entry) {
    notFound();
  }

  const { product, variant } = entry;
  const meta = variantMeta[variant];

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
          >
            <svg
              aria-hidden="true"
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
            Back to Catalog
          </Link>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
            <span className="inline-flex items-center rounded-full bg-myth-purple/10 px-3 py-1 text-[10px] font-medium text-myth-purple">
              {product.tag}
            </span>
            {meta.label}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ProductGallery product={product} variant={variant} />

          <div className="space-y-4 order-2 lg:order-none">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              {meta.label} Edition
            </p>
            <h1 className="font-heading text-4xl uppercase tracking-[0.08em] sm:text-5xl">
              {product.name}
            </h1>
            <p className="text-sm text-white/70">
              {meta.spec} finished in{" "}
              <span className="text-white">{product.rarity}</span>. Hand-tuned
              palettes matched to collectors’ lighting setups. Each frame ships
              ready to display with archival protection.
            </p>

            <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-surface-border bg-surface-elevated/60 p-6 text-sm text-white/70">
              <div>
                <p className="uppercase tracking-[0.28em] text-white/40">
                  Price
                </p>
                <p className="mt-1 text-2xl font-semibold text-myth-purple">
                  {product.price}
                </p>
              </div>
              <div>
                <p className="uppercase tracking-[0.28em] text-white/40">
                  Variant
                </p>
                <p className="mt-1 text-base text-white">{meta.label}</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.28em] text-white/40">
                  Tag
                </p>
                <p className="mt-1 text-base text-white">{product.tag}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-2 text-xs uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
              >
                Browse More
              </Link>
              <Link
                href="/#faq"
                className="inline-flex items-center justify-center rounded-full bg-myth-purple px-6 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white transition hover:bg-myth-purple-dark"
              >
                Framing FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
