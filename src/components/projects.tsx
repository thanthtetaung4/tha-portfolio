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

function ProjectCards() {
	const projects = [
	{
		title: "AnalytixNexa",
		description:
		"Open-source data analysis web app that empowers small businesses to harness the power of data—for free.",
		content:
		"Empowers small businesses to visualize, analyze, and understand their data through an intuitive dashboard with Firebase authentication and real-time analytics.",
		techStack: [<SiReact key={"react"}/>, <SiMui key={"mui"}/>, <SiFlask key={"flask"}/>, <SiFirebase key={"firebase"}/>, <SiPython key={"py"}/>],
	},
	{
		title: "PaletteGen",
		description:
		"AI-powered color palette generator that takes the guesswork out of design.",
		content:
		"Generates aesthetic color palettes using Google Gemini AI and serves designers with instant creative inspiration.",
		techStack: [<SiNextdotjs key={"next"}/>, <SiDeno key={"deno"}/>, <SiFlask key={"flask"}/>, <SiPython key={"py"}/>, <SiGoogle key={"g"}/>],
	},
	{
		title: "Mini Shell (Bash Clone)",
		description:
		"Bash-like shell written in pure C with enhancements, including proper handling of SIGPIPE.",
		content:
		"Implements core shell features such as pipes, redirections, and environment variables — entirely built from scratch in C.",
		techStack: [<SiC key={"C"}/>, <SiLinux key={"Linux"}/>],
	},
	{
		title: "Mini RT (Ray Tracing Engine)",
		description:
		"Mini ray-tracing engine implemented in C using the MiniLibX library.",
		content:
		"Renders realistic 3D scenes using ray tracing with lighting, shadows, and reflections via MiniLibX.",
		techStack: [<SiC key={"C"}/>, <SiOrg key={"Xorg"}/>],
	},
	];

	return (
		<div>
			{
				projects.map(({title, description, content, techStack}, index) => (
					<>
						{/* add magic cards */}
					</>
				))
			}
		</div>
	)
}

export function Projects ()  {




	return (
		<section className="mt-5" id="projects">
			<h2 className="text-2xl font-bold text-black dark:text-white">Projects</h2>
			<ProjectCards/>
			<div className="h-52"></div>
		</section>
	)
}
