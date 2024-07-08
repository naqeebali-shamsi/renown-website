"use client";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/legacy/image";

export function HeroHighlightDemo() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-background.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />
      
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-0" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 w-full pointer-events-none opacity-30" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight sm:leading-snug text-center mx-auto max-w-4xl"
      >
        Time heals all,{" "}
        <Highlight className="text-white">
          we heal time
        </Highlight>. 
      </motion.h1>
      </div>
    </div>
  );
}