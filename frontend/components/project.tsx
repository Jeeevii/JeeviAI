import { ProjectCard } from "@/components/helpers/projectcard"
import { projects } from "@/lib/portfolio"

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-shell">
      <h2 id="projects-title" className="section-title"><span className="text-orange-400">FEATURED</span> PROJECTS</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map(project => <ProjectCard key={project.id} {...project} featured />)}
      </div>
      <details className="mt-8">
        <summary className="disclosure">More projects · Hackathons, events &amp; just for fun</summary>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.slice(3).map(project => <ProjectCard key={project.id} {...project} />)}
        </div>
      </details>
    </section>
  )
}
