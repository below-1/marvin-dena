'use client';

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

type Props = {
  onClick: () => void;
}

export function StartAppButton({ onClick }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    audioRef.current = typeof Audio === undefined ? null : new Audio("/wedding-audio.mp3");
  }, []);

  return (
    <>
      <Button 
        onClick={() => {
          audioRef.current?.play()
            .then(r => {
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