import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/ui/particles"
import { MyDock } from "@/components/dock"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thant Htet Aung",
  description: "Full-stack software developer skilled in system programming and full-stack development, with experience leading projects, freelancing, and winning hackathons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark min-h-screen w-full pt-10`}
      >
        <Particles
          className="fixed inset-0 z-0"
          quantity={500}
          ease={80}
          refresh
        />

        <main className="relative z-10 flex justify-center">
          {children}
          <MyDock />
        </main>
      </body>
    </html>
  )
}
