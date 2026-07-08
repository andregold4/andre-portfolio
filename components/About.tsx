import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 px-6 max-w-[800px] mx-auto overflow-hidden"
    >
      <RevealOnScroll className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span
            className="text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--primary)",
            }}
          >
            About
          </span>
          <h2
            className="text-[clamp(32px,5vw,44px)] font-medium leading-[1.15] m-0 tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--vivid-foreground)",
            }}
          >
            The short version
          </h2>
        </div>

        <div
          className="flex flex-col gap-6 text-base leading-[1.75]"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--muted-foreground)",
          }}
        >
          <RevealOnScroll delay={0.1}>
            <p className="m-0">
              Right after high school, I did something most people thought was
              unusual — I left the country. Through{" "}
              <span style={{ color: "var(--vivid-foreground)" }}>
                Verto Education&apos;s Global Pathway
              </span>
              , I spent my first year of college abroad, starting in Prague and
              then moving to Seville.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="m-0">
              Prague was a reset. Thousands of miles from home, I had to figure
              out independence from scratch — how to navigate a new city, a new
              culture, a new version of myself. It was uncomfortable in the best
              way. Seville was where I turned those lessons into something
              sustainable — building a rhythm of gym, class, homework, and the
              kind of friendships that actually shape you.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="m-0">
              Now I&apos;m at{" "}
              <span style={{ color: "var(--vivid-foreground)" }}>
                Syracuse University
              </span>
              , expected to graduate in 2029, and interning at{" "}
              <span style={{ color: "var(--vivid-foreground)" }}>
                Chaos Labs
              </span>{" "}
              — a company building critical infrastructure at the intersection
              of data and risk. I work on the business development side, but I
              spend every spare moment learning how to build software. I shadow
              engineers, take on side projects, and ask a lot of questions.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <p className="m-0">
              I&apos;m not trying to present myself as someone who&apos;s
              already made it. I&apos;m someone who genuinely enjoys learning
              difficult things, solving problems, and constantly improving.
              Software engineering, AI, blockchain, startups — these aren&apos;t
              just interests. They&apos;re what I think about when I don&apos;t
              have to think about anything.
            </p>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>
    </section>
  );
}
