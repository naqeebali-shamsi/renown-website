"use client";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/legacy/image";

export function HeroHighlightDemo() {
  const [opacity, setOpacity] = useState(1);
  const [textSize, setTextSize] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.2;
      const fadeEnd = windowHeight * 0.8;
      const opacity = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(opacity);

      // Calculate text size increase
      const maxSize = 1.5; // Maximum size multiplier
      const sizeIncrease = Math.min(scrollPosition / windowHeight, maxSize - 1);
      setTextSize(1 + sizeIncrease);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero-section" className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden">
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
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center pt-32" style={{ opacity }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: textSize }}
          transition={{ duration: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-400 mb-6"
          style={{ 
            lineHeight: 1.2,
            transition: 'font-size 0.1s ease-out'
          }}
        >
          Renown Watch Services
        </motion.h1>
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center mb-80" style={{ opacity }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight sm:leading-snug mx-auto max-w-4xl"
        >
          Time heals all,{" "}
          <Highlight className="text-white">
            we heal time
          </Highlight>. 
        </motion.h2>
      </div>
    </div>
  );
}