'use client';

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Particles } from "./ui/particles";
import { engagement, kurale } from "@/commons/fonts";
import { TextAnimate } from "./ui/text-animate";
import { TypingAnimation } from "./ui/typing-animation";
import { BlurFade } from "./ui/blur-fade";
import { StartAppButton } from "./StartAppButton";

export function HeroCover({
  isOpen,
  setOpen
}: {
  isOpen: boolean,
  setOpen: (v: boolean) => void
}) {
  const coverRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setTimeout(() => {
      if (isOpen && coverRef.current) {
        coverRef.current.style.display = "none";
      }
    }, 200)
  }, [ open ])
  return (
    <div 
        ref={coverRef}
        className={twMerge(
          "z-100 HeroCover dark fixed inset-0 transition-all bg-cover duration-[1s] ease-in-out bg-secondary",
          isOpen && "scale-0"
        )}
      >
        <Particles
          vx={0.5}
          vy={1}
          size={4}
        />
        <div 
          className={twMerge(
            engagement.className,
            "Cover absolute inset-0 z-20 bg-black/40 flex items-center justify-center flex-col gap-4 pt-48 px-4 md:px-0"
          )}
        >
          <TextAnimate animation="blurInUp" by="character" once className="text-foreground text-5xl md:text-8xl font-black mb-8 md:mb-16">
            Marvin & Dena
          </TextAnimate>
          <div className={twMerge(
            kurale.className,
            "h-96 flex items-center justify-center flex-col"
          )}>
            <div className="text-foreground text-2xl md:text-4xl text-center">
              <TypingAnimation delay={1200} duration={50} startOnView={true}>Special Invitation To Aristop Solle</TypingAnimation>
            </div>
            <BlurFade delay={2} duration={1} className="flex items-center justify-center flex-col gap-4 pt-16 mb-8">
              <p className="text-foreground text-lg text-center">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.</p>
            </BlurFade>
            <StartAppButton 
              onClick={() => {
                setOpen(true)
              }}
            />
          </div>
        </div>    
      </div>
  )
}