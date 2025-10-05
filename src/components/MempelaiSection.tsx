'use client';

import { twMerge } from "tailwind-merge";
import { Kurale, Meow_Script, Grand_Hotel as Engagement } from 'next/font/google'
import { MempelaiCard } from "./MempelaiCard";
import { useRef } from "react";
import { AnimatedBeam } from "./ui/animated-beam";
import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";
import { engagement } from "@/commons/fonts";

const kurale = Kurale({
  weight: ["400"]
})

export function MempelaiSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  return (
    <div 
      className={twMerge(
        kurale.className,
        "relative min-h-screen max-w-screen flex flex-col py-16 pb-0 md:py-32 md:pb-0 bg-secondary/20"
      )}
      ref={containerRef}
    >
      <div className="">

        <div className="flex flex-col text-center font-sans text-foreground/60 mb-16">
          <h2 className="font-mono text-neutral-400 text-lg tracking-wide">
            Wedding Invitation
          </h2>
          <h3 className={twMerge(engagement.className, "text-4xl")}>Welcome to the <br/> Wedding of</h3>
          <div className="self-center px-0.5 bg-foreground/10 h-16">
          </div>
          <p 
            className={twMerge(kurale.className, "text-3xl")}
          >Marvin & Dena</p>
        </div>

        <div className="grid">

          <div className="py-16 px-8">
            <BlurFade inView delay={0.2}>
              <MempelaiCard
                ref={div1Ref}
                imageUrl="/images/md-9.jpg"
                name="Marvin Sole"
                line1="Putra Ke Ketiga Anak Ke Empat dari Lima Bersaudara"
                line2="Pasangan Bapak Anderias Sole & Ibu Eri Inna Subu Taopan"
                ig={{
                  path: "https://www.instagram.com/humankerdus",
                  label: "marvin_sole"
                }}
              />
            </BlurFade>
          </div>

          <div className="py-16 px-8 bg-secondary/10">
            <BlurFade inView delay={0.5}>
              <MempelaiCard
                ref={div2Ref}
                imageUrl="/images/md-8.jpg"
                name="Dena Selfiani Nenohalan"
                line1="Putri Sulung Anak Pertama dari Lima Bersaudara"
                line2="Pasangan Bapak Melianto Nenohalan & Ibu Mesryani Nenohalan - Lay"
                ig={{
                  path: "https://www.instagram.com/humankerdus",
                  label: "denanenohalan"
                }}
              />
            </BlurFade>
          </div>


        </div>

        

      </div>

    </div>
  )
}