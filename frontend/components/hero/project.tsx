"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/helpers/projectcard"
import { Button } from "@/components/ui/button"

// interface ProjectProps {
//   title: string
//   description: string
//   techStack: string[]
//   githubUrl: string
//   liveUrl: string | null
//   image: string
//   demoUrl: string | null
// }

const projects = [
    {
    title: "SlugRush",
    description: "A full stack web app for UCSC students to track gym crowd levels.",
    techStack: ["Next.js", "Vercel", "Python", "Render", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/Jeeevii/SlugRush",
    liveUrl: "https://slugrush.vercel.app",
    image: "/placeholders/placeholder.svg?height=200&width=400",
    demoUrl: null,
  },
  {
    title: "Body & Soul",
    description: "A 2v2 online MOBA developed in Unity 6, where players are bound by a tether, with only the most coordinated team will achieve victory. ",
    techStack: ["Unity", "Photon", "C#"],
    githubUrl: "https://github.com/171-Team-25",
    liveUrl: "https://drive.google.com/file/d/13yVBUx2IcxoUuTJVpGvCxYbKIJIukH2q/view",
    image: "/projects/body&soul.png",
    demoUrl: "https://www.youtube.com/watch?v=Vz5GJUwyOkE",
  },
  {
    title: "Falsification of Autonomous Driving Stacks",
    description: "Research on autonomous vehicle testing in CARLA with WSL, analyzing crash-prone parameters and introducing ChatScene, an LLM-powered Scenic script generator for targeted safety tests.",
    techStack: ["Python", "CARLA", "Scenic", "VerifAI", "ChatScene", "OpenAI 4o-Mini"],
    githubUrl: "https://github.com/Jeeevii/cse233_acc_verifai",
    liveUrl: "docs/cse233_final_report.pdf",
    image: "/projects/cse233.png",
    demoUrl: "https://www.youtube.com/watch?v=yFxkvYchXbo",
  },
  {
    title: "Secure AI",
    description: "An AI-powered tool that scans a public GitHub repository, identifies potential security vulnerabilities, outdated packages, and malicious binaries, explains each one in plain English, and provides actionable remediation tips.",
    techStack: ["GitHub API", "Gemini-2.0-Flash", "Next.js", "TailwindCSS", "Python",],
    githubUrl: "https://github.com/Jeeevii/SecureAI",
    liveUrl: null,
    image: "/placeholders/placeholder.svg?height=200&width=400",
    demoUrl: "https://www.youtube.com/watch?v=f1LCjcX3dho&list=PLNPTwR2U9PYKSRE-SxDom7r8oSXwr7cXo",
  },
  {
    title: "FitCheck AI",
    description: "AI-powered virtual stylist that helps users level up their outfits. Upload a photo of your fit, enter the occasion, and get an AI-generated style rating, outfit suggestions, and a visual upgrade - plus voice feedback to hype (or roast) your look.",
    techStack: ["Flux 1.1 Kontext", "Resemble AI Chatterbox","Gemini-1.5-Flash", "Replicate", "Next.js", "TailwindCSS", "Python"],
    githubUrl: "https://github.com/Jeeevii/FitCheck",
    liveUrl: null,
    image: "/placeholders/placeholder.svg",
    demoUrl: "https://www.youtube.com/watch?v=Melo3dYctjM",
  },
]

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
            <span className="text-orange-400">FEATURED</span>{" "}
            <span className="text-white">PROJECTS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
