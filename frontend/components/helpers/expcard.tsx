import Image from "next/image"
import type { Experience } from "@/lib/portfolio"

export function ExperienceCard({ title, company, period, description, technologies, icon }: Experience) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900/40 p-5 sm:flex-row sm:gap-5 md:p-6">
      <Image src={icon} alt="" width={48} height={48} sizes="48px" className="h-12 w-12 shrink-0 rounded-md object-contain" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-5">
          <div>
            <h3 className="text-lg font-semibold text-orange-300 sm:text-xl">{title}</h3>
            <p className="mt-1 text-sm font-medium text-white">{company}</p>
          </div>
          <p className="shrink-0 text-sm text-gray-400">{period}</p>
        </div>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300">{description}</p>
        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">{technologies.map(tech => <li key={tech} className="tech-tag">{tech}</li>)}</ul>
      </div>
    </article>
  )
}
