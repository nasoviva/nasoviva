"use client"

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
  // Use all logos for seamless infinite scroll
  const allLogos = [...logos]
  
  // Duplicate logos multiple times for seamless infinite scroll
  const duplicatedLogos = [...allLogos, ...allLogos, ...allLogos, ...allLogos]

  return (
    <div className={`relative z-10 max-w-6xl ${className}`}>
      <div className="w-full">
        <div className="w-full pr-16 md:pr-24">
          {/* First row - moving left */}
          <div className="overflow-hidden py-2 relative">
            <div className="flex animate-scroll-infinite gap-6 md:gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex items-center gap-2 md:gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group flex-shrink-0"
                >
                  <div className="tech-logo relative w-28 h-20 md:w-40 md:h-24 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 border border-border/50 overflow-hidden flex flex-col items-center justify-center gap-2">
                    {logo.icon && <logo.icon className="h-5 w-5" />}
                    <span className="text-xs md:text-sm font-medium text-center px-2 leading-tight">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row - moving right */}
          <div className="overflow-hidden py-2 relative">
            <div className="flex animate-scroll-infinite-reverse gap-6 md:gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-reverse-${index}`}
                  className="flex items-center gap-2 md:gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group flex-shrink-0"
                >
                  <div className="tech-logo relative w-28 h-20 md:w-40 md:h-24 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300 border border-border/50 overflow-hidden flex flex-col items-center justify-center gap-2">
                    {logo.icon && <logo.icon className="h-5 w-5" />}
                    <span className="text-xs md:text-sm font-medium text-center px-2 leading-tight">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}