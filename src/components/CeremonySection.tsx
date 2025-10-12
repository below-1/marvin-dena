'use client';

import { twMerge } from "tailwind-merge";
import { TypingAnimation } from "./ui/typing-animation";
import { TextAnimate } from "./ui/text-animate";
import { BlurFade } from "./ui/blur-fade";
import { Button } from "./ui/button";
import { AddToCalendarButton } from "add-to-calendar-button-react";

type Props = {
  title: string;
  dateDisplay: string;
  timeDisplay: string;
  placeDisplay: string;
  address: string;
  addressLink: string;
  className?: string;
}

export function CeremonySection(props: Props) {
  return (
    <div 
      className={twMerge(
        "bg-transparent px-8 lg:px-0 py-8 grid content-center",
        props.className
      )}
    >
      <div className="max-w-96 flex flex-col">
        <TypingAnimation className="text-4xl leading-12 tracking-wider mb-6" startOnView >
          {props.title}
        </TypingAnimation>

        <div className="font-mono text-lg font-bold text-neutral-600 mb-8">
          <TextAnimate once delay={0.4}>{props.dateDisplay}</TextAnimate>
          <TextAnimate once delay={0.6}>{props.timeDisplay}</TextAnimate>
        </div>
        <p className="mb-4 text-neutral-400 font-bold font-mono text-sm tracking-widest uppercase">Bertempat Di:</p>
        <TextAnimate once className="font-mono font-bold text-neutral-500 mb-1" delay={0.4}>{props.placeDisplay}</TextAnimate>
        <TextAnimate once className="font-mono text-xs text-neutral-600" delay={0.6}>{props.placeDisplay}</TextAnimate>

        <BlurFade inView delay={0.8}>
          <div className="grid md:grid-cols-2 gap-2 my-8">
            <div className="">
              <AddToCalendarButton
                name='Pemberkatan Marvin & Dena'
                startDate='2026-02-21T10:13'
                startTime="15:00"
                options={['Google','Apple']}
                timeZone='Asia/Makassar'
                buttonStyle="flat"
                label="Save The Date"
                forceOverlay
              />
            </div>
            <div className="flex min-h-12">
              <Button asChild variant="secondary" size="lg" className="self-stretch max-h-none h-full text-xl">
                <a href={props.addressLink} target="_blank">
                  Open Map
                </a>
              </Button>
            </div>
          </div>
        </BlurFade>


      </div>
    </div>
  )
}