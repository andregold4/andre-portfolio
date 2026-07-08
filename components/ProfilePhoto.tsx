"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";

interface ProfilePhotoProps {
  heroRef: RefObject<HTMLElement | null>;
}

export default function ProfilePhoto({ heroRef }: ProfilePhotoProps) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -22]);

  return (
    <motion.div
      className="shrink-0"
      style={{ opacity: scrollOpacity, y: scrollY, willChange: "transform, opacity" }}
    >
      <motion.figure
        className="m-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
      >
        <div
          className="relative w-[96px] h-[96px] sm:w-[108px] sm:h-[108px] md:w-[132px] md:h-[132px] lg:w-[144px] lg:h-[144px] overflow-hidden rounded-full"
          style={{
            background: "rgba(20, 27, 45, 0.5)",
            border: "1px solid color-mix(in srgb, var(--primary) 16%, var(--border))",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.22)",
          }}
        >
          <Image
            src="/images/profile.png"
            alt="Andre Goldberg"
            width={288}
            height={288}
            priority
            className="w-full h-full object-cover object-center saturate-[0.82]"
            sizes="(max-width: 640px) 108px, (max-width: 1024px) 132px, 144px"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(12, 17, 29, 0.06) 0%, rgba(12, 17, 29, 0.24) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </motion.figure>
    </motion.div>
  );
}
