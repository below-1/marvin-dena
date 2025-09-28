'use client';

import { twMerge } from "tailwind-merge";
import { Kurale, Meow_Script, Grand_Hotel as Engagement } from 'next/font/google'
import { MempelaiCard } from "./MempelaiCard";
import { useRef } from "react";
import { AnimatedBeam } from "./ui/animated-beam";
import Image from "next/image";

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
        "relative bg-background h-screen max-w-screen flex flex-col py-32"
      )}
      ref={containerRef}
    >
      {/* <Meteors number={30} /> */}
      <div className="max-w-3xl mx-auto">

        <div className="grid grid-cols-2 gap-8 mb-16">

          <MempelaiCard
            ref={div1Ref}
            imageUrl="/images/md-9.jpg"
            name="Marvin Sole"
            line1="Putra Ke Ketiga Anak Ke Empat dari Lima Bersaudara"
            line2="Pasangan Bapak Anderias Sole &"
            line3="Ibu Eri Inna Subu Taopan"
          />

          <MempelaiCard
            ref={div2Ref}
            imageUrl="/images/md-8.jpg"
            name="Dena Selfiani Nenohalan"
            line1="Putri Sulung Anak Pertama dari Lima Bersaudara"
            line2="Pasangan Bapak Melianto Nenohalan &"
            line3="Ibu Mesryani Nenohalan - Lay"
          />

        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/ormament-1.svg"
            width={128}
            height={48}
            alt=""
          />
        </div>

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

      </div>

    </div>
  )
}