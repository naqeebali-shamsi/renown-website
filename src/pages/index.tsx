import { Inter } from "next/font/google";
import { HeroHighlightDemo } from "@/components/hero-section/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/infinite-moving-cards-section/CardsCarousel";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col min-h-screen w-full ${inter.className}`}>
      <Header />
      <HeroHighlightDemo />
      <InfiniteMovingCardsDemo />
    </main>
  );
}