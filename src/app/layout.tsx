import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Hunter Coleman - Game Developer',
  description: 'Game Developer & Experience Designer specializing in UE5, AI systems, and creating flow experiences.',
  keywords: ['Game Developer', 'UE5', 'Unreal Engine', 'Game Design', 'Hunter Coleman'],
  authors: [{ name: 'Hunter Coleman' }],
  openGraph: {
    title: 'Hunter Coleman - Game Developer',
    description: 'Game Developer & Experience Designer specializing in UE5, AI systems, and creating flow experiences.',
    type: 'website',
  }
}

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
        {children}
      </body>
    </html>
  );
}
