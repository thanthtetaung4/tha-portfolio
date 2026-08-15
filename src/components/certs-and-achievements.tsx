"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from "@/components/ui/shine-border"
import { credentials } from "@/lib/portfolio-data"

export function CertCards() {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			{credentials.map(({title, organisation, date, content, isoDate}, index) => (
				<Card key={index} className="relative overflow-hidden">
					<ShineBorder shineColor="#A684FF" />
					<CardHeader>
						<CardTitle>
							<h3>{title}</h3>
						</CardTitle>
						<CardDescription className="flex justify-between">
							<div>{organisation}</div>
							<time dateTime={isoDate}>{date}</time>
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
		<section id="certs" aria-labelledby="certs-heading">
			<h2 id="certs-heading" className="text-2xl font-bold text-black dark:text-white mt-4">Certs &amp; Achievements</h2>
			<div className="mt-5">
				<CertCards/>
			</div>
		</section>
	)
}
