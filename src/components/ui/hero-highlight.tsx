"use client";
import React, { useEffect, useRef } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { cn } from "@/utils/cn";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // useEffect hook to log mouseX and mouseY values
  useEffect(() => {
    const unsubscribeX = mouseX.onChange((x) => console.log("Mouse X:", x));
    const unsubscribeY = mouseY.onChange((y) => console.log("Mouse Y:", y));

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative h-[40rem] w-full overflow-hidden bg-gray-900",
        containerClassName
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 z-10" />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-dot-thick-amber-400 dark:bg-dot-thick-amber-400 opacity-0 transition duration-300 z-20"
        style={{
          opacity: useMotionTemplate`clamp(0, calc(${mouseX} * ${mouseY} / 20000 - 0.7), 1)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, white, transparent)`,
          maskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, white, transparent)`,
        }}
      />
      <div className={cn("relative z-30", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("relative inline", className)}>
      <span className="relative z-10 px-1">{children}</span>
      <motion.span
        className="absolute inset-0 bg-amber-500 rounded-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />
    </span>
  );
};