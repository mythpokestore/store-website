import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-12 lg:px-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
          MythPoke Studio
        </span>
        <h1 className="mt-8 font-heading text-4xl uppercase tracking-[0.08em] leading-tight sm:text-5xl md:text-6xl">
          Premium Extended Frames — Acrylic &amp; Canvas
        </h1>
        <p className="mt-6 text-base text-white/70 sm:text-lg">
          MythPoke crafts finished extended-art frames. Choose your type —{" "}
          <strong className="text-white">Acrylic</strong> for glossy depth or{" "}
          <strong className="text-white">Canvas</strong> for a textured gallery
          feel — then pick a design.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-myth-purple px-8 py-3 text-sm font-medium text-white transition hover:bg-myth-purple-dark"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
