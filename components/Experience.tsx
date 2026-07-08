import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-[800px] mx-auto">
      <div className="flex flex-col gap-12">
        <RevealOnScroll className="flex flex-col gap-4">
          <span
            className="text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--primary)",
            }}
          >
            Experience
          </span>
          <h2
            className="text-[clamp(32px,5vw,44px)] font-medium leading-[1.15] m-0 tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--vivid-foreground)",
            }}
          >
            Where I&apos;ve been
          </h2>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="flex flex-col relative">
          {/* Timeline line */}
          <div
            className="absolute left-[11px] top-6 bottom-6 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--primary), var(--border), transparent)",
            }}
          />

          {/* Chaos Labs */}
          <RevealOnScroll className="flex gap-8 py-6 relative">
            <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-1">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center relative z-10"
                style={{ background: "var(--primary)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--vivid-foreground)" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className="text-[11px] tracking-[0.03em]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--tertiary-foreground)",
                  }}
                >
                  2025 — Present
                </span>
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Current
                </span>
              </div>
              <h3
                className="text-[22px] font-medium m-0 tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--vivid-foreground)",
                }}
              >
                Chaos Labs
              </h3>
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--muted-foreground)",
                }}
              >
                Intern — Business Development
              </span>
              <p
                className="text-[15px] leading-[1.7] m-0"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--tertiary-foreground)",
                }}
              >
                Working on the business development side of a company building
                critical data and risk infrastructure. Beyond my core role,
                I&apos;m using this opportunity to learn how production software
                is actually built — shadowing engineers, taking on side
                projects, and absorbing everything I can about how a
                high-performance engineering organization operates.
              </p>
            </div>
          </RevealOnScroll>

          {/* Verto */}
          <RevealOnScroll className="flex gap-8 py-6 relative" delay={0.15}>
            <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-1">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center relative z-10 border"
                style={{
                  background: "var(--background-tertiary)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--muted-foreground)" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <span
                className="text-[11px] tracking-[0.03em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--tertiary-foreground)",
                }}
              >
                2024 — 2025
              </span>
              <h3
                className="text-[22px] font-medium m-0 tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--vivid-foreground)",
                }}
              >
                Verto Education
              </h3>
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--muted-foreground)",
                }}
              >
                Global Pathway Student — Prague &amp; Seville
              </span>
              <p
                className="text-[15px] leading-[1.7] m-0"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--tertiary-foreground)",
                }}
              >
                Completed my first year of university abroad through an
                immersive program across two countries. Learned independence,
                adaptability, and how to build a meaningful life far from home —
                lessons that continue to shape how I approach every new
                challenge.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
