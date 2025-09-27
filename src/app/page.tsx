import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { LightRays } from "@/components/ui/light-rays"
import { Meow_Script, Grand_Hotel as Engagement } from 'next/font/google'
import { RainbowButton } from "@/components/ui/rainbow-button";

const pacifio = Meow_Script({
  weight: ["400"]
})

const engagement = Engagement({
  weight: ["400"]
})

export default function Home() {
  return (
    <div className="Wrapper dark">
      <div className="HeroCover relative h-screen w-screen">
        <Image
					alt="MD1"
					src="/images/md-3.jpg"
          fill={true}
					className={twMerge([
						"HeroBg",
						"object-cover z-10"
					])}
				/>    
        <LightRays color="#FAEAB1" className="z-100" />
        <div 
          className={twMerge(
            pacifio.className,
            "Cover absolute inset-0 z-20 bg-background/60 flex items-center justify-center flex-col gap-4 pt-16"
          )}
        >
          <p 
            className={twMerge(
              pacifio.className,
              "text-foreground text-8xl font-black mb-16"
            )}
          >Marvin & Dena</p>
          <p className="text-foreground text-3xl">Special Invitation To</p>
          <p className="text-foreground text-lg">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.</p>

          <RainbowButton size="lg" className="uppercase font-mono">Open Invitation</RainbowButton>
        </div>    
      </div>

      {/* Hero Content */}
      <div 
        className={twMerge(
          engagement.className,
          "HeroContent relative h-screen w-screen"
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
          <p className="text-3xl">06 / Agustus / 2025</p>
          <p className="text-xl uppercase font-mono">We Invite you to celebrate</p>
        </div>
      </div>

      {/* Mempelai */}
      <div 
        className={twMerge(
          pacifio.className,
          "bg-background h-screen w-screen flex py-32"
        )}>
        <div className="max-w-7xl mx-auto flex gap-24">

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="relative h-96 w-64 overflow-clip border-4 rounded-3xl">
              <Image
                alt="MD1"
                src="/images/md-7.jpg"
                fill={true}
                className={twMerge([
                  "HeroBg",
                  "object-cover z-10",
                  "opacity-100"
                ])}
              />
            </div>

            <p className="text-foreground text-5xl">Marvin Solle</p>
            <p className="text-foreground text-base font-mono mb-6">Putra ke Empat Dari Pasangan</p>
            <p className="text-foreground text-base font-sans leading-4">Bapak Anderias Solle</p>
            <p className="text-foreground text-base font-sans leading-4">Ibu Eri Inna Subu Taopan</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="relative h-96 w-64 overflow-clip border-4 rounded-3xl">
              <Image
                alt="MD1"
                src="/images/md-3.jpg"
                fill={true}
                className={twMerge([
                  "HeroBg",
                  "object-cover z-10",
                  "opacity-100"
                ])}
              />
            </div>

            <p className="text-foreground text-5xl">Marvin Solle</p>
            <p className="text-foreground text-base font-mono mb-6">Putra ke Empat Dari Pasangan</p>
            <p className="text-foreground text-base font-sans leading-4">Bapak Anderias Solle</p>
            <p className="text-foreground text-base font-sans leading-4">Ibu Eri Inna Subu Taopan</p>
          </div>

        </div>
      </div>
    </div>
  );
}
