'use server';

import { getAllKomentars } from "@/lib/actions";
import InvitationClient from "./invitation/[id]/InvitationClient";
import { twMerge } from "tailwind-merge";
import { engagement, kurale } from "@/commons/fonts";
import Image from "next/image";
import { CoverHeading } from "@/components/CoverHeading";

export default async function Home() {
  
  return (
    <div className="HeroCover dark relative overflow-clip h-screen max-w-screen dark">
      <div className="absolute z-50 inset-0 flex items-center justify-center flex-col">
        <CoverHeading />
        <p className="font-mono text-xl font-black text-white">15.10.2025</p>
      </div>

      <div
        className={twMerge([
          "absolute inset-0 z-10"
        ])}
      >
        <Image
          alt="MD1"
          src="/images/md-10.jpg"
          fill={true}
          className={twMerge([
            "object-cover"
          ])}
        />
      </div>

      <div 
        className="absolute inset-0 z-30 bg-black/70 backdrop-blur-xs"
        // className="absolute inset-0 z-30 bg-primary/70 backdrop-blur-xs"
      >

      </div>
    </div>
  )
}

