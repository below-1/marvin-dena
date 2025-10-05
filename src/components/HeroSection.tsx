'use client';

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { LightRays } from "./ui/light-rays";
import { kurale } from "@/commons/fonts";
import { TextAnimate } from "./ui/text-animate";
import { TypingAnimation } from "./ui/typing-animation";
import { BlurFade } from "./ui/blur-fade";
import { Button } from "./ui/button";
import { PixelImage } from "./ui/pixel-image";
import "./HeroSection.css";
import { useEffect, useMemo, useState } from "react";
import { useInterval } from "usehooks-ts";
import { SpinningText } from "./ui/spinning-text";

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(1)
  const [images, setImages] = useState([
    { id: 1, path: "/images/md-5.jpg" },
    { id: 2, path: "/images/md-6.jpg" },
    { id: 3, path: "/images/md-12.jpg" },
  ])
  useInterval(() => {
    setActiveImage(i => (i % 4) + 1);
  }, 4000)

  return (
    <div className="HeroCover dark relative overflow-clip h-screen max-w-screen dark">
      <AnimatePresence>
        {images.map(image => activeImage !== image.id && (
          <motion.div
            key={image.id}
            className={twMerge([
              "absolute inset-0 z-10"
            ])}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              scale: 1.2
            }}
            transition={{
              scale: {
                duration: 4,
                ease: "easeInOut"
              }
            }}
            exit={{
              opacity: 0
            }}
          >
            <Image
              alt="MD1"
              src={image.path}
              fill={true}
              className={twMerge([
                "object-cover"
              ])}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <div 
        className="absolute inset-0 z-30 from-[rgba(23,41,96,0.1)] to-[rgba(23,41,96,1)] bg-gradient-to-b"
        // className="absolute inset-0 z-30 bg-primary/70 backdrop-blur-xs"
      >

      </div>

      <div className="absolute  z-50 rotate-z-90 -translate-x-12 translate-y-[calc(100vh/2)] text-white font-mono font-black text-xl tracking-widest">15.10.2025</div>

      <div
        className={twMerge(
          kurale.className,
          "Cover absolute inset-0 z-40 flex items-center flex-col gap-4 py-8 px-4 md:px-0"
        )}
      >
        <div 
          className="w-full self-start flex justify-between flex-row-reverse"
        >
          <SpinningText 
            duration={50} 
            className="text-white text-xs font-black font-mono my-6 -translate-x-12"
          >
            The Wedding Of
          </SpinningText>
          <div
            className="flex flex-col font-mono font-black text-white text-6xl md:text-8xl"
          >
            <h1>Marvin</h1>
            <h1>&Dena</h1>
          </div>
        </div>

        {/* Secondary Line */}
        <div 
          className="grow self-start flex"
        >
          <div 
            className="relative -z-10 scale-125 px-0.5 bg-secondary/80 h-full"
          ></div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <TypingAnimation className="text-foreground text-2xl md:text-4xl text-center" delay={1200} duration={50} startOnView={true}>Kepada Aristop Solle</TypingAnimation>
          <BlurFade 
            delay={2} 
            duration={1}
            className="flex items-center justify-center flex-col gap-4"
          >
            <p 
              className="text-foreground text-xs md:text-lg text-center"
            >
              Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.</p>
            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="uppercase font-mono text-white scale-120"
            >
              <a
                target="_blank"
                href="http://www.google.com/calendar/event?action=TEMPLATE&text=Pernikahan%20Marvin%20dan%20Dena&dates=20131124T010000Z/20131124T020000Z&details=Pernikahan%20Marvin%20Dena&location=123%20Main%20St%2C%20Example%2C%20NY">
                Save The Date
              </a>
            </Button> */}
          </BlurFade>

        </div>
      </div>
    </div>
  )
}