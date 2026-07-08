"use client";

import { motion } from "framer-motion";

const RESUME_MAILTO =
  "mailto:andregoldberg42@gmail.com?subject=Resume%20Request&body=Hi%20Andre%2C%0A%0AI%E2%80%99d%20love%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-[120px] pb-20">
      {/* Animated gradient backgrounds */}
      <div
        className="absolute inset-0 animate-[pulse-glow_8s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45, 106, 231, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 106, 231, 0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 106, 231, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[720px] text-center flex flex-col items-center gap-6">
        {/* Status line */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--positive)" }}
          />
          <span
            className="text-[11px] uppercase tracking-[0.05em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--muted-foreground)",
            }}
          >
            Currently building at Chaos Labs
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-[clamp(48px,8vw,80px)] font-medium leading-[1.05] m-0 tracking-[-0.03em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--vivid-foreground)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Andre Goldberg
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[clamp(16px,2vw,19px)] leading-relaxed m-0 max-w-[520px]"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--muted-foreground)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Learning how great software is built — one project, one
          conversation, and one challenge at a time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#experience"
            className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-sm font-medium no-underline transition-colors"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-sm font-medium no-underline border transition-colors"
            style={{
              background: "transparent",
              color: "var(--vivid-foreground)",
              borderColor: "var(--border)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Contact
          </a>
          <a
            href={RESUME_MAILTO}
            className="inline-flex items-center justify-center h-10 px-5 rounded-lg text-sm font-medium no-underline transition-colors"
            style={{
              background: "transparent",
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Request Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, var(--tertiary-foreground), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
