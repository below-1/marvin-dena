'use client';

import { engagement, kurale } from '@/commons/fonts';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { twMerge } from 'tailwind-merge';

export function SalamSection() {
  return (
    <ParallaxBanner className="h-96 md:h-80 w-screen z-10 dark text-white">
      <ParallaxBannerLayer className='z-20' image="/images/md-12.jpg" speed={-20} />
      <ParallaxBannerLayer className="bg-black/70 absolute inset-0 z-21"></ParallaxBannerLayer>
      <ParallaxBannerLayer className="z-23 max-w-6xl mx-auto grid items-center px-4 md:px-0" speed={-2}>
        <div className='flex flex-col gap-4'>
          <p className={twMerge(
            // engagement.className,
            'tracking-widest font-bold text-xl md:text-3xl'
          )}>
            Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan
          </p>
          <p className='text-lg'>Kolose 3:14</p>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}