import RevealOnScroll from "./RevealOnScroll";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const RESUME_MAILTO =
  "mailto:andregoldberg42@gmail.com?subject=Resume%20Request&body=Hi%20Andre%2C%0A%0AI%E2%80%99d%20love%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!";

const links = [
  {
    href: "mailto:andregoldberg42@gmail.com",
    label: "Email",
    icon: Mail,
    variant: "primary" as const,
  },
  {
    href: "https://github.com/andregold4",
    label: "GitHub",
    icon: Github,
    variant: "outline" as const,
  },
  {
    href: "https://www.linkedin.com/in/andrehgoldberg",
    label: "LinkedIn",
    icon: Linkedin,
    variant: "outline" as const,
  },
  {
    href: RESUME_MAILTO,
    label: "Request Resume",
    icon: FileText,
    variant: "ghost" as const,
  },
];

const variantStyles = {
  primary: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    border: "none",
  },
  outline: {
    background: "transparent",
    color: "var(--vivid-foreground)",
    border: "1px solid var(--border)",
  },
  ghost: {
    background: "transparent",
    color: "var(--muted-foreground)",
    border: "none",
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(45, 106, 231, 0.06) 0%, transparent 70%)",
        }}
      />
      <RevealOnScroll className="relative z-10 max-w-[560px] mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 items-center">
          <span
            className="text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--primary)",
            }}
          >
            Contact
          </span>
          <h2
            className="text-[clamp(32px,5vw,44px)] font-medium leading-[1.15] m-0 tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--vivid-foreground)",
            }}
          >
            Let&apos;s connect
          </h2>
          <p
            className="text-base leading-[1.7] m-0"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--muted-foreground)",
            }}
          >
            I&apos;m always open to conversations about software, startups,
            learning, or anything interesting.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => {
            const Icon = link.icon;
            const styles = variantStyles[link.variant];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg text-sm font-medium no-underline transition-opacity hover:opacity-80"
                style={{
                  ...styles,
                  fontFamily: "var(--font-sans)",
                }}
              >
                <Icon size={16} strokeWidth={1.5} />
                {link.label}
              </a>
            );
          })}
        </div>
      </RevealOnScroll>
    </section>
  );
}
