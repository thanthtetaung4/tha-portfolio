/**
 * Plain portfolio content, shared by the rendered UI and the JSON-LD graph so
 * the two can never drift apart. Icons stay in the components; this file holds
 * only text a crawler cares about.
 */

export type Project = {
  slug: string;
  title: string;
  description: string;
  content: string;
  /** Keys resolved to icons by the projects component. */
  techStack: string[];
  /** Human-readable stack, used for structured data. */
  keywords: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: "third-eye",
    title: "Third Eye",
    description:
      "Third Eye is a new fact checker that can classify the news being true or false and give back the related news about user input and inform decission based on the actual news.",
    content:
      "Third Eye is powerd by a ReAct loop, whcih can reason and take action based on the information fetched from the internet.",
    techStack: ["next", "py", "lc", "ollama", "supabase"],
    keywords: ["Next.js", "Python", "LangChain", "Ollama", "Supabase", "Agentic AI", "Fact checking"],
    link: "https://github.com/Th1rd3yE",
  },
  {
    slug: "knoverse",
    title: "Knoverse",
    description:
      "Knoverse is a collaborative platform that enables teams to engage in AI-powered chat system driven by their internal documents.",
    content:
      "This RAG-powered platform allows teams to query uploaded documents using natural language while providing administrators with centralized control over user permissions and knowledge engagement analytics.",
    techStack: ["next", "py", "lc", "ollama", "supabase"],
    keywords: ["Next.js", "Python", "LangChain", "Ollama", "Supabase", "RAG", "Document AI"],
    link: "https://github.com/thanthtetaung4/Knoverse",
  },
  {
    slug: "analytixnexa",
    title: "AnalytixNexa",
    description: "Open-source data analysis web app",
    content:
      "Empowers small businesses to visualize, analyze, and understand their data through an intuitive dashboard with Firebase authentication and real-time analytics.",
    techStack: ["react", "mui", "flask", "firebase", "py"],
    keywords: ["React", "Material UI", "Flask", "Firebase", "Python", "Data analytics"],
    link: "https://analytixnexa.netlify.app/",
  },
  {
    slug: "palettegen",
    title: "PaletteGen",
    description: "AI-powered color palette generator",
    content:
      "Generates aesthetic color palettes using Google Gemini AI and serves designers with instant creative inspiration.",
    techStack: ["next", "deno", "flask", "py", "g"],
    keywords: ["Next.js", "Deno", "Flask", "Python", "Google Gemini", "Generative AI"],
    link: "https://github.com/thanthtetaung4/PaletGen",
  },
  {
    slug: "mini-shell",
    title: "Mini Shell (Bash Clone)",
    description: "Bash-like shell written in pure C",
    content:
      "Implements core shell features such as pipes, redirections, and environment variables — entirely built from scratch in C.",
    techStack: ["C", "Linux"],
    keywords: ["C", "Linux", "System programming", "Unix shell"],
    link: "https://github.com/thanthtetaung4/mini_shell",
  },
  {
    slug: "mini-rt",
    title: "Mini RT (Ray Tracing Engine)",
    description: "Mini ray-tracing engine implemented in C",
    content:
      "Renders realistic 3D scenes using ray tracing with lighting, shadows, and reflections via MiniLibX.",
    techStack: ["C"],
    keywords: ["C", "Ray tracing", "Computer graphics", "MiniLibX"],
    link: "https://github.com/thanthtetaung4/PaletGen",
  },
];

export type Experience = {
  title: string;
  description: string;
  duration: string;
  lists: string[];
  content?: string;
  /** ISO dates for structured data; omitted when the role is open-ended. */
  startDate?: string;
  endDate?: string;
  organizationUrl?: string;
};

export const experiences: Experience[] = [
  {
    title: "AI Software Engineer Intern",
    description: "Visier Inc.",
    duration: "Jan - 2026 => Jun - 2026",
    lists: [
      "Shipped AI features for Vee, an LLM-powered HR assistant serving 2M+ users and 65,000+ organisations",
      "Delivered 2 chart visualisations and led an LLM upgrade, extending the life of product by 1.5 year",
      "Improved a 100+ scenario evaluation framework with Pytest and LangSmith for regression prevention and model governance",
      "Resolved production issues using Splunk and LangSmith to improve reliability",
    ],
    content:
      "Focused on enhancing Visier’s AI capabilities for workforce analytics.",
    startDate: "2026-01",
    endDate: "2026-06",
    organizationUrl: "https://www.visier.com/",
  },
  {
    title: "Founder & Developer",
    description: "Goodev",
    duration: "Present",
    lists: ["Consult", "Design", "Develop", "Deliver"],
    content: "Based on the client needs",
  },
  {
    title: "Tech Lead",
    description: "SCS@PSBA",
    duration: "Dec - 2023 => Dec - 2024",
    lists: [
      "Led tech team",
      "Curated workshops & focus groups",
      "Developed SCS@PSBA the website",
      "Handled administrative tasks",
    ],
    startDate: "2023-12",
    endDate: "2024-12",
  },
];

export type Credential = {
  title: string;
  organisation: string;
  date: string;
  content: string;
  /** ISO date for structured data. */
  isoDate: string;
  organisationUrl?: string;
  type: "degree" | "certificate" | "award";
};

export const credentials: Credential[] = [
  {
    title: "Bachelor of Science with Honours in Computing Science",
    organisation: "Coventry University",
    date: "Mar - 2024",
    content:
      "Specialized in computer science with strong foundation in software development and problem-solving",
    isoDate: "2024-03",
    organisationUrl: "https://www.coventry.ac.uk/",
    type: "degree",
  },
  {
    title: "CS50x",
    organisation: "Harvard",
    date: "Dec - 2024",
    content:
      "Completed Harvard's CS50, gaining hands-on experience in C, Python, algorithms, data structures, and problem-solving.",
    isoDate: "2024-12",
    organisationUrl: "https://www.harvard.edu/",
    type: "certificate",
  },
  {
    title: "Hacking Spatial Computing | 3rd Place",
    organisation: "NUS",
    date: "Aug - 2025",
    content:
      "Built an immersive application with RealityKit, SwiftUI, and spatial computing, earning 3rd place at the first Apple Vision Pro Hackathon (NUS).",
    isoDate: "2025-08",
    organisationUrl: "https://www.nus.edu.sg/",
    type: "award",
  },
];

export const skills: string[] = [
  "NextJS",
  "ReactJS",
  "Docker",
  "TailwindCSS",
  "NodeJS",
  "Flask",
  "C++",
  "C",
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "GitHub",
  "VS Code",
  "Git",
  "Shell",
  "Linux",
];

/** Topics used for the Person `knowsAbout` field — broader than the icon grid. */
export const expertise: string[] = [
  "Artificial Intelligence Engineering",
  "Agentic AI systems",
  "Retrieval-Augmented Generation (RAG)",
  "Large Language Model evaluation",
  "Prompt engineering",
  "LangChain",
  "LangGraph",
  "Full-stack web development",
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "System programming in C",
  "Linux and Unix systems",
  "Backend development",
  "Developer tooling",
];

export const education = [
  {
    name: "Coventry University",
    url: "https://www.coventry.ac.uk/",
    credential: "BSc (Hons) First Class, Computing Science",
    year: "2024",
  },
  {
    name: "42 Singapore",
    url: "https://42singapore.sg/",
    credential: "RNCP Level 6",
    year: "2026",
  },
];
