"use client"

import { Github, ExternalLink, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl: string | null
  image: string
}

export function ProjectCard({ title, description, techStack, githubUrl, liveUrl, image }: ProjectCardProps) {
  return (
    <Card className="bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="absolute top-4 right-4">
          <div
            className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center"
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
          >
            <Zap className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-orange-400 font-bold tracking-wide">{title}</CardTitle>
        <CardDescription className="text-gray-300 leading-relaxed font-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-800 text-purple-300 border border-gray-700 hover:border-purple-500/50 transition-colors font-mono text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            size="sm"
            className="bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-orange-500/50 flex-1 font-semibold"
            style={{
              clipPath: "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
            }}
          >
            <Github className="h-4 w-4 mr-2" />
            CODE
          </Button>
          {liveUrl && (
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 flex-1 font-semibold"
              style={{
                clipPath: "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
              }}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              LIVE
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
