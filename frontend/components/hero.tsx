import Image from "next/image"
import { Code, FileText } from "lucide-react"
import { profile } from "@/lib/portfolio"
import { ChatWidget } from "./helpers/chat-widget"

export default function HeroSection() {
  return (
    <section aria-labelledby="intro-title" className="relative isolate overflow-hidden border-b border-gray-800/70">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl sm:left-16" />
      <div aria-hidden="true" className="hero-glow hero-glow-secondary pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-gradient-to-r from-orange-500/15 to-purple-500/15 blur-3xl sm:right-12 sm:h-96 sm:w-96" />

      <div className="relative container mx-auto flex min-h-svh items-center justify-center px-5 py-14 text-center sm:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h1 id="intro-title" className="text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block">
              HEY, I’M
            </span>{" "}
            <span className="block bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">JEEVI</span>
          </h1>
          <p className="mt-5 text-base font-normal text-gray-400 sm:text-2xl lg:text-3xl">
            <span role="img" aria-label="Waving hand" className="mr-2 inline-block origin-[70%_70%] animate-wave text-2xl hover:animate-waveHover sm:text-3xl">👋</span>
            FULL STACK SOFTWARE ENGINEER
          </p>
          <p className="mt-6 text-base font-medium text-gray-300 sm:text-lg lg:text-xl">
            {profile.role} at <span className="text-orange-400">{profile.company}</span>
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-base font-light leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
            I work on backend systems and APIs, debug production issues, and build things outside of work. 
            I like solving messy technical problems and turning ideas into software people can actually use.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
            M.S. in CSE at {profile.university} · Expected {profile.education.mastersExpected}
          </p>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <a href="#projects" className="hero-action hero-action-work">
              <Code size={20} aria-hidden="true" />VIEW MY WORK
            </a>
            <ChatWidget />
          </div>
          <div className="mt-9 flex justify-center gap-3 sm:mt-10 sm:gap-6">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Resume (PDF, opens in a new tab)">
              <FileText className="h-10 w-10 text-orange-400 sm:h-12 sm:w-12" aria-hidden="true" />
            </a>
            {profile.socials.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label={link.name + " (opens in a new tab)"}>
                <Image src={link.image} alt="" width={48} height={48} className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
