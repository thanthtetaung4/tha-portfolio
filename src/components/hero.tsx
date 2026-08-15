"use client";

import { useTheme } from "next-themes";
import useScreenSize from "./hook/useScreenSize";
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WordRotate } from "@/components/ui/word-rotate";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MagicCard } from "@/components/ui/magic-card";
import Link from "next/link";
import { experiences } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site";

export function JobCard() {
  const { theme } = useTheme();

  return (
    <section id="exp" aria-labelledby="exp-heading">
      <h2
        id="exp-heading"
        className="text-2xl font-bold text-black dark:text-white"
      >
        Experiences
      </h2>
      <div className="grid gap-4 mt-4 w-ful lg:grid-cols-2">
        {experiences.map(
          ({ title, description, duration, lists, content }, index) => (
            <Card
              key={index}
              className="h-full w-full max-w-sm md:max-w-none border-none p-0 shadow-none"
            >
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0 h-full"
              >
                <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
                  {/* Bare <h3>: preflight resets heading size/weight to inherit,
                      so this adds document outline without changing the design. */}
                  <CardTitle>
                    <h3>{title}</h3>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex justify-between">
                      <div>{description}</div>
                      <div>{duration}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="list-disc px-2.5">
                    {lists.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="px-2.5">{content && content}</div>
                </CardContent>
              </MagicCard>
            </Card>
          ),
        )}
      </div>
    </section>
  );
}

export function Hero() {
  const { width } = useScreenSize();
  const [ml, setMl] = useState(0);

  useEffect(() => {
    if (!width) return;

    let newMl = 0;
    if (width >= 1536) {
      newMl = -width * 0.04;
    } else if (width >= 810) {
      newMl = -width * 0.04;
    } else {
      newMl = 0;
    }

    setMl(newMl);
  }, [width]);

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="grid gap-2 md:grid-cols-4 md:justify-between md:items-start lg:grid-cols-12">
        {/*
          `contents` keeps the grid layout byte-identical while giving the page a
          single, stable <h1>. The visible copy animates; the sr-only span holds
          the full name and role so the heading text a crawler reads never
          changes between renders.
        */}
        <h1 id="hero-heading" className="contents">
          <span className="sr-only">
            {siteConfig.name} — {siteConfig.headline} based in{" "}
            {siteConfig.location.city}
          </span>
          <span
            aria-hidden="true"
            className="text-3xl font-bold text-white inline-block md:leading-[-2.7] lg:col-span-2"
          >
            Hi{" "}
            <span
              className="wave-hand inline-block origin-[70%_70%]"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
            , I am{" "}
          </span>
          <span
            aria-hidden="true"
            className="block md:col-span-3 lg:col-span-10"
            style={{ marginLeft: ml }}
            id="word"
          >
            <WordRotate
              className="text-4xl font-bold text-black dark:text-white inline-block"
              words={["Thant", "A Developer"]}
            />
          </span>
        </h1>
        <p className="mt-5 text-lg md:col-span-full md:text-xl">
          Software Engineer skilled in AI engineering, full-stack development and
          system programming, with experience in shipping production features, leading projects, freelancing,
          releasing tool and winning hackathons.
        </p>
      </div>
      <div className="mt-5 flex justify-around">
        <div className="w-1/2 flex justify-around items-center">
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.name} on GitHub`}
            title={`${siteConfig.name} on GitHub`}
          >
            <FaGithub className="text-2xl md:text-3xl" aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.name} on LinkedIn`}
            title={`${siteConfig.name} on LinkedIn`}
          >
            <FaLinkedin className="text-2xl md:text-3xl" aria-hidden="true" />
          </Link>
        </div>
        <ShinyButton
          link="/resume.pdf"
          label={`Download ${siteConfig.name}'s resume (PDF)`}
        >
          Get My Resume
        </ShinyButton>
      </div>
      <div className="mt-5">
        <JobCard />
      </div>
    </section>
  );
}
