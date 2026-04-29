"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import MainHeader from "./MainHeader"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 240)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen relative landing-page overflow-x-hidden max-[1439px]:px-[clamp(0.75rem,2.5vw,1.25rem)] sm:max-[1439px]:px-[clamp(1rem,3vw,1.5rem)]">
      <div className="relative z-10">
        <MainHeader />
        <main className="relative z-10">{children}</main>
      </div>
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-none bg-[#F4C430] text-black transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" strokeWidth={2.5} aria-hidden />
        </button>
      )}
    </div>
  )
}