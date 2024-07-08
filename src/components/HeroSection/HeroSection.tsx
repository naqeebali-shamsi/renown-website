"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight/HeroHighlight';
import { compileFunction } from "vm";

export default function HeroSection() {
  return (
    <motion.div initial="hidden" animate="visible">
    <HeroHighlight className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          <Highlight className="text-white">
            Renown Watch Services
          </Highlight>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-yellow-300 mb-8"
        >
          Time heals all, we heal time
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="/contact" className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300">
            Book a Service
          </a>
        </motion.div>
      </motion.div>
    </HeroHighlight>
    </motion.div>
  );
}