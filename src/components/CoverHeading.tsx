'use client';

import { AuroraText } from "./ui/aurora-text";

export function CoverHeading() {
  return (
    <div className="text-center flex flex-col mb-12 text-6xl sm:text-7xl md:text-8xl font-black">
      <AuroraText 
        className=""
        colors={[
          "var(--primary)", 
          "var(--secondary)", 
        ]}
      >Marvin</AuroraText>
      <AuroraText 
        className=""
        colors={[
          "var(--primary)", 
          "var(--secondary)", 
        ]}
      >Dena</AuroraText>
    </div>
  )
}