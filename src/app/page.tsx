import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { CertsAndAchievements } from "@/components/certs-and-achievements";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact"

export default function Home() {
  return (
  <div className="w-full h-screen p-5 text-white ">
		<Hero/>
    <About/>
    <CertsAndAchievements/>
    <Skills/>
    <Projects/>
    <Contact />
    </div>
  );
}
