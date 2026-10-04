import { Github, ExternalLink, Video } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/portfolio"

export function ProjectCard({ id, title, category, description, highlights, techStack, githubUrl, liveUrl, liveLabel, demoUrl, image, imageAlt, featured = false }: Project & { featured?: boolean }) {
  return (
    <article aria-labelledby={id + "-title"} className="project-card flex h-full flex-col overflow-hidden rounded-xl bg-[#171719] ring-1 ring-white/10 transition-colors hover:ring-orange-400/40 focus-within:ring-orange-400/40">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-950">
        <Image src={image} alt={imageAlt} fill sizes={featured ? "(min-width: 1152px) 355px, (min-width: 1024px) 31vw, (min-width: 768px) 47vw, 94vw" : "(min-width: 1152px) 540px, (min-width: 768px) 47vw, 94vw"} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium tracking-wide text-purple-300">{category}</p>
        <h3 id={id + "-title"} className="mt-2 text-xl font-bold leading-snug text-orange-300">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-300">{description}</p>
        <ul aria-label="Technologies" className="mb-4 mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs leading-6 text-purple-200">{techStack.map(tech => <li key={tech}>{tech}</li>)}</ul>
        {highlights.length > 0 && <details className="mb-4">
          <summary className="cursor-pointer py-3 text-sm font-medium text-gray-300 hover:text-orange-300">Engineering details<span className="sr-only"> for {title}</span></summary>
          <div><ul className="list-disc space-y-2 pb-2 pl-4 text-sm leading-6 text-gray-300 marker:text-orange-400">{highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
        </details>}
        <div className="project-actions mt-auto flex gap-2 border-t border-white/10 pt-4">
          {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={title + " - watch demo (opens in a new tab)"}><Video size={16} aria-hidden="true" />Demo</a>}
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary" aria-label={title + " - " + liveLabel + " (opens in a new tab)"}><ExternalLink size={16} aria-hidden="true" />{liveLabel === "Game build" ? "Build" : liveLabel === "Read report" ? "Report" : "Visit site"}</a>}
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={title + " - source code (opens in a new tab)"}><Github size={16} aria-hidden="true" />Code</a>}
        </div>
      </div>
    </article>
  )
}
