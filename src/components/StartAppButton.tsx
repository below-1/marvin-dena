'use client';

import { Button } from "./ui/button";

const audio = new Audio('/wedding-audio.mp3');

export function StartAppButton() {

  return (
    <Button 
      onClick={() => {
        audio.play()
      }}
      variant="outline" 
      size="lg" 
      className="uppercase font-mono text-white scale-120"
    >
      Open Invitation
    </Button>
  )
}