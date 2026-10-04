"use client"

import { useEffect, useState } from "react"
import { Briefcase, Code, FolderOpen, Mail, Menu, User, X } from "lucide-react"
import { profile } from "@/lib/portfolio"

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpen },
]

export function StickyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`

  useEffect(() => {
    function updateVisibility() {
      const visible = window.scrollY > 100
      setIsVisible(visible)
      if (!visible) setIsMenuOpen(false)
    }
    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b border-gray-800 bg-[#101010]/95 backdrop-blur-lg transition-[transform,opacity] duration-300 ${isVisible ? "visible translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"}`}>
      <nav aria-label="Main navigation" className="container mx-auto px-4" onKeyDown={event => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false)
          document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus()
        }
      }}>
        <div className="flex h-16 items-center justify-between">
          <a href="#main" onClick={() => setIsMenuOpen(false)} aria-label="Jeevi - back to top" className="text-xl font-black tracking-tight"><span className="text-orange-400">JEEVI</span>.M</a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map(item => <a key={item.href} href={item.href} className="nav-link">{item.name}</a>)}
            <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="nav-contact" aria-label="Contact Jeevi in Gmail (opens in a new tab)"><Mail size={16} aria-hidden="true" />Contact</a>
          </div>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-200 hover:bg-gray-800 md:hidden">
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-gray-800 pb-4 md:hidden">
            {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="nav-link flex gap-3 px-4"><item.icon size={20} aria-hidden="true" />{item.name}</a>)}
            <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="nav-link flex gap-3 px-4 text-orange-300" aria-label="Contact Jeevi in Gmail (opens in a new tab)"><Mail size={20} aria-hidden="true" />Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}
