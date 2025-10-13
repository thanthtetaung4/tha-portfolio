'use client'

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";

export function Contact() {
const [hoverLinkedin, setHoverLinkedin] = useState(false);
const [hoverDiscord, setHoverDiscord] = useState(false);
const [hoverEmail, setHoverEmail] = useState(false);
const [hoverWhatsapp, setHoverWhatsapp] = useState(false);

return (
	<section className="mt-4" id="contact">
		<h2 className="text-2xl font-bold text-black dark:text-white mt-4">Reach Out To Me</h2>
		<div className="flex justify-between px-6 mt-4">
			<Link href={"https://www.linkedin.com/in/thant-htet-aung/"} target="blank"
				onMouseEnter={() => setHoverLinkedin(true)}
				onMouseLeave={() => setHoverLinkedin(false)}>
					<FaLinkedin fontSize={32} color={hoverLinkedin ? "#6A5ACD" : undefined}/>
			</Link>
			<Link href={"https://discordapp.com/users/908020600751140914"} target="blank"
				onMouseEnter={() => setHoverDiscord(true)}
				onMouseLeave={() => setHoverDiscord(false)}>
				<FaDiscord fontSize={32} color={hoverDiscord ? "#6A5ACD" : undefined}/>
			</Link>
			<Link href={"mailto:thanthtetaung3502@gmail.com"} target="blank"
				onMouseEnter={() => setHoverEmail(true)}
				onMouseLeave={() => setHoverEmail(false)}
			>
				<MdEmail fontSize={32} color={hoverEmail ? "#6A5ACD" : undefined}/>
			</Link>
			<Link href={"https://wa.me/+6580601305"} target="blank"
				onMouseEnter={() => setHoverWhatsapp(true)}
				onMouseLeave={() => setHoverWhatsapp(false)}
			>
				<IoLogoWhatsapp fontSize={32} color={hoverWhatsapp ? "#6A5ACD" : undefined}/>
			</Link>
		</div>
		<div className="h-32"></div>
	</section>
)
}
