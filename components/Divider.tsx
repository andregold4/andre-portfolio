export default function Divider() {
  return (
    <div className="max-w-[800px] mx-auto px-6">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border), transparent)",
        }}
      />
    </div>
  );
}
