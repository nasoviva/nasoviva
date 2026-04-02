"use client"

import type { ReactNode } from "react"
import MainHeader from "./MainHeader"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative landing-page overflow-x-hidden max-[1439px]:px-[clamp(0.75rem,2.5vw,1.25rem)] sm:max-[1439px]:px-[clamp(1rem,3vw,1.5rem)]">
      <div className="relative z-10">
        <MainHeader />
        <main className="relative z-10">{children}</main>
      </div>
    </div>
  )
}