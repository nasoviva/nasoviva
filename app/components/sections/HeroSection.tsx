"use client"

import { Button } from "@/app/components/ui/button"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Download } from "lucide-react"
import AnimatedElement from "@/app/components/ui/animated-element"
import SkillsMarqueeStrip from "@/app/components/sections/SkillsMarqueeStrip"
import {
  LANDING_ABOUT_CARD_BODY_CLASS,
  LANDING_ABOUT_CARD_TITLE_CLASS,
  LANDING_BUTTON_LABEL_CLASS_NO_WEIGHT,
  LANDING_HERO_DESCRIPTION_CLASS,
  LANDING_HERO_NAME_SIZE_CLASS,
  LANDING_HERO_SUBTITLE_CLASS,
} from "@/app/lib/landing-typography"

const SERVICE_BOX_STYLES = [
  "bg-background text-foreground dark:bg-background dark:text-foreground",
  "bg-background text-foreground dark:bg-muted dark:text-foreground",
  "bg-background text-foreground dark:bg-card dark:text-card-foreground",
  "bg-background text-foreground dark:bg-background dark:text-foreground",
] as const

export default function HeroSection() {
  const { t, language } = useLanguage()

  const cvByLanguage = {
    en: { path: "/CV_Nasonova.pdf", fileName: "CV_Nasonova.pdf" },
    es: { path: "/CV_Nasonova_esp.pdf", fileName: "CV_Nasonova_esp.pdf" },
    ru: { path: "/Резюме_Насонова.pdf", fileName: "Резюме_Насонова.pdf" },
  } as const
  const selectedCv = cvByLanguage[language]

  const serviceItems = [1, 2, 3, 4] as const

  return (
    <section
      id="hero"
      className="hero-section relative flex w-full flex-col justify-center overflow-hidden"
    >
      <div className="hero-split grid w-full grid-cols-1 md:grid-cols-2">
        <div className="hero-text-col flex flex-col justify-center bg-accent px-0 pb-12 pt-28 md:pb-[60px] md:pt-[calc(5rem+60px)]">
          <div className="flex min-w-0 flex-1 flex-col items-center px-8 text-center sm:px-10 md:items-start md:px-[60px] md:text-left">
            <div
              aria-hidden
              className="mb-[30px] h-11 shrink-0 sm:h-12 md:h-[3.5rem]"
            />
            <AnimatedElement direction="up" distance={40} delay={0.2}>
              <h1
                className={`font-thin-heading font-semibold mb-5 w-full max-w-full break-words uppercase leading-[0.92] tracking-[-0.02em] ${LANDING_HERO_NAME_SIZE_CLASS}`}
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
                className={`hero-brutal-btn h-auto min-h-0 rounded-none bg-[#F4C430] px-[30px] py-[15px] text-black transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${LANDING_BUTTON_LABEL_CLASS_NO_WEIGHT} font-semibold`}
              >
                <a
                  href={selectedCv.path}
                  download={selectedCv.fileName}
                  className="inline-flex items-center justify-center gap-3 whitespace-nowrap"
                >
                  <Download className="h-5 w-5 flex-shrink-0" aria-hidden />
                  <span>{t("hero.download")}</span>
                </a>
              </Button>
            </AnimatedElement>
          </div>
        </div>

        <div className="hero-image-col hidden md:flex flex-col items-stretch justify-center bg-background px-0 pb-14 pt-32 dark:bg-secondary md:min-h-0 md:pb-16 md:pt-40">
          <AnimatedElement
            className="flex w-full flex-1 items-center justify-center"
            direction="up"
            distance={36}
            delay={0.45}
          >
            <div className="hero-photo-frame group relative w-full max-w-[min(92vw,520px)] overflow-hidden rounded-none bg-background aspect-[2/3] dark:bg-secondary max-h-[min(82vh,760px)] sm:max-w-[580px] md:max-h-[min(86vh,800px)] md:max-w-[min(44vw,680px)] lg:max-w-[min(46vw,720px)] xl:max-w-[760px]">
              <img
                src="/image.png"
                alt="Victoria Nasonova"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 block h-full w-full object-cover object-top grayscale transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
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
