"use client"

import type { ReactNode } from "react"
import MainHeader from "./MainHeader"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative landing-page">
      {/* Content */}
      <div className="relative z-10">
        <MainHeader />
        <main className="relative z-10 pt-20">{children}</main>
      </div>
    </div>
  )
}