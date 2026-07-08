export default function Footer() {
  return (
    <footer
      className="py-8 px-6 flex justify-center border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <span
        className="text-[11px] tracking-[0.03em]"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--tertiary-foreground)",
        }}
      >
        © {new Date().getFullYear()} Andre Goldberg
      </span>
    </footer>
  );
}
