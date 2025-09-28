'use client';

import { kurale } from '@/commons/fonts';
import Image from 'next/image';
import { useState } from 'react';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { twMerge } from 'tailwind-merge';
import { useInterval } from 'usehooks-ts';
import { BlurFade } from './ui/blur-fade';

const TARGET_TIME = new Date(2025, 9, 15, 18, 0, 0)

export default function CountdownClient() {
  return (

    <ParallaxBanner className="h-screen md:h-160 bg-pink-200 w-screen z-10">
      <ParallaxBannerLayer className="bg-black/50 absolute inset-0 z-21">

      </ParallaxBannerLayer>

      <ParallaxBannerLayer className='z-20' image="/images/md-5.jpg" speed={-10} />

      <ParallaxBannerLayer className="z-23 grid items-center justify-center" speed={-20}>
        <div className='flex flex-col gap-4'>
          <p className={twMerge(
            kurale.className,
            'text-white font-bold text-4xl md:text-7xl text-center'
          )}>
            Countdown Timer
          </p>
          <CountdownClock />
        </div>
      </ParallaxBannerLayer>

    </ParallaxBanner>
  );
}

function CountdownClock() {
  const [ counts, setCounts ] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const difference = useInterval(() => {
    const d = getDateDifference(new Date(), TARGET_TIME)
    setCounts({
      ...d
    })
  }, 1000)
  return (
    <div className='grid md:grid-cols-4 gap-4 md:gap-16'>
      <BlurFade inView delay={0.2}>
        <CounterBox count={counts.days} label='Hari' />
      </BlurFade>
      <BlurFade inView delay={0.4}>
        <CounterBox count={counts.hours} label='Jam' />
      </BlurFade>
      <BlurFade inView delay={0.6}>
        <CounterBox count={counts.minutes} label='Menit' />
      </BlurFade>
      <BlurFade inView delay={0.8}>
        <CounterBox count={counts.seconds} label='Detik' />
      </BlurFade>
    </div>
  )
}

type CounterBoxProps = {
  count: number;
  label: string;
}
function CounterBox({ count, label }: CounterBoxProps) {
  // const 
  return (
    <div className="md:px-8 md:py-6 px-4 py-2 rounded-lg border flex flex-col items-center justify-center text-white">
      <span className='text-4xl md:text-7xl font-bold font-mono'>{count}</span>
      <span className='text-lg'>{label}</span>
    </div>
  )
}

function getDateDifference(date1: Date, date2: Date) {
  // Ensure date1 and date2 are Date objects
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Calculate the absolute difference in milliseconds
  let delta = Math.abs(d2.getTime() - d1.getTime());

  // Convert milliseconds to seconds
  delta /= 1000;

  // Calculate days
  const days = Math.floor(delta / 86400); // 86400 seconds in a day
  delta -= days * 86400;

  // Calculate hours
  const hours = Math.floor(delta / 3600) % 24; // 3600 seconds in an hour
  delta -= hours * 3600;

  // Calculate minutes
  const minutes = Math.floor(delta / 60) % 60; // 60 seconds in a minute
  delta -= minutes * 60;

  // Calculate seconds
  const seconds = Math.floor(delta % 60);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}