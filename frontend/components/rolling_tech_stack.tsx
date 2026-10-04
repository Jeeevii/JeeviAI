import Image from "next/image"
import { technologies } from "@/lib/portfolio"

export default function RollingTechStack() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-y border-gray-800 bg-gray-950/30 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="skills-title" className="text-center text-xl font-bold tracking-tight">TOOLS I <span className="text-orange-400">BUILD WITH</span></h2>
        <ul className="sr-only">{technologies.map(tech => <li key={tech.name}>{tech.name}</li>)}</ul>
        <div className="tech-ticker mt-5">
          <input id="pause-technologies" type="checkbox" className="mr-2 h-4 w-4 accent-orange-400" />
          <label htmlFor="pause-technologies" className="inline-flex min-h-11 cursor-pointer items-center text-sm text-gray-300">Pause scrolling</label>
          <div className="ticker-viewport overflow-hidden py-3" aria-hidden="true">
            <div className="ticker-track flex w-max">
              {[0, 1].map(copy => (
                <div key={copy} className={`ticker-copy flex shrink-0 gap-4 pr-4 ${copy === 1 ? "ticker-duplicate" : ""}`}>
                  {technologies.map(tech => (
                    <div key={tech.name} className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-3 rounded-lg border border-gray-800 bg-gray-900/60">
                      {tech.image ? <Image src={tech.image} alt="" width={32} height={32} className="h-8 w-8 object-contain" /> : <span className="flex h-8 items-center font-mono text-xl font-bold text-purple-300">{tech.monogram}</span>}
                      <span className="text-xs font-medium text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
