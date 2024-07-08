import { Inter } from "next/font/google";
import { HeroHighlightDemo } from "@/components/hero-section/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/infinite-moving-cards-section/CardsCarousel";
import ServicesSection from "@/components/services-section/ServicesSection";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col min-h-screen w-full ${inter.className}`}>
      <Navbar />
      <HeroHighlightDemo />
      <ServicesSection />
      <InfiniteMovingCardsDemo />
    </main>
  );
}