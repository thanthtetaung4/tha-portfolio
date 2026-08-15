import { absoluteUrl, sameAs, siteConfig, siteUrl } from "@/lib/site";
import {
  credentials,
  education,
  experiences,
  expertise,
  projects,
} from "@/lib/portfolio-data";

const PERSON_ID = `${siteUrl}/#person`;
const WEBSITE_ID = `${siteUrl}/#website`;
const PAGE_ID = `${siteUrl}/#webpage`;

/**
 * One `@graph` covering the whole site: a ProfilePage whose main entity is the
 * Person, plus the WebSite node. Keeping every node under a stable `@id` lets
 * Google reconcile them into a single entity instead of three loose blobs.
 */
function buildGraph() {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    givenName: "Thant Htet",
    familyName: "Aung",
    alternateName: "Thant",
    url: siteUrl,
    mainEntityOfPage: { "@id": PAGE_ID },
    image: absoluteUrl("/opengraph-image"),
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    // Phone deliberately omitted: it adds nothing for search and is the easiest
    // field for scrapers to harvest. The WhatsApp link still covers humans.
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    knowsAbout: expertise,
    sameAs,
    alumniOf: education.map((school) => ({
      "@type": "CollegeOrUniversity",
      name: school.name,
      url: school.url,
    })),
    worksFor: experiences
      .filter((experience) => experience.duration === "Present")
      .map((experience) => ({
        "@type": "Organization",
        name: experience.description,
      })),
    hasOccupation: experiences.map((experience) => ({
      "@type": "Occupation",
      name: experience.title,
      occupationLocation: {
        "@type": "City",
        name: siteConfig.location.city,
      },
      description: experience.lists.join(". "),
    })),
    hasCredential: credentials.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      name: credential.title,
      description: credential.content,
      dateCreated: credential.isoDate,
      recognizedBy: {
        "@type": "Organization",
        name: credential.organisation,
        ...(credential.organisationUrl ? { url: credential.organisationUrl } : {}),
      },
    })),
    award: credentials
      .filter((credential) => credential.type === "award")
      .map((credential) => credential.title),
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: `${siteConfig.name} — Portfolio`,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    copyrightHolder: { "@id": PERSON_ID },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": PAGE_ID,
    url: siteUrl,
    name: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: { "@id": `${siteUrl}/#primaryimage` },
    hasPart: {
      "@type": "ItemList",
      name: `Projects by ${siteConfig.name}`,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          "@id": `${siteUrl}/#project-${project.slug}`,
          name: project.title,
          description: `${project.description} ${project.content}`.trim(),
          url: project.link,
          codeRepository: project.link,
          keywords: project.keywords.join(", "),
          programmingLanguage: project.keywords,
          author: { "@id": PERSON_ID },
        },
      })),
    },
  };

  const primaryImage = {
    "@type": "ImageObject",
    "@id": `${siteUrl}/#primaryimage`,
    url: absoluteUrl("/opengraph-image"),
    contentUrl: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    caption: `${siteConfig.name} — ${siteConfig.headline}`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [profilePage, primaryImage, person, website],
  };
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Content is authored locally, not user input; `<` is still escaped so a
      // stray sequence can never break out of the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildGraph()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
