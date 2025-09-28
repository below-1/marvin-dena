import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { LightRays } from "@/components/ui/light-rays"
import { Kurale, Meow_Script, Grand_Hotel as Engagement } from 'next/font/google'
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { MempelaiSection } from "@/components/MempelaiSection";
import { InvitationSection } from "@/components/InvitationSection";
import { CountdownSection } from "@/components/CountdownSection";
import { GallerySection } from "@/components/GallerySection";
import { ThanksSection } from "@/components/ThanksSection";

const kurale = Kurale({
  weight: ["400"]
})

const engagement = Engagement({
  weight: ["400"]
})

export default function Home() {
  return (
    <div className="Wrapper">

      {/* Landing Cover */}
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
          <TextAnimate animation="blurInUp" by="character" once className="text-foreground text-5xl md:text-8xl font-black mb-16">
            Marvin & Dena
          </TextAnimate>
          <div className="h-96 flex items-center justify-center flex-col">
            <div className="text-foreground text-4xl text-center">
              <TypingAnimation delay={1200} duration={50} startOnView={true}>Special Invitation To Aristop Solle</TypingAnimation>
            </div>
            <BlurFade delay={2} duration={1} className="flex items-center justify-center flex-col gap-4 pt-16">
              <p className="text-foreground text-lg text-center">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.</p>
              <Button variant="outline" size="lg" className="uppercase font-mono text-white scale-120">
                Open Invitation
              </Button>
            </BlurFade>
          </div>
        </div>    
      </div>

      {/* Hero Content */}
      {/* <div 
        className={twMerge(
          engagement.className,
          "HeroContent relative h-screen max-w-screen"
        )}>
        <Image
					alt="MD1"
					src="/images/md-6.jpg"
          fill={true}
					className={twMerge([
						"HeroBg",
						"object-cover z-10",
            "opacity-100"
					])}
				/>
        <div
          className={twMerge(
            "Cover absolute inset-0 z-20 bg-background/40"
          )}
        >
        </div>
        <div
          className={twMerge(
            "HeroContent absolute inset-0 top-1/2 z-25 flex flex-col gap-4 items-center justify-center text-foreground"
          )}
        >
          <p className="text-4xl">The Wedding of</p>
          <p className="text-8xl mb-8">Marvin & Dena</p>

          <p className="text-3xl">Rabu</p>
          <p className="text-3xl">15 / Oktober / 2025</p>
          <p className="text-xl uppercase font-mono">We Invite you to celebrate</p>
        </div>
      </div> */}

      {/* Mempelai */}
      <MempelaiSection />

      {/* Invitation */}
      <InvitationSection />

      {/* Countdown Section */}
      <CountdownSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Thanks Section */}
      <ThanksSection />
    </div>
  );
}
