"use client"

import { Button } from "@/components/ui/button"
import Github from "@/public/icons/github.png"
import Linkedin from "@/public/icons/linkedin.png"
import Medium from "@/public/icons/medium.png"
import Image from 'next/image';
import { Code, BotMessageSquare, FileText } from "lucide-react"

const socialLinks = [
  { name: "Resume", icon: FileText, type: "react", url: "/docs/jeevithan_mahenthran_resume.pdf", color: "text-orange-400" },
  { name: "GitHub", icon: Github, url: "https://github.com/jeeevii"},
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/jeevithan-mahenthran" },
  { name: "Medium", icon: Medium, url: "https://medium.com/@jeevithanmahenthran"},
]

export default function HeroSection({ onChatOpen }: { onChatOpen: () => void }) {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
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
      
      {/* Intro Page */}
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="block text-white">HEY, I'M</span>
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
              JEEVI
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-400 mt-4">
            <span
              className="inline-block origin-[70%_70%] animate-wave hover:animate-waveHover"
              aria-label="waving hand"
              role="img"
            >
              👋 
            </span> 
             {" "} FULL STACK SOFTWARE ENGINEER
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Currently a computer science student at <span className="text-blue-400 font-semibold">UC Santa Cruz</span> who enjoys building <span className="text-orange-400 font-semibold">impactful systems</span> and exploring <span className="text-purple-400 font-semibold">AI projects</span>. 
            Always down to learn, solve everyday problems, and look for <span className="text-red-400 font-semibold">j*b opportunities</span>.
          </p>

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
              <Code className="mr-2" />
              VIEW MY WORK
            </Button>
            <Button
              size="lg"
              onClick={onChatOpen}
              className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 border-0"
              style={{
                clipPath:
                  "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
              }}
            >
              <BotMessageSquare className="mr-2" />
              TALK TO ME (AI)
            </Button>
          </div>
          <div className="flex justify-center gap-6 animate-fade-in">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="hover:scale-110 transition-transform duration-300 group w-16 h-16 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.type === "react" ? (
                  <link.icon
                    className={`w-14 h-14 group-hover:scale-110 transition-transform duration-300 ${link.color || 'text-white'}`}
                  />
                ) : (
                  <Image
                    src={link.icon}
                    alt={link.name}
                    className="group-hover:scale-110 transition-transform duration-300 object-contain"
                    width={56}
                    height={56}
                  />
                )}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
