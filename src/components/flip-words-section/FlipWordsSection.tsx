import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsSection() {
  const words = ["Expertise", "Precision", "Craftsmanship", "Reliability"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
        We bring <br />
        <FlipWords words={words} className="text-amber-400" /> <br />
        to every timepiece
      </div>
    </div>
  );
}