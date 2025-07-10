"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Code, Smartphone } from "lucide-react"

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
                    I'm a passionate full-stack engineer who thrives on building robust backend systems and pushing
                    the boundaries of AI integration. When I'm not architecting scalable solutions, you'll find me
                    exploring cutting-edge technologies, dominating in Valorant, or diving deep into system
                    optimization patterns.
                  </p>
                  <div className="space-y-4">
                    <InfoRow icon={MapPin} text="San Francisco, CA" />
                    <InfoRow icon={Code} text="5+ years of engineering excellence" />
                    <InfoRow icon={Smartphone} text="Mobile-first architecture mindset" />
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6 tracking-wide">SYSTEM.STATS</h3>
                  <div className="space-y-4 text-gray-300 font-mono">
                    <StatItem emoji="🎮" label="valorant_rank" value='"Diamond"' comment="// on good days" />
                    <StatItem emoji="🤖" label="ai_projects" value="3" comment="// including this chat" />
                    <StatItem emoji="☕" label="coffee_intake" value='"~4 cups/day"' comment="// optimal performance" />
                    <StatItem emoji="🌙" label="peak_hours" value='"2:00 AM"' comment="// when magic happens" />
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
