"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from "@/components/ui/shine-border"

export function CertCards() {
	const certs = [
		{
			title: "Bachelor of Science with Honours in Computing Science",
			organisation: "Coventry University",
			date: "Mar - 2024",
			content: "Specialized in computer science with strong foundation in software development and problem-solving"
		},
		{
			title: "CS50x",
			organisation: "Harvard",
			date: "Dec - 2024",
			content: "Completed Harvard's CS50, gaining hands-on experience in C, Python, algorithms, data structures, and problem-solving."
		},
		{
			title: "Hacking Spatial Computing | 3rd Place",
			organisation: "NUS",
			date: "Aug - 2025",
			content: "Built an immersive application with RealityKit, SwiftUI, and spatial computing, earning 3rd place at the first Apple Vision Pro Hackathon (NUS)."
		}
	]

	return (
		<div className="grid gap-4">
			{certs.map(({title, organisation, date, content}, index) => (
				<Card key={index} className="relative overflow-hidden">
					<ShineBorder shineColor="#6A5ACD" />
					<CardHeader>
						<CardTitle>{title}</CardTitle>
						<CardDescription className="flex justify-between">
							<div>{organisation}</div>
							<div>{date}</div>
						</CardDescription>
					</CardHeader>
					<CardContent>
						{content}
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export function CertsAndAchievements() {
	return(
		<section id="certs">
			<h2 className="text-2xl font-bold text-black dark:text-white mt-4">Certs & Achievements</h2>
			<div className="mt-5">
				<CertCards/>
			</div>
		</section>
	)
}
