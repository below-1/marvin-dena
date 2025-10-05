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
        "max-w-screen h-auto md:h-screen bg-neutral-100 text-neutral-500 flex flex-col items-center justify-center"
      )}
    >
      <div className="h-auto md:h-1/3 py-32 pb-16 md:py-0 px-4 md:px-0 font-sans max-w-6xl mx-auto flex flex-col justify-center items-center gap-4">

        <div className="self-start flex justify-start">
          <Image
            src="/images/ormament-3.png"
            width={124}
            height={64}
            alt=""
          />
        </div>

        <p className="text-neutral-500 text-start text-base md:text-xl tracking-tight">Dengan mengucap rasa syukur dan terimakasih atas berkat Tuhan, <br/>Perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara resepsi pernikahan putra-putri kami yang akan dilaksanakan pada:</p>

      </div>
      {/* <div className="hidden md:grid grid-cols-2">
        <div className="grid justify-center items-center">
          <p className="text-2xl text-primary">Pemberkatan</p>
        </div>
        <div className="grid justify-center items-center">
          <p className="text-2xl text-primary">Resepsi</p>
        </div>
      </div> */}

      <div className="relative h-screen md:h-2/3 text-neutral-700 w-full grid md:grid-cols-2 divide-y md:divide-y-0">
        <div 
          className="hidden md:block bg-secondary/20"
        >
        </div>
        <div 
          className="hidden md:block bg-secondary/10"
        >
        </div>

        <div className="absolute inset-0 flex md:items-center md:justify-center">
          <div className="w-6xl grid md:grid-cols-2">
            <CeremonySection
              className="bg-secondary/10 md:bg-transparent"
              {...CEREMONIES[0]}
            />

            <CeremonySection
              className="md:px-4 bg-secondary/20 md:bg-transparent"
              {...CEREMONIES[1]}
            />
          </div>
        </div>


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
        "bg-transparent px-4 md:px-0 py-8 grid content-center",
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