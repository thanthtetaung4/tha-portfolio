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
  SiOrg,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BorderBeam } from "@/components/ui/border-beam"

function ProjectCards() {
	const projects = [
	{
		title: "AnalytixNexa",
		description:
		"Open-source data analysis web app",
		content:
		"Empowers small businesses to visualize, analyze, and understand their data through an intuitive dashboard with Firebase authentication and real-time analytics.",
		techStack: [<SiReact key={"react"} fontSize={24}/>, <SiMui key={"mui"} fontSize={24}/>, <SiFlask key={"flask"} fontSize={24}/>, <SiFirebase key={"firebase"} fontSize={24}/>, <SiPython key={"py"} fontSize={24}/>],
	},
	{
		title: "PaletteGen",
		description:
		"AI-powered color palette generator",
		content:
		"Generates aesthetic color palettes using Google Gemini AI and serves designers with instant creative inspiration.",
		techStack: [<SiNextdotjs key={"next"} fontSize={24}/>, <SiDeno key={"deno"} fontSize={24}/>, <SiFlask key={"flask"} fontSize={24}/>, <SiPython key={"py"} fontSize={24}/>, <SiGoogle key={"g"} fontSize={24}/>],
	},
	{
		title: "Mini Shell (Bash Clone)",
		description:
		"Bash-like shell written in pure C",
		content:
		"Implements core shell features such as pipes, redirections, and environment variables — entirely built from scratch in C.",
		techStack: [<SiC key={"C"} fontSize={24}/>, <SiLinux key={"Linux"} fontSize={24}/>],
	},
	{
		title: "Mini RT (Ray Tracing Engine)",
		description:
		"Mini ray-tracing engine implemented in C",
		content:
		"Renders realistic 3D scenes using ray tracing with lighting, shadows, and reflections via MiniLibX.",
		techStack: [<SiC key={"C"} fontSize={24}/>, <SiOrg key={"Xorg"} fontSize={24}/>],
	},
	];

	return (
		<div className="mt-5">
			<div className="grid gap-6">
			{
				projects.map(({title, description, content, techStack}, index) => (
					<Card key={index} className="relative overflow-hidden">
						<CardHeader>
							<CardTitle>{title}</CardTitle>
							<CardDescription className="flex justify-between">
								<div>{description}</div>
							</CardDescription>
						</CardHeader>
						<CardContent>
							{content}
						</CardContent>
						<CardFooter>
							<div className="flex justify-between overflow-scroll" style={{ width: `${24 * (techStack.length * 1.5)}px` }}>
								{techStack}
							</div>
						</CardFooter>
						 <BorderBeam
						duration={4}
						size={400}
						borderWidth={2}
						className="from-transparent via-blue-500 to-transparent"
						/>
						<BorderBeam
						duration={4}
						delay={3}
						size={400}
						borderWidth={2}
						className="from-transparent via-blue-500 to-transparent"
						/>
					</Card>
				))
			}
			</div>
		</div>
	)
}

export function Projects ()  {

	return (
		<section className="mt-5" id="projects">
			<h2 className="text-2xl font-bold text-black dark:text-white">Projects</h2>
			<ProjectCards/>
		</section>
	)
}
