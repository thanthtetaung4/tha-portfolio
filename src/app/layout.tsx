import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/ui/particles"
import { MyDock } from "@/components/dock"
import { StructuredData } from "@/components/structured-data"
import { siteConfig, siteUrl } from "@/lib/site"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.headline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Thant Htet",
    lastName: "Aung",
    username: "thanthtetaung4",
    url: siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons come from the file conventions (app/favicon.ico, app/apple-icon.tsx);
  // declaring them here as well would emit duplicate <link> tags.
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false,
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION once the property is claimed in
  // Google Search Console; omitted entirely when unset so no empty tag ships.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark min-h-screen w-full pt-10`}
      >
        <StructuredData />

        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <Particles
          className="fixed inset-0 z-0"
          quantity={500}
          ease={80}
          refresh
        />

        {/*
          The dock navigates by scripted scrolling, so crawlers get a real set of
          in-page anchors here instead. Visually hidden, still focusable.
        */}
        <nav aria-label="Sections" className="sr-only">
          <ul>
            <li><a href="#hero">Thant Htet Aung — home</a></li>
            <li><a href="#exp">Work experience</a></li>
            <li><a href="#about">About Thant Htet Aung</a></li>
            <li><a href="#certs">Certifications and achievements</a></li>
            <li><a href="#skills">Technical skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <main className="relative z-10 flex justify-center lg:px-20">
          {children}
          <MyDock />
        </main>
      </body>
    </html>
  )
}
