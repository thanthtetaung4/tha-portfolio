import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { CertsAndAchievements } from "@/components/certs-and-achievements";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
  <div className="w-full h-screen p-5 text-white ">
		<Hero/>
    <CertsAndAchievements/>
    <Skills/>
    <Projects />
    </div>
  );
}
