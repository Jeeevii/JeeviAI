import { ExperienceCard } from "@/components/helpers/expcard"
import { earlierExperiences, experiences } from "@/lib/portfolio"

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-shell">
      <h2 id="experience-title" className="section-title">WORK <span className="text-orange-400">EXPERIENCE</span></h2>
      <div className="space-y-4">{experiences.map(exp => <ExperienceCard key={exp.company + exp.title} {...exp} />)}</div>
      <details className="mt-6">
        <summary className="disclosure">Earlier experience</summary>
        <div className="mt-5 space-y-4">{earlierExperiences.map(exp => <ExperienceCard key={exp.company} {...exp} />)}</div>
      </details>
    </section>
  )
}
