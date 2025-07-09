"use client"

import { useState, useEffect } from "react"
import {
  MapPin,
  Code,
  Database,
  Globe,
  Smartphone,
  MessageCircle,
  Github,
  Linkedin,
  FileText,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Bot,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AIChatPanel } from "@/components/ai-chat-panel"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { StickyNav } from "@/components/sticky-nav"

export default function Portfolio() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description:
        "A smart task management app with AI-driven prioritization and natural language processing for task creation.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "React", "OpenAI API"],
      githubUrl: "https://github.com/jeevi/ai-task-manager",
      liveUrl: "https://ai-tasks.jeevi.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Real-time Chat Platform",
      description:
        "Scalable chat application with WebSocket support, message encryption, and file sharing capabilities.",
      techStack: ["Node.js", "Socket.io", "MongoDB", "React", "Redis"],
      githubUrl: "https://github.com/jeevi/realtime-chat",
      liveUrl: "https://chat.jeevi.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "E-commerce Analytics Dashboard",
      description:
        "Comprehensive analytics dashboard for e-commerce businesses with real-time metrics and predictive insights.",
      techStack: ["Python", "Django", "PostgreSQL", "Chart.js", "Celery"],
      githubUrl: "https://github.com/jeevi/ecommerce-analytics",
      liveUrl: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for predictive analytics with automated model training and deployment.",
      techStack: ["Python", "TensorFlow", "Kubernetes", "MLflow", "Apache Airflow"],
      githubUrl: "https://github.com/jeevi/ml-pipeline",
      liveUrl: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology with smart contracts.",
      techStack: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubUrl: "https://github.com/jeevi/blockchain-voting",
      liveUrl: "https://vote.jeevi.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "DevOps Automation Suite",
      description: "Comprehensive CI/CD pipeline automation with monitoring, testing, and deployment orchestration.",
      techStack: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Prometheus"],
      githubUrl: "https://github.com/jeevi/devops-suite",
      liveUrl: null,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const experiences = [
    {
      title: "Senior Full Stack Engineer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description:
        "Leading backend architecture for microservices handling 1M+ daily requests. Built AI-powered features that increased user engagement by 40%.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    },
    {
      title: "Backend Developer",
      company: "StartupXYZ",
      period: "2022 - 2023",
      description:
        "Developed scalable APIs and database systems. Implemented real-time features and optimized query performance by 60%.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
    },
    {
      title: "Software Engineering Intern",
      company: "InnovateLabs",
      period: "2021 - 2022",
      description:
        "Built full-stack web applications and contributed to open-source projects. Gained experience in agile development practices.",
      technologies: ["React", "Python", "Flask", "MySQL", "Git"],
    },
  ]

  const socialLinks = [
    { name: "Resume", icon: FileText, url: "/docs/jeevithanM_swe_resume.pdf", color: "text-orange-400" },
    { name: "GitHub", icon: Github, url: "https://github.com/jeeevii", color: "text-white" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/jeevithan-mahenthran", color: "text-blue-400" },
    { name: "Medium", icon: BookOpen, url: "https://medium.com/@jeevithanmahenthran", color: "text-green-400" },
  ]

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#101010] text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <StickyNav showNav={showNav} />

      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 ${isChatOpen ? "hidden" : "flex"}`}
      >
        <Bot className="h-8 w-8" />
      </Button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 111, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 111, 0, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              <span className="block text-white">HEY, I'M</span>
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                JEEVI
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-400 mt-4">
                👋 FULL STACK SOFTWARE ENGINEER
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Computer Science student at <span className="text-blue-400 font-semibold">UC Santa Cruz</span> who loves building <span className="text-orange-400 font-semibold">scalable systems</span> and exploring <span className="text-purple-400 font-semibold">AI projects</span>. 
              Always down to learn, solve everyday problems, and look for <span className="text-red-400 font-semibold">j*b opportunities</span>.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gray-800 border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  clipPath:
                    "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                }}
              >
                <Code className="mr-3 h-5 w-5" />
                VIEW MY WORK
              </Button>
              <Button
                size="lg"
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 border-0"
                style={{
                  clipPath:
                    "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                }}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                TALK TO ME (AI)
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-8 animate-fade-in">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`${link.color} hover:scale-110 transition-all duration-300 p-4 border border-gray-800 hover:border-orange-500/50 bg-gray-900/50 backdrop-blur-sm group`}
                  style={{
                    clipPath:
                      "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  }}
                >
                  <link.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
              <span className="text-orange-400">ABOUT</span> <span className="text-white">ME</span>
            </h2>
            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                      I'm a passionate full-stack engineer who thrives on building robust backend systems and pushing
                      the boundaries of AI integration. When I'm not architecting scalable solutions, you'll find me
                      exploring cutting-edge technologies, dominating in Valorant, or diving deep into system
                      optimization patterns.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-400 group">
                        <div
                          className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mr-4"
                          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
                        >
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <span className="group-hover:text-orange-400 transition-colors">San Francisco, CA</span>
                      </div>
                      <div className="flex items-center text-gray-400 group">
                        <div
                          className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mr-4"
                          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
                        >
                          <Code className="h-4 w-4 text-white" />
                        </div>
                        <span className="group-hover:text-orange-400 transition-colors">
                          5+ years of engineering excellence
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400 group">
                        <div
                          className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mr-4"
                          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
                        >
                          <Smartphone className="h-4 w-4 text-white" />
                        </div>
                        <span className="group-hover:text-orange-400 transition-colors">
                          Mobile-first architecture mindset
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-orange-400 mb-6 tracking-wide">SYSTEM.STATS</h3>
                    <div className="space-y-4 text-gray-300 font-mono">
                      <div className="flex items-start border-l-2 border-orange-500 pl-4">
                        <span className="text-orange-400 mr-3 text-xl">🎮</span>
                        <span>
                          <span className="text-purple-400">valorant_rank:</span> "Diamond"{" "}
                          <span className="text-gray-500">// on good days</span>
                        </span>
                      </div>
                      <div className="flex items-start border-l-2 border-purple-500 pl-4">
                        <span className="text-purple-400 mr-3 text-xl">🤖</span>
                        <span>
                          <span className="text-orange-400">ai_projects:</span> 3{" "}
                          <span className="text-gray-500">// including this chat</span>
                        </span>
                      </div>
                      <div className="flex items-start border-l-2 border-orange-500 pl-4">
                        <span className="text-orange-400 mr-3 text-xl">☕</span>
                        <span>
                          <span className="text-purple-400">coffee_intake:</span> "~4 cups/day"{" "}
                          <span className="text-gray-500">// optimal performance</span>
                        </span>
                      </div>
                      <div className="flex items-start border-l-2 border-purple-500 pl-4">
                        <span className="text-purple-400 mr-3 text-xl">🌙</span>
                        <span>
                          <span className="text-orange-400">peak_hours:</span> "2:00 AM"{" "}
                          <span className="text-gray-500">// when magic happens</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
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

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
              <span className="text-orange-400">FEATURED</span> <span className="text-white">PROJECTS</span>
            </h2>

            {/* Scrollable carousel */}
            <div className="relative">
              {/* Navigation Arrows */}
              <Button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full p-3 backdrop-blur-sm"
                size="sm"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full p-3 backdrop-blur-sm"
                size="sm"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Projects Container */}
              <div className="overflow-hidden mx-8">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentProjectIndex * (100 / Math.min(projects.length, window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%)`,
                  }}
                >
                  {projects.map((project, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Counter */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <span className="text-gray-400 text-sm">
                  {currentProjectIndex + 1} / {projects.length}
                </span>
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentProjectIndex ? "bg-orange-500" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
              <span className="text-white">WORK</span> <span className="text-orange-400">EXPERIENCE</span>
            </h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900/50 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4 font-mono">
              <span className="text-orange-400">Built with</span> Next.js + Tailwind CSS +{" "}
              <span className="text-purple-400">lots of ☕</span>
            </p>
            <p className="text-gray-600 text-sm font-mono">© 2024 Jeevi.dev - All systems operational</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Panel */}
      <AIChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
