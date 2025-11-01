import Link from "next/link";
import { variantMeta } from "../data/products";
import type { Product } from "../data/products";

type ProductVariant = keyof typeof variantMeta;

type ProductCardProps = {
  product: Product;
  variant: ProductVariant;
};

export function ProductCard({ product, variant }: ProductCardProps) {
  const [primary, secondary, accent] = product.palette;
  const meta = variantMeta[variant];

  return (
    <article className="group flex h-full flex-col gap-6 rounded-3xl border border-surface-border bg-surface-elevated/80 p-6 shadow-[0_10px_30px_-20px_rgba(139,92,246,0.45)] transition hover:border-myth-purple">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
        <span className="text-white/50">
          {meta.label} — <span className="text-white/70">{product.name}</span>
        </span>
        <span className="inline-flex items-center rounded-full bg-myth-purple/10 px-3 py-1 text-[10px] font-medium text-myth-purple">
          {product.tag}
        </span>
      </div>
      <p className="text-sm text-white/60">
        {meta.spec} · <span className="text-white/70">{product.rarity}</span>
      </p>
      <div className="relative">
        <div
          className="h-48 rounded-2xl border border-white/5 bg-gradient-to-b from-white/10 to-transparent p-[2px] transition group-hover:border-myth-purple/40"
          style={{
            boxShadow: `0 25px 45px -30px ${accent}AA`,
          }}
        >
          <div
            className="flex h-full items-center justify-center rounded-[calc(theme(borderRadius.2xl)-4px)] bg-gradient-to-b from-[#1a142c] via-[#0e0a1d] to-[#070510]"
            style={{
              backgroundImage: `linear-gradient(150deg, ${primary}33, ${secondary}22, ${accent}11)`,
            }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/20">
              {meta.label} product image
            </span>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-semibold text-myth-purple">
          {product.price}
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center rounded-full bg-myth-purple px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white transition hover:bg-myth-purple-dark"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
