import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { kurale } from "@/commons/fonts";
import { GalleryMasonry } from "./GalleryMasonry";

export function GallerySection() {
  return (
    <section 
      id="GallerySection"
      className="min-h-screen max-w-screen bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto py-32 px-4">
        <h2 className={twMerge(
          kurale.className,
          "text-5xl text-center mb-8"
        )}>Gallery Foto</h2>
        <GalleryMasonry />
      </div>
    </section>
  )
}


type GalleryItemProps = {
  image: string;
}

function GalleryItem({ image }: GalleryItemProps) {
  return (
    <figure
      className={cn(
        "relative h-64 w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        alt=""
        src={image}
        fill
      />
    </figure>
  )
}

const ITEMS = [
  { image: "/images/md-1.jpg" },
  { image: "/images/md-2.jpg" },
  { image: "/images/md-3.jpg" },
  { image: "/images/md-4.jpg" },
  { image: "/images/md-5.jpg" },
  { image: "/images/md-6.jpg" },
  { image: "/images/md-7.jpg" },
  { image: "/images/md-8.jpg" },
  { image: "/images/md-9.jpg" },
  { image: "/images/md-10.jpg" }
]

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = ITEMS.slice(0, reviews.length / 2)
const secondRow = ITEMS.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <GalleryItem key={review.image} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <GalleryItem key={review.image} {...review} />
        ))}
      </Marquee>
      <div className="from-[#efe4d0] pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-[#efe4d0] pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
