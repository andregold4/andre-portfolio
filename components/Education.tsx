import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-[800px] mx-auto">
      <div className="flex flex-col gap-12">
        <RevealOnScroll className="flex flex-col gap-4">
          <span
            className="text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--primary)",
            }}
          >
            Education
          </span>
          <h2
            className="text-[clamp(32px,5vw,44px)] font-medium leading-[1.15] m-0 tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--vivid-foreground)",
            }}
          >
            Where I&apos;m growing
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col gap-8">
          {/* Syracuse */}
          <RevealOnScroll>
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-7 rounded-xl border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-[10px] flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--primary), #4338ca)",
                }}
              >
                <span
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  S
                </span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3
                    className="text-lg font-medium m-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--vivid-foreground)",
                    }}
                  >
                    Syracuse University
                  </h3>
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
                <span
                  className="text-[11px] tracking-[0.03em]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--tertiary-foreground)",
                  }}
                >
                  2025 — 2029 (Expected)
                </span>
                <p
                  className="text-sm leading-[1.7] m-0"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Pursuing software engineering. Starting on campus after
                  completing my first year abroad — bringing a global perspective
                  and a clear sense of direction to everything that comes next.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Verto */}
          <RevealOnScroll delay={0.1}>
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-7 rounded-xl border"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-[10px] flex items-center justify-center border"
                style={{
                  background:
                    "linear-gradient(135deg, var(--background-tertiary), var(--card))",
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="text-xl font-medium"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  V
                </span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3
                  className="text-lg font-medium m-0"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--vivid-foreground)",
                  }}
                >
                  Verto Education — Global Pathway
                </h3>
                <span
                  className="text-[11px] tracking-[0.03em]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--tertiary-foreground)",
                  }}
                >
                  2024 — 2025 · Prague, Czech Republic → Seville, Spain
                </span>
                <p
                  className="text-sm leading-[1.7] m-0"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Spent my first year of college abroad. Prague taught me
                  independence — being dropped into a new country right after
                  high school forced me to grow faster than any classroom could.
                  Seville taught me balance — how to build a daily rhythm of
                  discipline and still make the most meaningful memories of my
                  life.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
