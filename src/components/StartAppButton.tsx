'use client';

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { MdiHeart } from "./icons/mdi-heart";
import { twMerge } from "tailwind-merge";

type Props = {
  onClick: () => void;
}

export function StartAppButton({ onClick }: Props) {
  const audioRef = useRef<HTMLAudioElement>(new Audio("/wedding-audio.mp3"))
  const [ isPlaying, setPlaying ] = useState(false)

  return (
    <>
      <div className={twMerge(
        !isPlaying ? "hidden" : "flex",
        "fixed z-80 top-4 left-4 w-18 h-18 rounded-full items-center justify-center bg-black/40 animate-bounce",
      )}>
        <MdiHeart
          className={twMerge(
            "text-transparent size-12",
            isPlaying ? "text-pink-500 animate-aurora stroke-solid stroke-white" : "stroke-solid stroke-white"
          )}
        />
      </div>
      <Button 
        onClick={() => {
          audioRef.current?.play()
            .then(r => {
              console.log(r)
              setPlaying(true)
              onClick()
            })
            .catch(err => {
              console.error(err)
            })
        }}
        variant="outline" 
        size="lg" 
        className="uppercase font-mono text-white scale-120"
      >
        Open Invitation
      </Button>
    </>
  )
}