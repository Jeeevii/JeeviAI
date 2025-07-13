"use client"

import { ExperienceCard } from "@/components/helpers/expcard"

const experiences = [
  {
    title: "Full Stack Software Developer",
    company: "UCSC jLabs ENTs Research",
    period: "Mar. 2025 - Present",
    description: "Building full-stack features using React/MUI frontend and Flask REST API backend with Docker containerization, including user interface components, database schema changes, and comprehensive testing",
    technologies: ["Python", "React", "PostgreSQL", "Docker", "AWS", "Redis", "Celery", "Git"],
  },
  {
    title: "Software Engineer Intern",
    company: "UXLY Software",
    period: "Jan. 2025 - Jun. 2025",
    description: "Created intelligent chatbot using LangChain ReACT agent to automate customer support workflows including product queries and order management for e-commerce client",
    technologies: ["Python", "React", "PostgreSQL", "LangChain", "Docker", "LitLLM", "Aporia Guardrails"],
  },
  {
    title: "Frontend Developer Intern",
    company: "UCSC Tech4Good",
    period: "Mar. 2023 - Feb. 2024",
    description: "Built responsive web interfaces from Figma mockups using HTML/CSS, collaborating with development teams through code review and handoff for production implementation",
    technologies: ["Angular", "HTML/CSS", "Docker", "Figma", "Git"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
            <span className="text-white">WORK</span> <span className="text-orange-400">EXPERIENCE</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
