'use client';

import { useEffect } from "react";

const audio = new Audio('/wedding-audio.mp3');
audio.muted =true;

export function WeddingAudio() {
  useEffect(() => {
    console.log(audio)
    audio.play()
  }, [])
  return (
    <div className="hidden"></div>
  )
}