import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/mythpoke",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zm-6 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@mythpoke",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M13,2c1.2,1.4,2.8,2.4,4.6,2.6V8c-1.2-.1-2.4-.5-3.5-1v7.1c0,2.8-2.3,5-5,5S4,16.9,4,14.1s2.3-5,5-5c.5,0,1,.1,1.4.2v2.2C9.9,11.3,9.5,11.2,9,11.2c-1.7,0-3,1.3-3,2.9s1.3,2.9,3,2.9s3-1.3,3-2.9V2H13z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/mythpoke",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M13 3h4V0h-4c-3.3 0-6 2.7-6 6v3H4v4h3v11h4V13h3.1l.9-4H11V6c0-1.1.9-2 2-2z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/90 px-6 py-12 sm:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="font-heading text-2xl uppercase tracking-[0.12em] text-white">
            MythPoke Studio
          </p>
          <p className="text-sm text-white/60">
            Premium extended Pokémon card frames made for collectors and curated
            galleries.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface-elevated text-white/70 transition hover:border-myth-purple hover:text-white"
            >
              <span className="sr-only">{social.name}</span>
              <span className="transition group-hover:scale-110">
                {social.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl text-xs uppercase tracking-[0.3em] text-white/40">
        © {new Date().getFullYear()} MythPoke Studio — Trainers welcome.
      </div>
    </footer>
  );
}
