"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "@/app/hooks/useInView"
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
}

const getVariants = (
  direction: string,
  distance: number,
  duration: number
): Variants => {
  const baseVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration }
    }
  }

  switch (direction) {
    case "up":
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, y: distance },
        visible: { 
          ...baseVariants.visible, 
          y: 0,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] }
        }
      }
    case "down":
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, y: -distance },
        visible: { 
          ...baseVariants.visible, 
          y: 0,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] }
        }
      }
    case "left":
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, x: distance },
        visible: { 
          ...baseVariants.visible, 
          x: 0,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] }
        }
      }
    case "right":
      return {
        ...baseVariants,
        hidden: { ...baseVariants.hidden, x: -distance },
        visible: { 
          ...baseVariants.visible, 
          x: 0,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] }
        }
      }
    case "fade":
    default:
      return {
        ...baseVariants,
        visible: { 
          ...baseVariants.visible,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] }
        }
      }
  }
}

export default function AnimatedElement({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 50,
  stagger = false,
  staggerChildren = 0.1
}: AnimatedElementProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })
  
  const variants = getVariants(direction, distance, duration)
  
  if (stagger) {
    variants.visible = {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        staggerChildren,
        delayChildren: delay
      }
    }
  } else {
    variants.visible = {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        delay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
