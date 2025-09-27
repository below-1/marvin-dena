import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className="Wrapper">
      <div className="relative h-screen w-screen">
        <Image
					alt="MD1"
					src="/images/md-3.jpg"
          fill={true}
					className={twMerge([
						"HeroBg",
						"object-cover z-10"
					])}
				/>    
        <div className="Cover absolute inset-0 z-20 bg-black/40 flex items-center justify-center flex-col gap-4 pt-16">
          <p className="text-white text-7xl font-black mb-12">Marvin & Dena</p>
        </div>    
      </div>
    </div>
  );
}
