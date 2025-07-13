"use client"

import { Card, CardContent } from "@/components/ui/card"
import {Gamepad } from "lucide-react"

export default function AboutSection() {
  return (
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
                    I’m a CS student at UC Santa Cruz, graduating in 2026, who loves building projects from scratch, 
                    with a focus on backend systems and APIs. 
                    I’m always working on fun side projects that solve problems or just seem cool and impactful.
                    When I’m not coding, you’ll probably catch me boxing, hooping, lifting, fishing, or gaming with friends.
                    If you’re curious about my work or just wanna chat, check out AI Jeevi 😉
                  </p>
                  <div className="space-y-4">
                    <InfoRow icon={Gamepad} text="Riot Games PLEASE HIRE ME" />
                    {/* <InfoRow icon={Code} text="US Citizen" />
                    <InfoRow icon={Smartphone} text="Brainrotter" /> */}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6 tracking-wide">SYSTEM.STATS</h3>
                    <div className="space-y-4 text-gray-300 font-mono">
                      <StatItem emoji="😭" label="league_rank" value='"Diamond II"' comment="// peaked like 2 years ago.." />
                      <StatItem emoji="💀" label="valorant_rank" value='"Platinum I"' comment="// consistent every blue moon" />
                      <StatItem emoji="💪" label="bench_pr" value="235lb" comment="// during peak bulk.. its like 205lb now" />
                      <StatItem emoji="☕" label="monster_intake" value='"~150 cans"' comment="// lifetime achievement..?" />
                      <StatItem emoji="🤖" label="ai_projects" value="7" comment="// including this" />
                      {/* <StatItem emoji="📖" label="books_read" value="12" comment="// mostly manga & some tech" /> */}
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center text-gray-400 group">
      <div
        className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mr-4"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
      >
        <Icon className="h-4 w-4 text-white" />
      </div>
      <span className="group-hover:text-orange-400 transition-colors">{text}</span>
    </div>
  )
}

function StatItem({
  emoji,
  label,
  value,
  comment,
}: {
  emoji: string
  label: string
  value: string
  comment?: string
}) {
  return (
    <div className="flex items-start border-l-2 border-orange-500 pl-4">
      <span className="text-orange-400 mr-3 text-xl">{emoji}</span>
      <span>
        <span className="text-purple-400">{label}:</span> {value}{" "}
        {comment && <span className="text-gray-500">{comment}</span>}
      </span>
    </div>
  )
}
