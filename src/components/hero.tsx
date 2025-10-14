"use client"

import { useTheme } from "next-themes"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WordRotate } from "@/components/ui/word-rotate"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ShinyButton } from "@/components/ui/shiny-button"
import { MagicCard } from "@/components/ui/magic-card"
import Link from "next/link"

export function JobCard() {
	const { theme } = useTheme()

	const experiences = [
							{
								title: "Founder & Developer",
								description: "Goodev",
								duration: "Present",
								lists: ["Consult",
											"Designe",
											"Develope",
											"Delivere"
										],
								content:"Based on the client needs"
							},
							{
								title: "Tech Lead",
								description: "SCS@PSBA",
								duration: "Dec - 2023 => Dec - 2024",
								lists: ["Led tech team",
											"Curated workshops & focus groups",
											"Developed SCS@PSBA the website",
											"Handled administrative tasks"
										],
							}
						]

	return (
		<section id="exp">
			<h2 className="text-2xl font-bold text-black dark:text-white">Experiences</h2>
			<div className="grid gap-4 mt-4">
				{
					experiences.map(({title, description, duration, lists, content}, index) => (
						<Card key={index} className="w-full max-w-sm border-none p-0 shadow-none">
							<MagicCard
							gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
							className="p-0"
							>
								<CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
									<CardTitle>{title}</CardTitle>
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
									<div className="px-2.5">
										{content && content}
										</div>
								</CardContent>
							</MagicCard>
						</Card>
					))
				}
			</div>
		</section>
	)
}

export function Hero () {
	return (
		<section id="hero">
			<div className="grid gap-2">
				<p className="text-3xl font-bold text-black dark:text-white inline-block md:leading-[-0.5]">Hi 👋, I am </p>
				<div className="">
					<WordRotate
						className="text-4xl font-bold text-black dark:text-white inline-block"
						words={["Thant", "A Developer"]}/>
				</div>
				<p className="mt-5 text-lg">Full-stack software developer skilled in system programming and full-stack development,
					with experience leading projects, freelancing, and winning hackathons.</p>

			</div>
			<div className="mt-5 flex justify-around">
					<div className="w-1/2 flex justify-around items-center">
						<Link href="https://github.com/thanthtetaung4" target="blank">
							<FaGithub className="text-2xl"/>
						</Link>
						<Link href="https://www.linkedin.com/in/thant-htet-aung/" target="blank">
							<FaLinkedin className="text-2xl"/>
						</Link>
					</div>
					<ShinyButton link="./resume.pdf">
						Get My Resume
					</ShinyButton>
			</div>
			<div className="mt-5">
				<JobCard/>
			</div>
		</section>
	)
}
