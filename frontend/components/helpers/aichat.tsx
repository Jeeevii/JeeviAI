"use client"

import { useState } from "react"
import { X, Send, Zap, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface AIChatPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hey! I’m Jeevi AI. Still under construction 🚧 but I’ve got some preset answers ready for now - click a quick start or ask me with keywords",
      isUser: false,
      timestamp: new Date(),
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const sampleQuestions = [
    "What's your background story? 🌍",
    "What's your League rank? 🎮",
    "Tell me about your favorite projects 🔧",
    "What are your gym PRs? 🏋️",
    "Got any Valorant mains? 🕶️",
    "How'd you get into CS? 👨‍💻",
    "What's your AI/ML experience? 🤖",
    "Any dream companies? 💼"
  ]


  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response with typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (question: string): string => {
    const lower = question.toLowerCase()

    if (lower.includes("project")) {
      return `I’ve built a few fun things! My favs are:

    🔒 **Secure AI** – a GitHub vuln scanner that checks repos for bad practices and malware risk (was a natsec hackathon banger),
    👕 **FitCheck AI** – a Gen Z fashion roaster that rates your outfit and uses AI to generate a better look,
    📊 And way back, **WP.GG**, a fullstack OP.GG clone for LoL stats. That one was pure nostalgia 💻`
    }

    if (lower.includes("league") || lower.includes("lol")) {
      return `League was my childhood fr 😭. Started playing in middle school, hit **Diamond 2**, and ended up playing varsity + collegiate (CLOL/NCAA) for UCSC White team 🎮. I mained ADC but now I kinda hate it LOL.`
    }

    if (lower.includes("valorant")) {
      return `I'm not insane at Val, but I peaked **Plat 2**. I’m a **Chamber / Sova / Cypher** kinda guy. Nothing feels better than a crispy OP pick 💥.`
    }

    if (lower.includes("background") || lower.includes("where are you from")) {
      return `Born in 🇱🇰 Sri Lanka, lived in 🇹🇭 Thailand for a bit, then got sent to 🇺🇸 in the 2010s. I’m super grateful to be here and really just trying to make my fam proud and build cool stuff 🙏`
    }

    if (lower.includes("ai") || lower.includes("ml")) {
      return `Been dabbling with AI/ML a bunch! I’ve used OpenAI, Gemini, Replicate, and built stuff like:
      - Secure AI (static code + malware analyzer),
      - FitCheck AI (fashion roaster + generator),
      - **LLM-based crash scenario simulator** for research w/ Prof. Cardenas 🧠. 
      Honestly, love this space and can’t wait to keep building in it.`
    }

    if (lower.includes("how") && lower.includes("cs")) {
      return `Funny story — I started out in game dev, but I’ve always loved making stuff. Switched to CS officially after I realized how fun it is to build tools, games, apps, etc. Going for my **CS master’s at UCSC this fall** 🎓`
    }

    if (lower.includes("gym") || lower.includes("pr")) {
      return `Yessir I lift 🏋️‍♂️! I'm currently cutting for the year — started at 210lbs (5'11), down to 200, aiming for 180 by fall. Lifts are a bit lower while dropping weight, but here are the latest PRs:

      - Squat: 275lbs for 5
      - Bench: 235lbs for 3 (been doing more dumbbell work recently tho at ~95lbs each side)

    Slow grind but steady gains 💪. Trying to stay strong while leaning out.`
    }

    if (lower.includes("dream") || lower.includes("job") || lower.includes("company") || lower.includes("work")) {
      return `A lot of people wanna go FAANG — me? I wanna work at **Riot Games** 🛡️. League really shaped my teen years and I’d love to build for the games and people that gave me those memories. That’s the dream.`
    }

    if (lower.includes("who built you")) {
      return `Built by Jeevi (obv), using React, GPT APIs, and good vibes 😎. It’s still in alpha tho.`
    }

    if (lower.includes("riot") && lower.includes("hire")) {
      return `Riot if you’re reading this, hire this man 😤`
    }
    // fallback "under construction" response
    return `🚧 I'm still getting built right now! But I’m learning fast. Try asking about my projects, League rank, background, AI work, or gym PRs! 😎`
  }


  const handleSampleQuestion = (question: string) => {
    setInputValue(question)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Chat Panel */}
      <div className="w-full max-w-md bg-[#101010] border-l border-gray-800 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-purple-500 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Jeevi AI Logo */}
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-black/20">                  
                  <img
                    src="/icons/jeevi.jpg"
                    alt="Jeevi Logo"
                    className="w-full h-full object-cover"
                  />
              </div>
              {/* Title and Status */}
              <div>
                <h3 className="text-xl font-bold text-white">JEEVI AI</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white/80">Online</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20 p-2">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="p-4 border-b border-gray-800 bg-gray-900/50">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-orange-400" />
            <p className="text-sm text-gray-400 font-semibold">QUICK START:</p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {sampleQuestions.slice(0, 8).map((question, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer bg-gray-800 text-gray-300 border border-gray-700 hover:border-orange-500/50 hover:bg-gray-700 text-xs p-2 justify-start transition-all duration-300"
                onClick={() => handleSampleQuestion(question)}
              >
                {question}
              </Badge>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-transparent to-gray-900/20">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] p-4 ${
                  message.isUser
                    ? "bg-gradient-to-r from-orange-500 to-purple-500 text-white"
                    : "bg-gray-800 text-gray-100 border border-gray-700"
                }`}
                style={{
                  clipPath: message.isUser
                    ? "polygon(0% 0%, calc(100% - 10px) 0%, 100% 10px, 100% 100%, 10px 100%, 0% calc(100% - 10px))"
                    : "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                }}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div
                className="bg-gray-800 border border-gray-700 p-4 max-w-[85%]"
                style={{
                  clipPath:
                    "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200" />
                  </div>
                  <span className="text-gray-400 text-sm">Jeevi AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/50">
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 focus:border-orange-500"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 px-4"
              style={{
                clipPath: "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
              }}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
