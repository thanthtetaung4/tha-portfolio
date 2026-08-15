import { about } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site";

/**
 * Server component on purpose: this is the page's main body copy, so it has to
 * be in the initial HTML rather than arriving after hydration.
 */
export function About() {
  return (
    <section className="mt-5" id="about" aria-labelledby="about-heading">
      <h2
        id="about-heading"
        className="text-2xl font-bold text-black dark:text-white"
      >
        About {siteConfig.name}
      </h2>

      <div className="mt-4 max-w-3xl space-y-4 text-base md:text-lg">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-black dark:text-white">
        Currently interested in
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {about.interests.map((interest) => (
          <li
            key={interest}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm"
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}
