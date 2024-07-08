"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gray-900 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Customer Testimonials</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    "quote": "I recently decided to make enquires about getting my Dads military watch repaired. It's been sitting in a drawer since he passed away in 1977. I met with Yasir and upon inspection said due to its age it was in need of reconditioning, cleaning and some new parts. Ie springs/mechanism was broken, the crown was damaged and the crystal in very bad shape. Considering it was the only watch my Dad had ever worn while (even while serving in north Africa and Italy) I was hopeful this very special piece could be fixed And it was! Within a week :-) Yasir did an amazing job, watch is running perfectly, looks great and I'm so pleased to be able to wear it. Yasir is pure professionalism and a pleasure to deal with. Thank you so much. Below are the before and after photos.",
    "name": "Carol Magister",
    "title": "Chief Customer"
  },
  {
    "quote": "Great service. Replaced some damaged links and pins on a Movado done by another Watch service place. This man is a gentleman and knows his craft. Very professional and humble. Great pricing. Good experience. Is now my Go-To Watch repair man.",
    "name": "Matthew B",
    "title": "Chief Customer"
  },
  {
    "quote": "Yasir has worked on many of my watches, and he does it to absolute perfection, like a magician. I am grateful for you and your work Yasir!",
    "name": "Salar Babazadeh",
    "title": "Chief Customer"
  },
  {
    "quote": "Yasir provides exceptional service! He is such a good man and caters as best as he can to make sure you are satisfied with the work. 100% recommended",
    "name": "John Whang",
    "title": "Chief Customer"
  }
];
