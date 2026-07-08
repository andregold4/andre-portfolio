import RevealOnScroll from "./RevealOnScroll";

const interests = [
  "Fitness",
  "Sports",
  "Photography",
  "Fishing",
  "Golf",
  "Traveling",
];

export default function BeyondKeyboard() {
  return (
    <section className="py-20 px-6 max-w-[800px] mx-auto">
      <div className="flex flex-col gap-12">
        <RevealOnScroll className="flex flex-col gap-4">
          <span
            className="text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--primary)",
            }}
          >
            Life
          </span>
          <h2
            className="text-[clamp(32px,5vw,44px)] font-medium leading-[1.15] m-0 tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--vivid-foreground)",
            }}
          >
            Beyond the keyboard
          </h2>
          <p
            className="text-base leading-[1.7] m-0 max-w-[560px]"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--muted-foreground)",
            }}
          >
            The things that keep me balanced — and make the work better.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap gap-2.5">
            {interests.map((interest) => (
              <div
                key={interest}
                className="py-3.5 px-[22px] rounded-[10px] border flex items-center gap-2.5 transition-colors duration-200 cursor-default [border-color:var(--border)] hover:[border-color:var(--border-bright)]"
                style={{
                  background: "var(--card)",
                }}
              >
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--vivid-foreground)",
                  }}
                >
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p
            className="text-[15px] leading-[1.7] m-0"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--tertiary-foreground)",
            }}
          >
            I believe the best engineers aren&apos;t one-dimensional. Traveling
            taught me to adapt. Fitness taught me discipline. Photography taught
            me to notice details. These things make me a better problem solver —
            not despite being unrelated to code, but because of it.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
