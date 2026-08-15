"use client";

import type { ReactNode } from "react";
import {
  SiReact,
  SiMui,
  SiFlask,
  SiFirebase,
  SiPython,
  SiNextdotjs,
  SiDeno,
  SiGoogle,
  SiC,
  SiLinux,
  SiLangchain,
  SiOllama,
} from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyButton } from "./ui/shiny-button";
import useScreenSize from "./hook/useScreenSize";
import { projects } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site";

/** Icon per tech key — the labels themselves live in `lib/portfolio-data`. */
const TECH_ICONS: Record<string, { icon: ReactNode; label: string }> = {
  next: { icon: <SiNextdotjs fontSize={24} />, label: "Next.js" },
  py: { icon: <SiPython fontSize={24} />, label: "Python" },
  lc: { icon: <SiLangchain fontSize={24} />, label: "LangChain" },
  ollama: { icon: <SiOllama fontSize={24} />, label: "Ollama" },
  supabase: { icon: <RiSupabaseLine fontSize={24} />, label: "Supabase" },
  react: { icon: <SiReact fontSize={24} />, label: "React" },
  mui: { icon: <SiMui fontSize={24} />, label: "Material UI" },
  flask: { icon: <SiFlask fontSize={24} />, label: "Flask" },
  firebase: { icon: <SiFirebase fontSize={24} />, label: "Firebase" },
  deno: { icon: <SiDeno fontSize={24} />, label: "Deno" },
  g: { icon: <SiGoogle fontSize={24} />, label: "Google Gemini" },
  C: { icon: <SiC fontSize={24} />, label: "C" },
  Linux: { icon: <SiLinux fontSize={24} />, label: "Linux" },
};

function ProjectCards() {
  const { width } = useScreenSize();

  let duration = 4;
  if (width >= 1024) {
    duration = 6;
  } else if (width >= 768) {
    duration = 8;
  }

  return (
    <div className="mt-5">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ slug, title, description, content, techStack, link }) => (
          <Card key={slug} className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>
                <h3>{title}</h3>
              </CardTitle>
              <CardDescription className="flex justify-between">
                <div>{description}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
              <div className="w-full flex justify-between">
                <ul
                  className="flex justify-between overflow-hidden list-none m-0 p-0"
                  style={{ width: `${24 * (techStack.length * 1.5)}px` }}
                  aria-label={`${title} tech stack`}
                >
                  {techStack.map((key) => {
                    const tech = TECH_ICONS[key];
                    if (!tech) return null;
                    return (
                      <li key={key} title={tech.label}>
                        <span className="sr-only">{tech.label}</span>
                        <span aria-hidden="true">{tech.icon}</span>
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <ShinyButton link={link} label={`View the ${title} project`}>
                    View Project
                  </ShinyButton>
                </div>
              </div>
            </CardFooter>
            <BorderBeam
              duration={duration}
              size={400}
              borderWidth={2}
              className="from-transparent via-violet-400 to-transparent"
            />
            <BorderBeam
              duration={duration}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-violet-400 to-transparent"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="mt-5" id="projects" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="text-2xl font-bold text-black dark:text-white"
      >
        Projects
      </h2>
      <ProjectCards />
      <div className="flex justify-center mt-4">
        <ShinyButton
          link={`${siteConfig.socials.github}?tab=repositories`}
          label={`Browse all of ${siteConfig.name}'s repositories on GitHub`}
        >
          <span className="text-lg font-bold">More On My GitHub</span>
        </ShinyButton>
      </div>
    </section>
  );
}
