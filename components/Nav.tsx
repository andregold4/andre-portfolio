"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#learning", label: "Learning" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-4">
      <div
        className="flex items-center gap-8 px-6 py-2.5 rounded-xl border transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(12, 17, 29, 0.9)"
            : "rgba(12, 17, 29, 0.8)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "var(--border)",
        }}
      >
        <span
          className="font-medium text-[15px] tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--vivid-foreground)",
          }}
        >
          AG
        </span>
        <div
          className="w-px h-4"
          style={{ background: "var(--border)" }}
        />
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] no-underline transition-colors duration-200 hover:!text-[var(--vivid-foreground)]"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--muted-foreground)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
