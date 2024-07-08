import React from "react";
import { FlipWordsSection } from "@/components/flip-words-section/FlipWordsSection";
import Header from "@/components/header/Header";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/hero-background.png"
          layout="fill"
          objectFit="cover"
          alt="Watch background"
          className="opacity-30"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <FlipWordsSection />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg">
            Renown Watch Services has been a trusted name in watch repair and maintenance for over two decades...
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
          <p className="text-lg">
            We specialize in both vintage and modern watches, with expertise spanning across various brands and complications...
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-lg">
            At Renown Watch Services, we don't just repair watches – we preserve timekeeping heritage...
          </p>
        </motion.section>
      </div>
    </div>
  );
}