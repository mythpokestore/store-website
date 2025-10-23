import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "FAQs", href: "#faq" },
];

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MythPoke"
            width={547}
            height={98}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#products"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:text-white"
          aria-label="Open cart"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6 4.5 3H2" />
            <circle cx="9" cy="19" r="1.2" fill="currentColor" />
            <circle cx="17" cy="19" r="1.2" fill="currentColor" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
