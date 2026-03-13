"use client"

import Image from "next/image"

interface TechItem {
  name: string
  image: string
  color: string
}

const techItems: TechItem[] = [
  { name: "Python", color: "#3776AB", image: "/icons/skills/python.svg" },
  { name: "C/C++", color: "#00599C", image: "/icons/skills/cc.svg" },
  { name: "TypeScript", color: "#3178C6", image: "/icons/skills/typescript.svg" },
  { name: "React", color: "#61DAFB", image: "/icons/skills/react.svg" },
  { name: "FastAPI", color: "#009688", image: "/icons/skills/fastapi.svg" },
  { name: "Node.js", color: "#5FA04E", image: "/icons/skills/nodejs.svg" },
  { name: "Supabase", color: "#3ECF8E", image: "/icons/skills/supabase.svg" },
  { name: "Bash", color: "#4EAA25", image: "/icons/skills/bash.svg" },
  { name: "Next.js", color: "#F4F4F5", image: "/icons/skills/nextjs.svg" },
  { name: "Tailwind CSS", color: "#06B6D4", image: "/icons/skills/tailwindcss.svg" },
  { name: "LangChain", color: "#1DB954", image: "/icons/skills/langchain.svg" },
  { name: "LlamaIndex", color: "#B388FF", image: "/icons/skills/llamaindex.svg" },
  { name: "PostgreSQL", color: "#4169E1", image: "/icons/skills/postgresql.svg" },
  { name: "Git", color: "#F05032", image: "/icons/skills/git.svg" },
  { name: "Docker", color: "#2496ED", image: "/icons/skills/docker.svg" },
  { name: "Unity", color: "#E4E4E7", image: "/icons/skills/unity.svg" },
  { name: "Linux", color: "#FCC624", image: "/icons/skills/linux.svg" },
]

function rotateItems(items: TechItem[], offset: number) {
  return items.map((_, index) => items[(index + offset) % items.length])
}

const row1 = techItems
const row2 = rotateItems(techItems, Math.ceil(techItems.length / 2))

function TechIcon({ item }: { item: TechItem }) {
  return (
    <div className="group relative flex h-24 w-24 flex-shrink-0 items-center justify-center md:h-28 md:w-28">
      <div
        className="relative h-20 w-20 overflow-hidden rounded-2xl border border-zinc-800/90 bg-[linear-gradient(180deg,rgba(32,32,36,0.96),rgba(18,18,20,0.98))] shadow-[0_16px_38px_rgba(0,0,0,0.26)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:z-10 md:h-24 md:w-24"
        style={{
          borderColor: `${item.color}26`,
          boxShadow: `0 0 0 1px ${item.color}12, 0 16px 38px rgba(0, 0, 0, 0.26)`,
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            className="object-contain p-4 opacity-75 grayscale-[0.15] transition-all duration-300 ease-out group-hover:scale-[0.82] group-hover:-translate-y-2 group-hover:opacity-100 group-hover:grayscale-0 md:p-5"
          />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at top, ${item.color}26 0%, rgba(255,111,0,0.06) 45%, transparent 78%)`,
            }}
          />
          <div className="absolute inset-x-1.5 bottom-1.5 rounded-xl bg-zinc-950/90 px-2 py-1 text-center opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:inset-x-2 md:bottom-2">
            <span
              className="block text-[8px] font-semibold uppercase leading-tight tracking-[0.1em] md:text-[10px] md:tracking-[0.14em]"
              style={{ color: item.color }}
            >
              {item.name}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400/35 to-transparent opacity-60" />
        </div>
      </div>
    </div>
  )
}

function MarqueeTrack({
  items,
  reverse = false,
  speed = 40,
  startOffset = 0,
}: {
  items: TechItem[]
  reverse?: boolean
  speed?: number
  startOffset?: number
}) {
  const duplicated = [...items, ...items, ...items, ...items]

  return (
    <div
      className="animate-marquee flex gap-5 md:gap-7"
      style={{
        animationDirection: reverse ? "reverse" : "normal",
        animationDuration: `${speed}s`,
        animationDelay: `${startOffset}s`,
      }}
    >
      {duplicated.map((item, i) => (
        <TechIcon key={`${item.name}-${i}`} item={item} />
      ))}
    </div>
  )
}

export default function RollingTechStack() {
  return (
    <section id="skills" className="overflow-x-hidden overflow-y-visible border-y border-zinc-800 bg-[linear-gradient(180deg,rgba(16,16,16,0.96),rgba(11,11,12,0.98))] py-12 md:py-16">
      <div className="relative overflow-x-hidden overflow-y-visible">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#101010] via-[#101010]/95 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#101010] via-[#101010]/95 to-transparent md:w-32" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,111,0,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(179,136,255,0.10),transparent_28%)] opacity-80" />

        <div className="relative space-y-9 md:space-y-10">
          <div className="flex overflow-x-hidden overflow-y-visible py-3">
            <MarqueeTrack items={row1} speed={68} />
          </div>

          <div className="flex overflow-x-hidden overflow-y-visible py-3">
            <MarqueeTrack items={row2} reverse speed={82} startOffset={-41} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
