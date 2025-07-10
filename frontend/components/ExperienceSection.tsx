"use client"

import { ExperienceCard } from "@/components/experience-card"

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description: "Leading backend architecture for microservices handling 1M+ daily requests. Built AI-powered features that increased user engagement by 40%.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
  },
  {
    title: "Backend Developer",
    company: "StartupXYZ",
    period: "2022 - 2023",
    description: "Developed scalable APIs and database systems. Implemented real-time features and optimized query performance by 60%.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
  },
  {
    title: "Software Engineering Intern",
    company: "InnovateLabs",
    period: "2021 - 2022",
    description: "Built full-stack web applications and contributed to open-source projects. Gained experience in agile development practices.",
    technologies: ["React", "Python", "Flask", "MySQL", "Git"],
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
