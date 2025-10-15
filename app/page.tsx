import { HeroSection } from "./components/HeroSection";
import { ProductShowcase } from "./components/ProductShowcase";
import { FAQsSection } from "./components/FAQsSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProductShowcase />
      <FAQsSection />
      <Footer />
    </main>
  );
}
