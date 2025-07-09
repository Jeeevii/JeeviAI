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
      text: "Hey there! 👋 I'm AI Jeevi - your digital twin ready to chat about my work, tech stack, gaming skills, or anything else you're curious about!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const sampleQuestions = [
    "What kind of projects have you built?",
    "What's your favorite coding language?",
    "Are you good at Valorant?",
    "Tell me about your AI experience",
    "What's your development setup?",
    "How do you approach system design?",
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
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("project")) {
      return "I've built some pretty cool stuff! My AI-powered task manager is probably my favorite - it uses NLP to understand what you want to do and automatically prioritizes tasks. The real-time chat platform was a fun challenge too, handling thousands of concurrent users with WebSocket magic. What kind of projects are you working on?"
    }

    if (lowerQuestion.includes("language") || lowerQuestion.includes("coding")) {
      return "Python is my absolute favorite! 🐍 The syntax is so clean and the ecosystem is incredible for backend work and AI experiments. FastAPI is my go-to framework - blazingly fast with automatic docs that make me happy. TypeScript for frontend work keeps me sane with those type checks!"
    }

    if (lowerQuestion.includes("valorant") || lowerQuestion.includes("gaming")) {
      return "Haha, I'm currently Diamond rank! 💎 I main Sage because someone has to keep the team alive (and I'm tired of watching people run into site without heals). My aim is... let's call it 'strategically inconsistent' 😅. Best games happen at 2 AM when my brain is in the zone!"
    }

    if (lowerQuestion.includes("ai") || lowerQuestion.includes("artificial intelligence")) {
      return "AI is absolutely fascinating! I've built several chatbots (including this one obviously), integrated GPT APIs for various projects, and even created a recommendation engine for an e-commerce client. I'm particularly excited about how AI can make developer tools smarter - the future is wild!"
    }

    if (lowerQuestion.includes("setup") || lowerQuestion.includes("development")) {
      return "My setup is pretty sweet! MacBook Pro with multiple monitors, mechanical keyboard (Cherry MX Blues for that satisfying click), and a standing desk. VS Code with a dark theme obviously, Docker for containerization, and Postman for API testing. Oh, and a really good coffee machine - that's essential infrastructure!"
    }

    if (lowerQuestion.includes("system design") || lowerQuestion.includes("architecture")) {
      return "I love system design! I always start with understanding the requirements and scale, then think about data flow and bottlenecks. Microservices for scalability, proper caching strategies, and always plan for failure. Database design is crucial - I spend a lot of time getting the schema right upfront. What systems are you designing?"
    }

    return "That's a great question! I'm always learning and evolving. Feel free to ask me about my projects, tech preferences, gaming habits, or anything else you're curious about. I love talking shop! 🤖"
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
              <div
                className="w-12 h-12 bg-black/20 flex items-center justify-center"
                style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
              >
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI JEEVI</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white/80">Online & Ready</span>
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
            {sampleQuestions.slice(0, 4).map((question, index) => (
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
                  <span className="text-gray-400 text-sm">AI Jeevi is thinking...</span>
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
