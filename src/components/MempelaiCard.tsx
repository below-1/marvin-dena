import { engagement, kurale } from "@/commons/fonts";
import Image from "next/image";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  imageUrl: string;
  line1: string;
  line2: string;
  line3: string;
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
}

export function MempelaiCard(props: Props) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center gap-2",
        props.className
      )}
      
    >
      <div 
        className="relative flex h-48 w-32 md:h-64 md:w-48 overflow-clip rounded-full border-4 border-secondary"
        ref={props.ref}
      >
        <Image
          alt="MD1"
          src={props.imageUrl}
          fill={true}
          className={twMerge([
            "HeroBg",
            "z-10 object-cover"
          ])}
        />
      </div>

      <p 
        className={twMerge(
          engagement.className,
          "text-secondary text-center text-3xl md:text-3xl"
        )}
      >{props.name}</p>
      <p className="text-foreground/80 text-center text-sm md:text-base font-sans mb-6">{props.line1}</p>
      <p className="text-foreground/60 text-center text-xs md:text-sm font-sans leading-4">{props.line2}</p>
      <p className="text-foreground/60 text-center text-xs md:text-sm font-sans leading-4">{props.line3}</p>
    </div>
  )
}