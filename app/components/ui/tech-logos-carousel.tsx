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
  const logoCount = logos.length
  const logoWidth = 200 // Width of each logo container
  const totalWidth = logoCount * 2 * logoWidth // Double for seamless loop

  return (
    <div className={`relative z-10 max-w-6xl mx-auto ${className}`}>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -logoCount * logoWidth], // Move by the width of one set of logos
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // Slower than the original for better readability
              ease: "linear",
            },
          }}
          style={{
            width: `${totalWidth}px`,
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="tech-logo relative w-full h-full flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 border border-border/50 overflow-hidden flex flex-col items-center justify-center gap-2 bg-background/50 backdrop-blur-sm">
                {logo.icon && <logo.icon className="h-6 w-6 text-primary" />}
                <span className="text-xs md:text-sm font-medium text-center px-2 leading-tight text-foreground">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="tech-logo relative w-full h-full flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 border border-border/50 overflow-hidden flex flex-col items-center justify-center gap-2 bg-background/50 backdrop-blur-sm">
                {logo.icon && <logo.icon className="h-6 w-6 text-primary" />}
                <span className="text-xs md:text-sm font-medium text-center px-2 leading-tight text-foreground">
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