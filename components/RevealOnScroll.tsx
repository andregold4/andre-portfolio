"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, type Variant } from "framer-motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

const hidden: Variant = { opacity: 0, y: 24 };
const visible: Variant = { opacity: 1, y: 0 };

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -40px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
