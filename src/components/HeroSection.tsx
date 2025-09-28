import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { LightRays } from "./ui/light-rays";
import { kurale } from "@/commons/fonts";
import { TextAnimate } from "./ui/text-animate";
import { TypingAnimation } from "./ui/typing-animation";
import { BlurFade } from "./ui/blur-fade";
import { Button } from "./ui/button";
import { PixelImage } from "./ui/pixel-image";

export function HeroSection() {
  return (
    <div className="HeroCover relative h-screen max-w-screen dark">
      <Image
        alt="MD1"
        src="/images/md-10.jpg"
        fill={true}
        className={twMerge([
          "HeroBg",
          "object-cover z-10"
        ])}
      />    
      <LightRays color="var(--secondary)" className="z-100" />
      <div 
        className={twMerge(
          kurale.className,
          "Cover absolute inset-0 z-20 bg-background/60 flex items-center justify-center flex-col gap-4 pt-48 px-4 md:px-0"
        )}
      >
        <TextAnimate delay={0.6} animation="blurInUp" by="character" once className="text-foreground text-5xl md:text-8xl font-black mb-16">
          Marvin & Dena
        </TextAnimate>
        <div className="h-96 flex items-center justify-center flex-col">
          <div className="text-foreground text-4xl text-center">
            <TypingAnimation delay={1200} duration={50} startOnView={true}>Special Invitation To Aristop Solle</TypingAnimation>
          </div>
          <BlurFade delay={2} duration={1} className="flex items-center justify-center flex-col gap-4 pt-16 mb-8">
            <p className="text-foreground text-lg text-center">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.</p>
            <Button 
              variant="outline" 
              size="lg" 
              className="uppercase font-mono text-white scale-120"
            >
              Save The Date
            </Button>
          </BlurFade>
          
        </div>
      </div>    
    </div>
  )
}