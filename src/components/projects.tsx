"use client";

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

function ProjectCards() {
  const { width } = useScreenSize();

  let duration = 4;
  if (width >= 1024) {
    duration = 6;
  } else if (width >= 768) {
    duration = 8;
  }

  const projects = [
    {
      title: "Knoverse",
      description:
        "Knoverse is a collaborative platform that enables teams to engage in AI-powered chat system driven by their internal documents.",
      content:
        "It enables users to ask natural-language questions about their team’s uploaded documents and receive accurate, contextual answers powered by a Retrieval-Augmented Generation (RAG) system. The platform also provides administrators with full control over teams, users, permissions, and activity analytics, allowing organizations to understand engagement and knowledge usage across teams.",
      techStack: [
        <SiNextdotjs key={"next"} fontSize={24} />,
        <SiPython key={"py"} fontSize={24} />,
        <SiLangchain key={"lc"} fontSize={24} />,
        <SiOllama key={"ollama"} fontSize={24} />,
        <RiSupabaseLine key={"supabase"} fontSize={24} />,
      ],
    },
    {
      title: "AnalytixNexa",
      description: "Open-source data analysis web app",
      content:
        "Empowers small businesses to visualize, analyze, and understand their data through an intuitive dashboard with Firebase authentication and real-time analytics.",
      techStack: [
        <SiReact key={"react"} fontSize={24} />,
        <SiMui key={"mui"} fontSize={24} />,
        <SiFlask key={"flask"} fontSize={24} />,
        <SiFirebase key={"firebase"} fontSize={24} />,
        <SiPython key={"py"} fontSize={24} />,
      ],
    },
    {
      title: "PaletteGen",
      description: "AI-powered color palette generator",
      content:
        "Generates aesthetic color palettes using Google Gemini AI and serves designers with instant creative inspiration.",
      techStack: [
        <SiNextdotjs key={"next"} fontSize={24} />,
        <SiDeno key={"deno"} fontSize={24} />,
        <SiFlask key={"flask"} fontSize={24} />,
        <SiPython key={"py"} fontSize={24} />,
        <SiGoogle key={"g"} fontSize={24} />,
      ],
    },
    {
      title: "Mini Shell (Bash Clone)",
      description: "Bash-like shell written in pure C",
      content:
        "Implements core shell features such as pipes, redirections, and environment variables — entirely built from scratch in C.",
      techStack: [
        <SiC key={"C"} fontSize={24} />,
        <SiLinux key={"Linux"} fontSize={24} />,
      ],
    },
    {
      title: "Mini RT (Ray Tracing Engine)",
      description: "Mini ray-tracing engine implemented in C",
      content:
        "Renders realistic 3D scenes using ray tracing with lighting, shadows, and reflections via MiniLibX.",
      techStack: [<SiC key={"C"} fontSize={24} />],
    },
  ];

  return (
    <div className="mt-5">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ title, description, content, techStack }, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="flex justify-between">
                <div>{description}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
              <div
                className="flex justify-between overflow-hidden"
                style={{ width: `${24 * (techStack.length * 1.5)}px` }}
              >
                {techStack}
              </div>
            </CardFooter>
            <BorderBeam
              duration={duration}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
            <BorderBeam
              duration={duration}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="mt-5" id="projects">
      <h2 className="text-2xl font-bold text-black dark:text-white">
        Projects
      </h2>
      <ProjectCards />
      <div className="flex justify-center mt-4">
        <ShinyButton link="https://github.com/thanthtetaung4?tab=repositories">
          <span className="text-lg font-bold">More On My GitHub</span>
        </ShinyButton>
      </div>
    </section>
  );
}
