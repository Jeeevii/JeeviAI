"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Server, Database, PanelTop, Terminal, Gamepad, Bot } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: PanelTop,
    skills: ["React", "Angular", "Figma"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["FastAPI", "Node.js", "C/C++"],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "Firebase", "Supabase", "Docker"],
  },
  {
    title: "AI & ML Development",
    icon: Bot,
    skills: ["LangChain", "LlamaIndex", "CARLA", "Scenic"],
  },
  {
    title: "Game Development",
    icon: Gamepad,
    skills: ["Unity", "Photon", "C#", "Phaser"],
  },
  {
    title: "Dev & Security Tools",
    icon: Terminal,
    skills: ["Git", "Linux", "Bash", "Ghidra", "WireShark"],
  },
]

export default function SkillsSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="skills"
      className={`py-20 border-t border-zinc-800 scroll-m-24 transition-all duration-700 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight text-white">
          TECH <span className="text-orange-400">STACK</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ title, icon: Icon, skills }, i) => (
            <Card
              key={i}
              className="bg-gray-900/60 border border-gray-800 hover:border-orange-500/60 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6 space-x-3">
                  <Icon className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-300 cursor-default"
                    >
                      <img
                        src={`icons/skills/${skill.toLowerCase().replace(/[^a-z0-9]/g, "")}.svg`}
                        alt={skill}
                        className="w-8 h-8 mb-2 object-contain"
                        onError={(e) => {
                          // fallback icon if image missing
                          e.currentTarget.src = "/icons/globals.svg"
                        }}
                      />
                      <p className="text-sm text-gray-300 text-center select-none">{skill}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
