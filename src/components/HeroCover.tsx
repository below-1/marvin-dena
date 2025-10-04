'use client';

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Particles } from "./ui/particles";
import { engagement, kurale } from "@/commons/fonts";
import { TextAnimate } from "./ui/text-animate";
import { TypingAnimation } from "./ui/typing-animation";
import { BlurFade } from "./ui/blur-fade";
import { StartAppButton } from "./StartAppButton";
import Image from "next/image";

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
  }, [isOpen])
  return (
    <div
      ref={coverRef}
      className={twMerge(
        "z-100 HeroCover dark fixed inset-0 transition-all bg-cover duration-[1s] ease-in-out bg-secondary",
        isOpen && "scale-0"
      )}
    >
      <div className="absolute inset-0">
        <Image
          alt="MD1"
          src="/images/md-12.jpg"
          fill={true}
          className={twMerge([
            "object-cover"
          ])}
        />    
      </div>
      <div
        className={twMerge(
          engagement.className,
          "Cover absolute inset-0 z-20 bg-black/40 flex items-center justify-center flex-col gap-4 pt-48 px-4 md:px-0"
        )}
      >
        <TextAnimate 
          animation="slideUp" 
          by="character" 
          once 
          className={twMerge(
            kurale.className,
            "text-foreground text-2xl md:text-4xl"
          )}
        >
          The Wedding Of
        </TextAnimate>
        <TextAnimate animation="blurInUp" delay={0.4} once className="text-foreground text-5xl md:text-8xl font-black mb-8 md:mb-12">
          Marvin & Dena
        </TextAnimate>
        <div className={twMerge(
          kurale.className,
          "h-96 flex items-center justify-start flex-col"
        )}>
          <TypingAnimation className="text-foreground text-2xl md:text-4xl text-center" delay={1200} duration={50} startOnView={true}>Special Invitation To Aristop Solle</TypingAnimation>
          <BlurFade delay={2} duration={1} className="flex items-center justify-center flex-col gap-4 pt-6 md:pt-8 mb-8">
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