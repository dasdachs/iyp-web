import { Metadata } from "next";
import { Heading } from "@iyp/components/heading";
import { PostContent } from "@iyp/components/PostContent";
import { Suggestions } from "@iyp/components/Suggestion";

type MetadataProps = {
  params: { slug: string | string[] };
};

export function generateMetadata({ params }: MetadataProps): Metadata {
  const { slug } = params;
  const title = Array.isArray(slug) ? slug.join(" | ") : slug;

  return {
    title,
  };
}
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // Demo use
  const heroTitle = Array.isArray(params.slug) ? slug[slug.length - 1] : slug;

  return (
    <article className="bg-beigeLight">
      <section className="mb-16">
        <Heading.MainContainer>
          <Heading.HeroImage heroUrl="/hero-image-fallback.png" />
          <Heading.ContentSection
            title={composeDemoTitle(heroTitle)}
            navigationBreadCrumbs={params.slug}
            readingTime={3}
            author="Kasper"
          />
        </Heading.MainContainer>
      </section>
      <hr className="mx-8 border-t-2 border-beigeDark" />
      <PostContent />
      <hr className="mx-8 border-t-2 border-beigeDark" />
      <Suggestions suggestions={venues} />
    </article>
  );
}

function composeDemoTitle(title: string): string {
  return title
    .toLowerCase()
    .replaceAll("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const venues = [
  {
    name: "Kościuszko Mound",
    image: "/content-demo-image.png",
  },
  {
    name: "Chapel St. Margaret",
    image: "/content-demo-image.png",
  },
  {
    name: "Church of the Holy Saviour",
    image: "/content-demo-image.png",
  },
];
