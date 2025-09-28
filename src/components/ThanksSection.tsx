import { kurale } from "@/commons/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function ThanksSection() {
  return (
    <div 
      id="ThanksSection"
      className="h-160 max-w-screen relative"
    >
      <div className="absolute inset-0 z-12 from-[#efe4d0] bg-gradient-to-b to-50%">
      </div>
      <div 
        className="absolute inset-0 z-10 overflow-hidden bg-cover"
        style={{
          backgroundImage: "url(/images/md-11.jpg)",
          backgroundPosition: "70% 20%"
        }}
      >
      </div>
      <div 
        className={twMerge(
          kurale.className,
          "absolute top-0 left-0 right-0 z-20 flex items-center justify-center flex-col text-white pt-8"
        )}
      >
        <h2 className="text-primary text-7xl">Terimakasih</h2>
        <p className="text-primary">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i. berkenan hadir untuk memberi doa restu kepada kami.</p>
        <p className="text-primary">Atas kehadiran dan doa restunya kami ucapkan terima kasih</p>
      </div>
    </div>
  )
}