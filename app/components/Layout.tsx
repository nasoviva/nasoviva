"use client"

import type { ReactNode } from "react"
import Header from "./Header"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative">
      {/* Background container */}
      <div className="background-container"></div>
      
      {/* Background overlay for better text readability */}
      <div className="background-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full">
        <Header />
        <div className="relative z-20 h-full">{children}</div>
      </div>
    </div>
  )
}