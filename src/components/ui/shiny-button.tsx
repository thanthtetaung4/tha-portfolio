"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

import Link from "next/link"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

const surfaceClasses =
  "relative cursor-pointer rounded-lg border px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/10%]"

function ShinyContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="relative block size-full text-sm tracking-wide text-[rgb(0,0,0,65%)] uppercase dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </>
  )
}

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
  link?: string
  /** Screen-reader / crawler label when the visible text is generic. */
  label?: string
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, link, label, ...props }, ref) => {
  if (link) {
    // PDFs open in a new tab too, so the visitor never loses the page.
    const opensNewTab = /^https?:\/\//.test(link) || link.endsWith(".pdf")
    const isExternal = /^https?:\/\//.test(link)

    // Rendered as a single anchor rather than a <button> inside an <a>: nested
    // interactive elements are invalid HTML and cost the link its crawlability.
    return (
      <motion.span {...animationProps} className="inline-block">
        <Link
          href={link}
          className={cn("inline-block", surfaceClasses, className)}
          aria-label={label}
          {...(opensNewTab ? { target: "_blank" } : {})}
          {...(isExternal ? { rel: "noopener noreferrer" } : {})}
        >
          <ShinyContent>{children}</ShinyContent>
        </Link>
      </motion.span>
    )
  }

  return (
    <motion.button
      ref={ref}
      className={cn(surfaceClasses, className)}
      aria-label={label}
      {...animationProps}
      {...props}
    >
      <ShinyContent>{children}</ShinyContent>
    </motion.button>
  )
})

ShinyButton.displayName = "ShinyButton"
