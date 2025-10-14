'use client'

import { useState } from "react";
import { ShinyButton } from "./ui/shiny-button";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "next-themes";
import { Card } from "./ui/card";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaGitAlt } from "react-icons/fa6";
import { Button } from "./ui/button";

const CIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48}
		fill={"currentColor"} viewBox="0 0 24 24" {...props}>
		{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
		<path d="m19.12 6.42-7.35-4.24a1.74 1.74 0 0 0-1.54 0L2.88 6.42a1.74 1.74 0 0 0-.77 1.34v8.48a1.56 1.56 0 0 0 .23.76 1.7 1.7 0 0 0 .54.58l7.35 4.24a1.74 1.74 0 0 0 1.54 0l7.35-4.24a1.7 1.7 0 0 0 .54-.58 1.56 1.56 0 0 0 .23-.76V7.76a1.56 1.56 0 0 0-.23-.76 1.7 1.7 0 0 0-.54-.58M11 15a3 3 0 0 0 2.57-1.48L16.13 15a5.93 5.93 0 1 1 0-5.93l-2.56 1.48A3 3 0 1 0 11 15"></path>
	</svg>
);

export function SkillsSM () {
	const [page, setPage] = useState(1);

	const skills = [
		{
			name: "NextJS",
			icon: <RiNextjsFill className="text-5xl"/>,

		},
		{
			name: "ReactJS",
			icon: <FaReact className="text-5xl"/>,

		},
		{
			name: "Docker",
			icon: <FaDocker className="text-5xl"/>,

		},
		{
			name: "TailwindCSS",
			icon: <RiTailwindCssFill className="text-5xl"/>,

		},
		{
			name: "NodeJS",
			icon: <FaNodeJs className="text-5xl"/>,

		},
		{
			name: "Flask",
			icon: <SiFlask className="text-5xl"/>,

		},
		{
			name: "C++",
			icon: <Image alt="cpp" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width={48} height={48} className="grayscale"/>

		},
		{
			name: "C",
			icon: <CIcon/>,

		},
		{
			name: "JavaScript",
			icon: <FaJs className="text-5xl"/>

		},
		{
			name: "Python",
			icon: <FaPython className="text-5xl"/>,

		},
		{
			name: "HTML",
			icon: <FaHtml5 className="text-5xl"/>

		},
		{
			name: "CSS",
			icon: <FaCss3 className="text-5xl"/>,

		},
		{
			name: "GitHub",
			icon: <BsGithub className="text-5xl"/>

		},
		{
			name: "VS Code",
			icon: <VscVscode className="text-5xl"/>,
		},
		{
			name: "Git",
			icon: <FaGitAlt className="text-5xl"/>
		},
		{
			name: "Shell",
			icon: <SiGnubash className="text-5xl"/>,
		},
		{
			name: "Linux",
			icon: <FaLinux className="text-5xl"/>,
		},
	];

	const itemsPerPage = 6;
	const totalPages = Math.ceil(skills.length / itemsPerPage);

	const paginatedSkills = skills.slice(
		(itemsPerPage * (page - 1)),
		(itemsPerPage * page)
	);

	return (
	<div className="md:hidden mt-5 flex flex-col items-center justify-center w-full">
		<div className="w-full">
			<div className="w-full">
				<div className="grid grid-cols-2 gap-2 overflow-hidden">
						{paginatedSkills.map(({ name, icon }, i) => (
							<motion.div
								key={name}
								initial={{ opacity: 0, x: page > 1 ? 40 : -40 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: page > 1 ? -40 : 40 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
							>
								<Card className="border-none p-0 shadow-none">
									<MagicCard className="p-0">
										<div className="flex items-center gap-3 w-full p-3">
											{icon}
											<span className="font-bold text-xl">{name}</span>
										</div>
									</MagicCard>
								</Card>
							</motion.div>
						))}
				</div>
			</div>
		</div>
		{totalPages > 1 && (
			<div className="flex gap-2 mt-5">
				<Button
					disabled={page === 1}
					onClick={() => setPage(page - 1)}
					className="bg-transparent"
				>
					<FaAngleLeft className="text-white"/>
				</Button>
				<span className="self-center font-semibold">
					 {page} of {totalPages}
				</span>
				<Button
					disabled={page === totalPages}
					onClick={() => setPage(page + 1)}
					className="bg-transparent"
				>
					<FaAngleRight className="text-white"/>
				</Button>
			</div>
		)}
	</div>
)
}

export function SkillsMD () {
	const skills = [
		{
			name: "NextJS",
			icon: <RiNextjsFill className="text-5xl"/>,

		},
		{
			name: "ReactJS",
			icon: <FaReact className="text-5xl"/>,

		},
		{
			name: "Docker",
			icon: <FaDocker className="text-5xl"/>,

		},
		{
			name: "TailwindCSS",
			icon: <RiTailwindCssFill className="text-5xl"/>,

		},
		{
			name: "NodeJS",
			icon: <FaNodeJs className="text-5xl"/>,

		},
		{
			name: "Flask",
			icon: <SiFlask className="text-5xl"/>,

		},
		{
			name: "C++",
			icon: <Image alt="cpp" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width={48} height={48} className="grayscale"/>

		},
		{
			name: "C",
			icon: <CIcon/>,

		},
		{
			name: "JavaScript",
			icon: <FaJs className="text-5xl"/>

		},
		{
			name: "Python",
			icon: <FaPython className="text-5xl"/>,

		},
		{
			name: "HTML",
			icon: <FaHtml5 className="text-5xl"/>

		},
		{
			name: "CSS",
			icon: <FaCss3 className="text-5xl"/>,

		},
		{
			name: "GitHub",
			icon: <BsGithub className="text-5xl"/>

		},
		{
			name: "VS Code",
			icon: <VscVscode className="text-5xl"/>,
		},
		{
			name: "Git",
			icon: <FaGitAlt className="text-5xl"/>
		},
		{
			name: "Shell",
			icon: <SiGnubash className="text-5xl"/>,
		},
		{
			name: "Linux",
			icon: <FaLinux className="text-5xl"/>,
		},
	];

	return (<>
				<div className="hidden md:grid md:grid-cols-3 md:gap-1.5 mt-4">
					{
					skills.map(({name, icon}, index) => (
						<Card className="border-none p-0 shadow-none" key={index}>
									<MagicCard className="p-0">
										<div className="flex items-center gap-3 w-full p-3">
											{icon}
											<span className="font-bold text-xl">{name}</span>
										</div>
									</MagicCard>
								</Card>
					))
				}
				</div>
			</>)
}

export function Skills () {
	return (<>
				<section className="mt-5" id="skills">
					<h2 className="text-2xl font-bold text-black dark:text-white">Skills</h2>
					<SkillsSM/>
					<SkillsMD/>
				</section>
	</>)
}
