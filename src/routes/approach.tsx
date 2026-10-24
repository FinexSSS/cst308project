import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { approach } from "@/content/writings";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Research approach — Shared Traditions in Bangladesh" },
      {
        name: "description",
        content:
          "The research question, the interview and scholarly readings used, how the themes were developed, the limits of the study and research ethics.",
      },
      { property: "og:title", content: "Research approach" },
      {
        property: "og:description",
        content:
          "How this qualitative project was designed, read and limited: one interview, an annotated bibliography and thematic analysis.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader compact />
      <main id="main" className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <article className="py-12 sm:py-16">
          <h1 className="font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.15]">
            {approach.heading}
          </h1>

          <div className="prose-editorial mt-10">
            {approach.sections.map((section, si) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="reading-column font-display text-[1.375rem] font-semibold leading-snug sm:text-[1.5rem]">
                  <span className="label-xs mr-3 align-middle text-primary">{si + 1}</span>
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
