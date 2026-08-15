'use client'

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

type ContactLink = {
	key: string;
	href: string;
	label: string;
	icon: (color?: string) => React.ReactNode;
	/** mailto:/wa.me links are the contact target, not an outbound citation. */
	external: boolean;
};

export function Contact() {
	const [hovered, setHovered] = useState<string | null>(null);

	const links: ContactLink[] = [
		{
			key: "linkedin",
			href: siteConfig.socials.linkedin,
			label: `Connect with ${siteConfig.name} on LinkedIn`,
			icon: (color) => <FaLinkedin fontSize={32} color={color} aria-hidden="true" />,
			external: true,
		},
		{
			key: "discord",
			href: siteConfig.socials.discord,
			label: `Message ${siteConfig.name} on Discord`,
			icon: (color) => <FaDiscord fontSize={32} color={color} aria-hidden="true" />,
			external: true,
		},
		{
			key: "email",
			href: `mailto:${siteConfig.email}`,
			label: `Email ${siteConfig.name} at ${siteConfig.email}`,
			icon: (color) => <MdEmail fontSize={32} color={color} aria-hidden="true" />,
			external: false,
		},
		{
			key: "whatsapp",
			href: siteConfig.socials.whatsapp,
			label: `Message ${siteConfig.name} on WhatsApp`,
			icon: (color) => <IoLogoWhatsapp fontSize={32} color={color} aria-hidden="true" />,
			external: true,
		},
	];

	return (
		<section className="mt-4" id="contact" aria-labelledby="contact-heading">
			<h2 id="contact-heading" className="text-2xl font-bold text-black dark:text-white mt-4">Reach Out To Me</h2>
			<p className="sr-only">
				Get in touch with {siteConfig.name}, {siteConfig.headline} based in {siteConfig.location.city},
				by email at {siteConfig.email} or on LinkedIn, Discord and WhatsApp.
			</p>
			<ul className="flex justify-between px-6 mt-4 list-none">
				{links.map(({ key, href, label, icon, external }) => (
					<li key={key}>
						<Link
							href={href}
							aria-label={label}
							title={label}
							onMouseEnter={() => setHovered(key)}
							onMouseLeave={() => setHovered(null)}
							{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
						>
							{icon(hovered === key ? "#6A5ACD" : undefined)}
						</Link>
					</li>
				))}
			</ul>
			<div className="h-32"></div>
		</section>
	)
}
