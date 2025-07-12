"use client"

import { useState, useEffect } from "react"
import { StickyNav } from "@/components/helpers/nav"
import { AIChatPanel } from "@/components/helpers/aichatpanel"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"

import HeroSection from "@/components/hero/hero"
import AboutSection from "@/components/hero/about"
import SkillsSection from "@/components/hero/skills"
import ProjectsSection from "@/components/hero/project"
import ExperienceSection from "@/components/hero/exp"
import Footer from "@/components/hero/footer"

export default function PortfolioPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowNav(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#101010] text-white overflow-x-hidden">
      <StickyNav showNav={showNav} />

      <Button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 ${
          isChatOpen ? "hidden" : "flex"
        }`}
      >
        <Bot className="h-8 w-8" />
      </Button>

      <HeroSection onChatOpen={() => setIsChatOpen(true)} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />

      <AIChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
