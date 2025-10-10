import { engagement, kurale } from "@/commons/fonts";
import Image from "next/image";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";
import { MdiInstagram } from "./icons/mdi-instagram";

type Props = {
  name: string;
  imageUrl: string;
  title: string;
  line1: string;
  line2: string;
  ref?: RefObject<HTMLDivElement | null>;
  ig: {
    path: string;
    label: string;
  };
  className?: string;
}

export function MempelaiCard(props: Props) {
  return (
    <div
      className={twMerge(
        "max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground/30",
        props.className
      )}
      
    >

      <div 
        className="relative flex h-96 w-full md:h-124 md:w-wull overflow-clip rounded-sm shadow-lg mb-8"
        ref={props.ref}
      >
        <Image
          alt="MD1"
          src={props.imageUrl}
          fill={true}
          className={twMerge([
            "",
            "z-10 object-cover"
          ])}
        />
      </div>

      <div className="grid items-center justify-center content-center px-4">
        <p className={twMerge("text-lg self-start w-full font-sans tracking-widest uppercase")}>{props.title}</p>
        <div className="relative scale-x-120 pt-0.5 bg-foreground/20 mt-2 mb-4"></div>
        <p 
          className={twMerge(
            engagement.className,
            "tracking-wider text-foreground/70 text-left text-5xl md:text-5xl"
          )}
        >{props.name}</p>
        <p className="text-foreground/50 text-sm md:text-sm font-sans">{props.line1}</p>
        <p className="text-foreground/70 text-sm md:text-base tracking-wide font-sans leading-6">{props.line2}</p>

        <div className="flex">
          <a 
            href={props.ig.path}
            target="_blank"
            className="self-start text-foreground/50 font-mono tracking-wide flex items-center gap-1 border-b border-foreground/10 py-4 px-2 mt-4"
          >
            <MdiInstagram
              className="size-5"
            />
            <span>{props.ig.label}</span>
          </a>
        </div>
      </div>

    </div>
  )
}