"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe } from "lucide-react"

const skills = [
  { name: "Python", icon: Code },
  { name: "FastAPI", icon: Code },
  { name: "PostgreSQL", icon: Database },
  { name: "Supabase", icon: Database },
  { name: "React", icon: Globe },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code },
  { name: "Docker", icon: Code },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight">
            <span className="text-white">TECH</span> <span className="text-orange-400">STACK</span>
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm group overflow-hidden"
              >
                <CardContent className="p-4 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <skill.icon className="h-6 w-6 mx-auto mb-2 text-orange-400 group-hover:text-white transition-colors duration-300 relative z-10" />
                  <p className="font-semibold text-xs text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10 tracking-wide">
                    {skill.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
