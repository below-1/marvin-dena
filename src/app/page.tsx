'use client';

import { MempelaiSection } from "@/components/MempelaiSection";
import { InvitationSection } from "@/components/InvitationSection";
import { CountdownSection } from "@/components/CountdownSection";
import { GallerySection } from "@/components/GallerySection";
import { ThanksSection } from "@/components/ThanksSection";
import { MapSection } from "@/components/MapSection";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { HeartAnimation } from "@/components/HeartsAnimation";
import { HeroCover } from "@/components/HeroCover";

export default function Home() {
  const [ isOpen, setOpen ] = useState(false)
  
  return (
    <div className="Wrapper">

      {/* Landing Cover */}
      <HeroCover isOpen={isOpen} setOpen={setOpen} />

      <HeartAnimation isPlaying={isOpen} />


      {isOpen && (
        <>

          {/* Hero */}
          <HeroSection />

          {/* Mempelai */}
          <MempelaiSection />

          {/* Invitation */}
          <InvitationSection />

          {/* Countdown Section */}
          <CountdownSection />

          {/* Gallery Section */}
          <GallerySection />

          {/* Map Section */}
          <MapSection />

          {/* Thanks Section */}
          <ThanksSection />
        </>
      )}

    </div>
  );
}

