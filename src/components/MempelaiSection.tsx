'use client';

import { twMerge } from "tailwind-merge";
import { Kurale, Meow_Script, Grand_Hotel as Engagement } from 'next/font/google'
import { MempelaiCard } from "./MempelaiCard";
import { useRef } from "react";
import { AnimatedBeam } from "./ui/animated-beam";
import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";

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
        "relative min-h-screen max-w-screen flex flex-col py-16 md:py-32 px-4 md:px-0"
      )}
      ref={containerRef}
    >
      {/* <Meteors number={30} /> */}
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-32 md:gap-8 mb-16">

          <BlurFade inView delay={0.2}>
            <MempelaiCard
              ref={div1Ref}
              imageUrl="/images/md-9.jpg"
              name="Marvin Sole"
              line1="Putra Ke Ketiga Anak Ke Empat dari Lima Bersaudara"
              line2="Pasangan Bapak Anderias Sole &"
              line3="Ibu Eri Inna Subu Taopan"
            />
          </BlurFade>

          <BlurFade inView delay={0.5}>
            <MempelaiCard
              ref={div2Ref}
              imageUrl="/images/md-8.jpg"
              name="Dena Selfiani Nenohalan"
              line1="Putri Sulung Anak Pertama dari Lima Bersaudara"
              line2="Pasangan Bapak Melianto Nenohalan &"
              line3="Ibu Mesryani Nenohalan - Lay"
            />
          </BlurFade>

        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/ormament-1.svg"
            width={128}
            height={48}
            alt=""
          />
        </div>

        <BlurFade inView delay={0.8}>
          <div 
            className={twMerge(
              kurale.className,
              "text-foreground font-mono max-w-2xl mx-auto text-center"
            )}
          >
            <blockquote className="text-secondary text-lg">
              Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan
            </blockquote>
            <p className="text-base">Kolose 3:14</p>
          </div>
        </BlurFade>

      </div>

    </div>
  )
}