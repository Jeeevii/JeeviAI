"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Send, X } from "lucide-react"
import { getChatReply, quickQuestions, type ChatReply } from "@/lib/chat"

interface Message extends ChatReply { id: number; isUser: boolean }

export default function AIChatPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const log = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([{ id: 0, isUser: false, text: "Hey, I’m Jeevi’s portfolio guide. Choose a question or ask about my work, education, projects, and games. These are preset answers, not a live AI chat." }])

  useEffect(() => {
    const panel = dialog.current
    if (!panel) return
    if (!isOpen) { panel.close(); return }
    panel.showModal()
    input.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = previousOverflow; panel.close() }
  }, [isOpen])

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight
  }, [messages, isOpen])

  function send(question: string) {
    const text = question.trim()
    if (!text) return
    const questionId = nextId.current++
    const answerId = nextId.current++
    setMessages(current => [...current, { id: questionId, isUser: true, text }, { id: answerId, isUser: false, ...getChatReply(text) }])
    setInputValue("")
    input.current?.focus()
  }

  return (
    <dialog ref={dialog} aria-labelledby="chat-title" aria-describedby="chat-description" onCancel={event => { event.preventDefault(); onClose() }} className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-md border-l border-gray-700 bg-[#101010] p-0 text-left text-white shadow-2xl backdrop:bg-black/65">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex shrink-0 items-center gap-3 border-b border-gray-800 px-4 py-4">
          <Image src="/icons/tony.png" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <div className="min-w-0 flex-1">
            <h2 id="chat-title" className="font-bold text-orange-300">JEEVI AI</h2>
            <p id="chat-description" className="text-xs text-gray-300">Portfolio guide · Preset answers</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close portfolio guide" className="flex h-11 w-11 items-center justify-center rounded-md hover:bg-gray-800"><X size={20} aria-hidden="true" /></button>
        </div>
        <div className="max-h-[30dvh] shrink-0 overflow-y-auto overscroll-contain border-b border-gray-800 p-4">
          <p className="mb-2 text-xs font-semibold text-gray-400">ASK ABOUT</p>
          <div className="grid grid-cols-2 gap-2">
            {quickQuestions.map(question => <button key={question} type="button" onClick={() => send(question)} className="min-h-11 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-left text-xs leading-relaxed text-gray-200 transition-colors hover:border-orange-400 hover:bg-gray-800">{question}</button>)}
          </div>
        </div>
        <div ref={log} role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain p-4">
          {messages.map(message => (
            <div key={message.id} className={`max-w-[95%] rounded-lg border p-4 ${message.isUser ? "ml-auto border-purple-500/40 bg-purple-950/40" : "border-gray-700 bg-gray-900"}`}>
              <p className="mb-1 text-xs font-semibold text-gray-400">{message.isUser ? "You" : "Jeevi’s guide"}</p>
              <p className="whitespace-pre-line break-words text-sm leading-relaxed text-gray-200">{message.text}</p>
              {message.links && <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {message.links.map(link => {
                  const external = link.href.startsWith("https:") || link.href.startsWith("/docs/")
                  return <a key={link.href} href={link.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} onClick={link.href.startsWith("#") ? onClose : undefined} className="inline-flex min-h-11 items-center text-sm text-orange-300 underline underline-offset-4 hover:text-orange-200">{link.label}{external && <span className="sr-only"> (opens in a new tab)</span>}</a>
                })}
              </div>}
            </div>
          ))}
        </div>
        <form onSubmit={event => { event.preventDefault(); send(inputValue) }} className="flex shrink-0 gap-2 border-t border-gray-800 bg-gray-950 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <label htmlFor="chat-question" className="sr-only">Ask about Jeevi’s portfolio</label>
          <input ref={input} id="chat-question" value={inputValue} onChange={event => setInputValue(event.target.value)} maxLength={500} placeholder="Ask about work or projects…" className="min-h-11 min-w-0 flex-1 rounded-md border border-gray-600 bg-gray-900 px-3 text-base text-white placeholder:text-gray-400" />
          <button type="submit" disabled={!inputValue.trim()} aria-label="Send question" className="action-primary px-3 disabled:cursor-not-allowed disabled:opacity-50"><Send size={18} aria-hidden="true" /></button>
        </form>
      </div>
    </dialog>
  )
}
