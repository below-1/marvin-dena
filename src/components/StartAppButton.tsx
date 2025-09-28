'use client';

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import AudioVisualizer from "@tiagotrindade/audio-visualizer"

const audio = new Audio("/wedding-audio.mp3")

export function StartAppButton() {
  const audioRef = useRef<HTMLAudioElement>(audio)

  return (
    <>
      <div className="fixed z-50 top-0 w-[120px] h-[120px] flex items-center bg-black/40">
        {/* <AudioVisualizer audio={audioRef} style={{ width: 100, height: 100 }} /> */}
      </div>
      <Button 
        onClick={() => {
          console.log(audioRef.current)
          audio.play()
            .then(r => {
              console.log(r)
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