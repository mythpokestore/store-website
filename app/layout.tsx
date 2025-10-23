import type { Metadata } from "next";
import { Inter, Orbitron, Russo_One } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "./components/NavigationBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const russo = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
});

export const metadata: Metadata = {
  title: "MythPoke Frames",
  description:
    "Premium extended Pokémon card frames for collectors — showcase your legends in canvas or acrylic displays.",
  keywords: [
    "Pokemon",
    "frames",
    "collectible",
    "canvas",
    "acrylic",
    "display",
  ],
  openGraph: {
    title: "MythPoke Frames",
    description:
      "Premium extended Pokémon card frames for collectors — canvas and acrylic displays.",
    url: "https://mythpoke.example.com",
    siteName: "MythPoke",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://mythpoke.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${russo.variable}`}
    >
      <body className="bg-night font-body text-white">
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_rgba(13,10,23,0)_65%)]" />
          <div className="relative flex min-h-screen flex-col">
            <NavigationBar />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
