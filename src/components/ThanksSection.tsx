import { kurale } from "@/commons/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TypingAnimation } from "./ui/typing-animation";
import { BlurFade } from "./ui/blur-fade";

export function ThanksSection() {
  return (
    <div 
      id="ThanksSection"
      className="h-[500px] md:h-160 max-w-screen relative"
    >
      <div className="absolute inset-0 z-12 from-[#efe4d0] bg-gradient-to-b to-80%">
      </div>
      <div 
        className="absolute inset-0 z-10 overflow-hidden bg-cover bg-position-[center_top_2rem] md:bg-position-[center_20%]"
        style={{
          backgroundImage: "url(/images/md-11.jpg)"
        }}
      >
      </div>
      <div 
        className={twMerge(
          kurale.className,
          "absolute top-0 left-0 right-0 z-20 flex items-center justify-center flex-col text-white pt-8 px-4 md:px-0"
        )}
      >
        <TypingAnimation className="text-primary text-3xl md:text-7xl" delay={1200} duration={50} startOnView={true}>Terimakasih</TypingAnimation>
        <BlurFade delay={0.4} duration={1} inView>
          <p className="text-primary text-xs md:text-base text-center">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i. berkenan hadir untuk memberi doa restu kepada kami.</p>
          <p className="text-primary text-xs md:text-base text-center">Atas kehadiran dan doa restunya kami ucapkan terima kasih</p>
        </BlurFade>
      </div>
    </div>
  )
}