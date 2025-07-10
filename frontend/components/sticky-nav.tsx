"use client"

import { useState } from "react"
import { Menu, X, Code, User, Briefcase, FolderOpen, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StickyNavProps {
  showNav: boolean
}

export function StickyNav({ showNav }: StickyNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Experience", href: "#experience", icon: Briefcase },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const openResume = () => {
    window.open("/resume.pdf", "_blank")
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#101010]/95 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-black tracking-tight">
              <span className="text-orange-400">JEEVI</span>
              <span className="text-white">.AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-semibold tracking-wide"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={openResume}
                className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-6 py-2 font-bold transition-all duration-300 hover:scale-105 border-0"
                style={{
                  clipPath: "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center w-full px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-300 font-semibold tracking-wide"
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={openResume}
                  className="flex items-center w-full px-4 py-3 text-orange-400 hover:bg-orange-500/10 transition-all duration-300 font-semibold tracking-wide"
                >
                  <FileText className="h-5 w-5 mr-3" />
                  Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
