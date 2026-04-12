"use client"

const ITEMS = [
  "React", "★", "Next.js", "★", "TypeScript", "★", "Node.js", "★",
  "Laravel", "★", "AWS", "★", "MongoDB", "★", "UI/UX", "★",
  "Full-Stack", "★", "GetGround", "★", "Bacancy", "★", "Open Source", "★",
]

export function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="relative py-5 overflow-hidden border-y border-violet-500/15 bg-[#07070d]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #07070d, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #07070d, transparent)" }} />

      <div className="marquee-track flex gap-6 w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest uppercase ${
              item === "★"
                ? "text-violet-500/60"
                : "text-zinc-500 hover:text-violet-400 transition-colors cursor-default"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
