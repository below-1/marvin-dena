'use client';

import { MempelaiSection } from "@/components/MempelaiSection";
import { InvitationSection } from "@/components/InvitationSection";
import { CountdownSection } from "@/components/CountdownSection";
import { GallerySection } from "@/components/GallerySection";
import { ThanksSection } from "@/components/ThanksSection";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { HeroCover } from "@/components/HeroCover";
import { SalamSection } from "@/components/SalamSection";
import { KomentarSection } from "@/components/KomentarSection";
import type { IKomentar } from "@/db/schema";

type HomeClientProps = {
  komentars: IKomentar[];
  name: string;
};

export default function InvitationClient({
  komentars,
  name
}: HomeClientProps) {
  const [ isOpen, setOpen ] = useState(false)
  
  return (
    <div className="Wrapper">

      {/* Landing Cover */}
      <HeroCover name={name}  isOpen={isOpen} setOpen={setOpen} />

      {/* <HeartAnimation isPlaying={isOpen} /> */}


      {isOpen && (
        <>
          {/* Hero */}
          <HeroSection />

          {/* Mempelai */}
          <MempelaiSection />

          <SalamSection />

          {/* Invitation */}
          <InvitationSection />

          {/* Countdown Section */}
          <CountdownSection />

          {/* Gallery Section */}
          <GallerySection />

          {/* Komentar Section */}
          <KomentarSection komentars={komentars} />

          {/* Thanks Section */}
          <ThanksSection />
        </>
      )}

    </div>
  );
}

