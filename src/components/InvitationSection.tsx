import { kurale } from "@/commons/fonts"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { TypingAnimation } from "./ui/typing-animation"
import { BlurFade } from "./ui/blur-fade"
import { Button } from "./ui/button"
import { TextAnimate } from "./ui/text-animate"
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { CeremonySection } from "./CeremonySection"

const CEREMONIES = [
  {
    title: "Pemberkatan Nikah",
    dateDisplay: "Rabu, 15 / Oktober / 2025",
    timeDisplay: "Pukul 15:00 WITA",
    placeDisplay: "GMIT Jemaat Kota Kupang",
    address: "Jl. Sukarno No.3, Lahilai Bissi Kopan, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Tim.",
    addressLink: "https://maps.app.goo.gl/kYfeJ3QWCnVNNqNdA",
    addToCalendarProps: {
      name: 'Pemberkatan Marvin & Dena',
      startDate: '2025-10-15T15:00',
      endDate: '2025-10-15T17:30',
      options: ['Google','Apple'],
      timeZone: 'Asia/Makassar',
      location: "GMIT Jemaat Kota Kupang"
    }
  },
  {
    title: "Resepsi",
    dateDisplay: "Rabu, 15 / Oktober / 2025",
    timeDisplay: "Pukul 18:00 WITA",
    placeDisplay: "Rumah Bapak Melianto Nenohalan",
    address: "Jln. Ikan Kombong, Namosain",
    addressLink: "https://maps.app.goo.gl/Sp3xwX1gy7DRFaEj6",
    addToCalendarProps: {
      name: 'Resepsi Marvin & Dena',
      startDate: '2025-10-15T18:00',
      endDate: '2025-10-15T21:30',
      options: ['Google','Apple'],
      location: "Rumah Bapak Melianto Nenohalan",
      timeZone: 'Asia/Makassar'
    }
  }
]

export function InvitationSection() {
  return (
    <>
      <div className="h-auto md:h-92 py-32 pb-16 md:py-0 px-8 lg:px-0 font-sans max-w-6xl mx-auto flex flex-col justify-center items-center gap-4">

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
      <section 
        id="InvitationSection" 
        className={twMerge(
          kurale.className,
          "relative max-w-screen h-[calc(100vh*1.4)] md:h-150 bg-neutral-100 text-neutral-500 flex flex-col items-center justify-center"
        )}
      >
        {/* <div className="hidden md:grid grid-cols-2">
          <div className="grid justify-center items-center">
            <p className="text-2xl text-primary">Pemberkatan</p>
          </div>
          <div className="grid justify-center items-center">
            <p className="text-2xl text-primary">Resepsi</p>
          </div>
        </div> */}

        <div 
          className="hidden md:block absolute left-0 bottom-0 top-0 right-1/2 bg-secondary/20"
        >
        </div>
        <div 
          className="hidden md:block absolute right-0 bottom-0 top-0 left-1/2 bg-secondary/10"
        >
        </div>
        <div className="absolute inset-0 flex md:items-center md:justify-center">
          <div className="w-6xl grid md:grid-cols-2">
            <CeremonySection
              className="bg-secondary/10 md:bg-transparent md:pl-4"
              {...CEREMONIES[0]}
            />

            <CeremonySection
              className="md:pl-4 bg-secondary/20 md:bg-transparent"
              {...CEREMONIES[1]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

