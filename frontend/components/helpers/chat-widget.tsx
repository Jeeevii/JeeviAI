"use client"

import { lazy, Suspense, useRef, useState } from "react"
import { Bot, MessageCircle, } from "lucide-react"

const AIChatPanel = lazy(() => import("./aichat"))

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)

  function closeChat() {
    setIsOpen(false)
    trigger.current?.focus()
  }

  return (
    <>
      <button ref={trigger} type="button" aria-haspopup="dialog" onClick={() => { setHasOpened(true); setIsOpen(true) }} className="hero-action hero-action-chat">
        <Bot size={20} aria-hidden="true" />TALK TO ME
      </button>
      {hasOpened && <Suspense fallback={isOpen ? <p role="status" className="fixed bottom-20 right-5 z-40 rounded-lg bg-gray-900 p-3 text-sm">Opening portfolio guide…</p> : null}>
        <AIChatPanel isOpen={isOpen} onClose={closeChat} />
      </Suspense>}
    </>
  )
}
