import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Image from "next/image"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  icon: string
}

export function ExperienceCard({ title, company, period, description, technologies, icon }: ExperienceCardProps) {
  return (
    <Card className="bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm group flex gap-6 p-6">
      {/* Big icon on the left */}
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt={`${company} logo`}
          width={64}
          height={64}
          className="rounded-md object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <CardHeader className="p-0 mb-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-2xl text-orange-400 font-bold tracking-wide mb-2">{title}</CardTitle>
              <CardDescription className="text-lg text-white font-semibold mb-2">{company}</CardDescription>
            </div>
            <div
              className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 border border-gray-700 group-hover:border-purple-500/50 transition-colors"
              style={{
                clipPath: "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
              }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm font-mono">{period}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-gray-300 leading-relaxed mb-6 font-light">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-800 text-purple-300 border border-gray-700 hover:border-purple-500/50 transition-colors font-mono text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
