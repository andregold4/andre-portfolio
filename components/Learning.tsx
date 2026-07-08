import RevealOnScroll from "./RevealOnScroll";
import {
  Code,
  Layout,
  Server,
  Brain,
  Link,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LearningCard {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const cards: LearningCard[] = [
  {
    icon: Code,
    title: "Programming",
    description:
      "Python, JavaScript, TypeScript. Building fundamentals through hands-on projects and daily practice.",
    delay: 0,
  },
  {
    icon: Layout,
    title: "Frontend",
    description:
      "React, Next.js, Tailwind CSS. Learning how interfaces are designed and built for real users.",
    delay: 0.1,
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Node.js, APIs, databases. Understanding how systems work beneath the surface.",
    delay: 0.2,
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "LLMs, prompt engineering, AI-assisted development. Fascinated by how AI is reshaping what's possible.",
    delay: 0.3,
  },
  {
    icon: Link,
    title: "Blockchain",
    description:
      "Distributed systems, smart contracts, on-chain infrastructure. Learning through daily exposure at Chaos Labs.",
    delay: 0.4,
  },
  {
    icon: Terminal,
    title: "Dev Tools & Cloud",
    description:
      "Git, VS Code, terminal workflows, deployment. Building the habits of a professional engineer.",
    delay: 0.5,
  },
];

function CardItem({ card }: { card: LearningCard }) {
  const Icon = card.icon;
  return (
    <RevealOnScroll delay={card.delay}>
      <div
        className="p-6 rounded-xl border flex flex-col gap-4 transition-colors duration-200 h-full group [border-color:var(--border)] hover:[border-color:var(--primary)]"
        style={{
          background: "var(--card)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <Icon
            size={20}
            style={{ color: "var(--primary)" }}
            strokeWidth={1.5}
          />
          <span
            className="text-[15px] font-medium"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--vivid-foreground)",
            }}
          >
            {card.title}
          </span>
        </div>
        <p
          className="text-[13px] leading-relaxed m-0"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--tertiary-foreground)",
          }}
        >
          {card.description}
        </p>
      </div>
    </RevealOnScroll>
  );
}

export default function Learning() {
  return (
    <section id="learning" className="py-20 px-6 max-w-[860px] mx-auto relative">
      <div
        className="absolute -inset-x-[200px] -inset-y-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(45, 106, 231, 0.03) 0%, transparent 70%)",
        }}
      />
      <div className="flex flex-col gap-12 relative">
        <RevealOnScroll className="flex flex-col gap-4">
          <span
            className="text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--primary)",
            }}
          >
            Learning
          </span>
          <h2
            className="text-[clamp(32px,5vw,44px)] font-medium leading-[1.15] m-0 tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--vivid-foreground)",
            }}
          >
            What I&apos;m exploring
          </h2>
          <p
            className="text-base leading-[1.7] m-0 max-w-[600px]"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--muted-foreground)",
            }}
          >
            Not what I&apos;ve mastered — what I&apos;m currently curious about
            and actively learning.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cards.map((card) => (
            <CardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
