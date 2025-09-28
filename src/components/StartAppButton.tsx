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
        className="uppercase font-mono scale-120"
      >
        Open Invitation
      </Button>
    </>
  )
}