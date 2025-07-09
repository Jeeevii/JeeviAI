"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! 👋 I'm AI Jeevi - ask me anything about my work, interests, or random stuff!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const sampleQuestions = [
    "What kind of projects have you built?",
    "What's your favorite coding language?",
    "Are you good at Valorant?",
    "Tell me about your experience with AI",
    "What's your coffee preference?",
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("project")) {
      return "I've built some cool stuff! My favorite is probably the AI-powered task manager - it uses natural language processing to understand what you want to do and automatically prioritizes your tasks. I'm also proud of the real-time chat platform that handles thousands of concurrent users. What kind of projects interest you?"
    }

    if (lowerQuestion.includes("language") || lowerQuestion.includes("coding")) {
      return "Python is my go-to! 🐍 I love how clean and readable it is, plus the ecosystem is incredible for backend work and AI experiments. FastAPI is my framework of choice - it's blazingly fast and the automatic docs are *chef's kiss*. Though I also enjoy TypeScript for frontend work!"
    }

    if (lowerQuestion.includes("valorant")) {
      return "Haha, I'm decent! Currently Diamond rank, though I swear I play better at 2 AM 😅. I main Sage because someone has to keep the team alive. My aim is... let's call it 'strategically inconsistent'. Do you play?"
    }

    if (lowerQuestion.includes("ai") || lowerQuestion.includes("artificial intelligence")) {
      return "AI is fascinating! I've built several chatbots (including this one), experimented with GPT integrations, and even created a recommendation system for an e-commerce client. I'm particularly interested in how AI can make developer tools smarter. The future is exciting!"
    }

    if (lowerQuestion.includes("coffee")) {
      return "☕ Essential fuel! I'm a simple person - good old black coffee, preferably Ethiopian beans. I go through about 4 cups a day, which my friends say is 'concerning' but I call 'optimal performance'. What about you - coffee, tea, or energy drinks?"
    }

    if (lowerQuestion.includes("experience") || lowerQuestion.includes("work")) {
      return "I've been coding for 5+ years now! Started as an intern at InnovateLabs, then moved to a startup where I learned to build scalable systems under pressure. Now I'm at TechCorp leading backend architecture for systems that handle millions of requests. Each role taught me something different!"
    }

    return "That's an interesting question! I'm still learning and growing every day. Feel free to ask me about my projects, tech stack, gaming habits, or anything else you're curious about! 🤖"
  }

  const handleSampleQuestion = (question: string) => {
    setInputValue(question)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 ${isOpen ? "hidden" : "flex"}`}
      >
        <Phone className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] z-50">
          <Card className="h-full bg-gray-900/95 border-gray-700 backdrop-blur-lg shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Jeevi</CardTitle>
                    <p className="text-sm text-purple-100">Online now</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-0">
              {/* Sample Questions */}
              <div className="p-4 border-b border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.slice(0, 3).map((question, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer bg-purple-900/30 text-purple-300 border-purple-700/50 hover:bg-purple-800/40 text-xs"
                      onClick={() => handleSampleQuestion(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isUser ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-100"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                    className="bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
