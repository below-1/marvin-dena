'use client';

import { ParallaxProvider as PProvider } from 'react-scroll-parallax';

export function ParallaxProviders({ children }: { children: React.ReactNode }) {
  return <PProvider>{children}</PProvider>;
}