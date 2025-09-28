import { twMerge } from "tailwind-merge";
import { MdiHeart } from "./icons/mdi-heart";

export function HeartAnimation({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className={twMerge(
      !isPlaying ? "hidden" : "flex",
      "fixed z-80 top-4 left-4 w-18 h-18 rounded-full items-center justify-center bg-black/40 animate-bounce",
    )}>
      <MdiHeart
        className={twMerge(
          "text-transparent size-12",
          isPlaying ? "text-pink-500 animate-aurora stroke-solid stroke-white" : "stroke-solid stroke-white"
        )}
      />
    </div>
  )
}