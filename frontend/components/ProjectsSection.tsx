"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management app with AI-driven prioritization and natural language processing for task creation.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "React", "OpenAI API"],
    githubUrl: "https://github.com/jeevi/ai-task-manager",
    liveUrl: "https://ai-tasks.jeevi.dev",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Real-time Chat Platform",
    description: "Scalable chat app with WebSocket support, message encryption, and file sharing.",
    techStack: ["Node.js", "Socket.io", "MongoDB", "React", "Redis"],
    githubUrl: "https://github.com/jeevi/realtime-chat",
    liveUrl: "https://chat.jeevi.dev",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "Comprehensive analytics dashboard with real-time metrics and predictive insights.",
    techStack: ["Python", "Django", "PostgreSQL", "Chart.js", "Celery"],
    githubUrl: "https://github.com/jeevi/ecommerce-analytics",
    liveUrl: null,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline with automated model training and deployment.",
    techStack: ["Python", "TensorFlow", "Kubernetes", "MLflow", "Apache Airflow"],
    githubUrl: "https://github.com/jeevi/ml-pipeline",
    liveUrl: null,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology.",
    techStack: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    githubUrl: "https://github.com/jeevi/blockchain-voting",
    liveUrl: "https://vote.jeevi.dev",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "DevOps Automation Suite",
    description: "CI/CD pipeline automation with monitoring, testing, and deployment orchestration.",
    techStack: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Prometheus"],
    githubUrl: "https://github.com/jeevi/devops-suite",
    liveUrl: null,
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3)
      else if (window.innerWidth >= 768) setVisibleCount(2)
      else setVisibleCount(1)
    }
    updateVisible()
    window.addEventListener("resize", updateVisible)
    return () => window.removeEventListener("resize", updateVisible)
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
            <span className="text-orange-400">FEATURED</span> <span className="text-white">PROJECTS</span>
          </h2>

          <div className="relative">
            <Button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full p-3 backdrop-blur-sm" size="sm">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full p-3 backdrop-blur-sm" size="sm">
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="overflow-hidden mx-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <span className="text-gray-400 text-sm">
                {currentIndex + 1} / {projects.length}
              </span>
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-orange-500" : "bg-gray-600"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
