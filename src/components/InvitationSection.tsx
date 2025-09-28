import { kurale } from "@/commons/fonts"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { TypingAnimation } from "./ui/typing-animation"
import { BlurFade } from "./ui/blur-fade"

const CEREMONIES = [
  {
    title: "Pemberkatan Nikah",
    dateDisplay: "Rabu, 15 / Oktober / 2025",
    timeDisplay: "Pukul 15:00 WITA",
    placeDisplay: "GMIT Jemaat Kota Kupang",
    address: "Jl. Sukarno No.3, Lahilai Bissi Kopan, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Tim."
  },
  {
    title: "Resepsi",
    dateDisplay: "Rabu, 15 / Oktober / 2025",
    timeDisplay: "Pukul 18:00 WITA",
    placeDisplay: "Rumah Bapak Melianto Nenohalan",
    address: "Jln. Ikan Kombong, Namosain"
  }
]

export function InvitationSection() {
  return (
    <section 
      id="InvitationSection" 
      className={twMerge(
        kurale.className,
        "px-4 md:px-0 max-w-screen h-auto md:h-screen bg-neutral-100 text-neutral-500 flex flex-col items-center justify-center"
      )}
    >
      <div className="h-auto md:h-1/3 py-8 md:py-0 max-w-5xl mx-auto flex flex-col justify-center items-center gap-4">

        <div className="flex items-center justify-center">
          <Image
            src="/images/ormament-3.png"
            width={256}
            height={64}
            alt=""
          />
        </div>

        <p className="text-neutral-500 text-center text-lg md:text-xl">Dengan mengucap rasa syukur dan terimakasih atas berkat Tuhan, <br/>Perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara resepsi pernikahan putra-putri kami yang akan dilaksanakan pada:</p>

      </div>
      {/* <div className="hidden md:grid grid-cols-2">
        <div className="grid justify-center items-center">
          <p className="text-2xl text-primary">Pemberkatan</p>
        </div>
        <div className="grid justify-center items-center">
          <p className="text-2xl text-primary">Resepsi</p>
        </div>
      </div> */}

      <div className="h-auto md:h-2/3 text-neutral-700 w-full grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-4">

        <CeremonySection
          className="bg-secondary/20"
          {...CEREMONIES[0]}
        />

        <CeremonySection
          className="bg-secondary/10"
          {...CEREMONIES[1]}
        />

      </div>
    </section>
  )
}

type Props = {
  title: string;
  dateDisplay: string;
  timeDisplay: string;
  placeDisplay: string;
  address: string;
  className?: string;
}

function CeremonySection(props: Props) {
  return (
    <div 
      className={twMerge(
        "bg-primary/10 p-8 grid justify-center items-center",
        props.className
      )}
    >
      <div className="max-w-96 flex flex-col">
        <TypingAnimation startOnView className="text-4xl leading-12 tracking-wider mb-6">
          {props.title}
        </TypingAnimation>

        <BlurFade inView delay={0.4}>
          <div className="font-mono text-lg font-bold text-neutral-600 mb-8">
            <p>{props.dateDisplay}</p>
            <p>{props.timeDisplay}</p>
          </div>

          <p className="mb-4 text-neutral-400 font-bold font-mono text-sm tracking-widest uppercase">Bertempat Di:</p>
          <p className="font-mono font-bold text-neutral-500 mb-1">{props.placeDisplay}</p>
          <p className="font-mono text-xs text-neutral-600">{props.address}</p>
        </BlurFade>


      </div>
    </div>
  )
}