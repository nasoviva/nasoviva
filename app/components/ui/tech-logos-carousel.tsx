"use client"

import { motion } from "framer-motion"
import { 
  FileText, 
  Code, 
  Globe, 
  Atom, 
  Palette, 
  Wind, 
  Layers, 
  Zap, 
  GitBranch, 
  Figma, 
  Shield, 
  Sparkles, 
  TestTube,
  TestTube2
} from "lucide-react"

interface TechLogo {
  id: string
  name: string
  logo: string
  icon?: React.ComponentType<{ className?: string }>
}

interface TechLogosCarouselProps {
  logos: TechLogo[]
  className?: string
}

export default function TechLogosCarousel({ logos, className = "" }: TechLogosCarouselProps) {
  return (
    <div className={`relative z-10 w-full max-w-6xl mx-auto px-4 ${className}`}>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center"
          animate={{
            x: [0, "-50%"], // Move by 50% to show the duplicate set
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // Slower than the original for better readability
              ease: "linear",
            },
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-32 sm:w-40 md:w-44 lg:w-48 h-16 sm:h-20 md:h-22 lg:h-24 flex items-center justify-center"
            >
              <div className="tech-logo relative w-full h-full flex-shrink-0 rounded-lg overflow-hidden flex flex-col items-center justify-center gap-1 sm:gap-2 bg-secondary text-secondary-foreground" style={{ pointerEvents: 'none' }}>
                {logo.icon && <logo.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />}
                <span className="text-xs sm:text-sm font-medium text-center px-1 sm:px-2 leading-tight">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-32 sm:w-40 md:w-44 lg:w-48 h-16 sm:h-20 md:h-22 lg:h-24 flex items-center justify-center"
            >
              <div className="tech-logo relative w-full h-full flex-shrink-0 rounded-lg overflow-hidden flex flex-col items-center justify-center gap-1 sm:gap-2 bg-secondary text-secondary-foreground" style={{ pointerEvents: 'none' }}>
                {logo.icon && <logo.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />}
                <span className="text-xs sm:text-sm font-medium text-center px-1 sm:px-2 leading-tight">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}