import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ParallaxProviders } from "@/providers/parallax-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Wedding of Marvin & Dena',
  description: 'Pernikahan Marvin Sole & Dena Nenohalan.',
  openGraph: {
    title: 'Wedding of Marvin & Dena',
    description: 'Pernikahan Marvin Sole & Dena Nenohalan.',
    url: 'http://marvin-dena.vercel.app',
    siteName: 'Web of Marvin & Dena',
    images: [
      {
        url: 'https://marvin-dena.vercel.app/images/og-preview.jpg', // Must be an absolute URL or relative to metadataBase
        width: 3008,
        height: 4512,
        alt: 'Marvin & Dena',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'Wedding of Marvin and Dena',
    title: 'Web of Marvin & Dena',
    description: 'Pernikahan Marvin Sole & Dena Nenohalan.',
    creator: '@myawesomesite',
    images: ['https://marvin-dena.vercel.app/images/og-preview.jpg'], // Must be an absolute URL or relative to metadataBase
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParallaxProviders>
          {children}
        </ParallaxProviders>
      </body>
    </html>
  );
}
