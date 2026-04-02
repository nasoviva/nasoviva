"use client"

import { Button } from "@/app/components/ui/button"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Download } from "lucide-react"
import AnimatedElement from "@/app/components/ui/animated-element"
import SkillsMarqueeStrip from "@/app/components/sections/SkillsMarqueeStrip"
import {
  LANDING_ABOUT_CARD_BODY_CLASS,
  LANDING_ABOUT_CARD_TITLE_CLASS,
  LANDING_BUTTON_LABEL_CLASS,
  LANDING_HERO_DESCRIPTION_CLASS,
  LANDING_HERO_NAME_SIZE_CLASS,
  LANDING_HERO_SUBTITLE_CLASS,
} from "@/app/lib/landing-typography"

const SERVICE_BOX_STYLES = [
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-primary text-primary-foreground dark:text-white",
  "bg-[#b4ff39] text-[#0a0a0a]",
] as const

export default function HeroSection() {
  const { t, language } = useLanguage()

  const cvFile = language === "ru" ? "/Резюме_Насонова.pdf" : "/CV_Nasonova.pdf"
  const cvFileName = language === "ru" ? "Резюме_Насонова.pdf" : "CV_Nasonova.pdf"

  const serviceItems = [1, 2, 3, 4] as const

  return (
    <section
      id="hero"
      className="hero-section relative flex w-full flex-col justify-center overflow-hidden"
    >
      <div className="hero-split grid w-full grid-cols-1 md:grid-cols-2">
        <div className="hero-text-col flex flex-col justify-center border-b-4 border-foreground bg-accent px-8 pb-12 pt-28 sm:px-10 md:border-b-0 md:border-r-4 md:px-[60px] md:pb-[60px] md:pt-[calc(5rem+60px)]">
          <div className="flex min-w-0 flex-1 flex-col items-start text-left">
            <div
              aria-hidden
              className="mb-[30px] h-11 shrink-0 sm:h-12 md:h-[3.5rem]"
            />
            <AnimatedElement direction="up" distance={40} delay={0.2}>
              <h1
                className={`font-thin-heading mb-5 w-full max-w-full break-words uppercase leading-[0.92] tracking-[-0.02em] ${LANDING_HERO_NAME_SIZE_CLASS}`}
              >
                {t("hero.title")}
              </h1>
            </AnimatedElement>

            <AnimatedElement direction="up" distance={30} delay={0.45}>
              <p className={LANDING_HERO_SUBTITLE_CLASS}>{t("hero.subtitle")}</p>
            </AnimatedElement>

            <AnimatedElement direction="up" distance={24} delay={0.6}>
              <p className={LANDING_HERO_DESCRIPTION_CLASS}>{t("hero.description")}</p>
            </AnimatedElement>

            <AnimatedElement className="mt-5" direction="up" distance={24} delay={0.75}>
              <Button
                asChild
                variant="contact"
                className={`hero-brutal-btn h-auto min-h-0 rounded-none bg-black px-[30px] py-[15px] text-white hover:bg-black hover:text-white ${LANDING_BUTTON_LABEL_CLASS}`}
              >
                <a
                  href={cvFile}
                  download={cvFileName}
                  className="inline-flex items-center gap-3 whitespace-nowrap"
                >
                  <Download className="h-5 w-5 flex-shrink-0" aria-hidden />
                  <span>{t("hero.download")}</span>
                </a>
              </Button>
            </AnimatedElement>
          </div>
        </div>

        <div className="hero-image-col hidden md:flex flex-col items-stretch justify-center bg-secondary px-6 pb-14 pt-32 sm:px-8 md:min-h-0 md:pb-16 md:pr-8 md:pt-40 lg:pr-12 xl:pr-16">
          <AnimatedElement
            className="flex w-full flex-1 items-center justify-center"
            direction="up"
            distance={36}
            delay={0.45}
          >
            <div className="hero-photo-frame group relative w-full max-w-[min(92vw,520px)] overflow-hidden rounded-none border-4 border-foreground bg-secondary shadow-[8px_8px_0_0_hsl(var(--brutal))] aspect-[2/3] max-h-[min(82vh,760px)] sm:max-w-[580px] md:max-h-[min(86vh,800px)] md:max-w-[min(44vw,680px)] lg:max-w-[min(46vw,720px)] xl:max-w-[760px]">
              <img
                src="/image.png"
                alt="Victoria Nasonova"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 block h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>

      <SkillsMarqueeStrip />

      <div id="about" className="about-services-in-hero w-full">
        <AnimatedElement
          playImmediately
          direction="up"
          distance={24}
          delay={0.2}
          duration={0.6}
          className="about-services-grid w-full"
        >
          {serviceItems.map((n) => (
            <div
              key={n}
              className={`about-service-box ${SERVICE_BOX_STYLES[n - 1]}`}
            >
              <h3 className={LANDING_ABOUT_CARD_TITLE_CLASS}>{t(`about.card${n}.title`)}</h3>
              <p className={LANDING_ABOUT_CARD_BODY_CLASS}>{t(`about.item${n}`)}</p>
            </div>
          ))}
        </AnimatedElement>
      </div>
    </section>
  )
}
