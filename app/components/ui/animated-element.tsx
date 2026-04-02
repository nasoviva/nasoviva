"use client"

import { type ReactNode } from "react"

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
  stagger?: boolean
  staggerChildren?: number
  playImmediately?: boolean
}

export default function AnimatedElement({
  children,
  className = "",
}: AnimatedElementProps) {
  return <div className={className}>{children}</div>
}
