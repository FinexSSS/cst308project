import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { about, publication, reflection } from "@/content/writings";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About this project — Shared Traditions in Bangladesh" },
      {
        name: "description",
        content:
          "About the researcher, the interview participant, and the reflection analysis behind this CST308 individual project.",
      },
      { property: "og:title", content: "About this project" },
      {
        property: "og:description",
        content:
          "About the researcher and the interview participant, with the project's reflection analysis.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader compact />
      <main id="main" className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <article className="py-12 sm:py-16">
          <h1 className="font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.15]">
            {about.heading}
          </h1>

          <dl className="mt-8 grid gap-x-8 gap-y-3 border-y border-rule py-6 sm:grid-cols-2">
            <div>
              <dt className="label-xs text-muted-foreground">Course</dt>
              <dd className="mt-1 text-[1.0625rem] leading-snug">{publication.course}</dd>
            </div>
            <div>
              <dt className="label-xs text-muted-foreground">Submitted to</dt>
              <dd className="mt-1 text-[1.0625rem] leading-snug">{publication.submittedTo}</dd>
            </div>
            <div>
              <dt className="label-xs text-muted-foreground">Submitted by</dt>
              <dd className="mt-1 text-[1.0625rem] leading-snug">{publication.byline}</dd>
            </div>
            <div>
              <dt className="label-xs text-muted-foreground">Date</dt>
              <dd className="mt-1 text-[1.0625rem] leading-snug">{publication.date}</dd>
            </div>
          </dl>

          <div className="prose-editorial mt-10">
            {about.sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="reading-column font-display text-[1.375rem] font-semibold leading-snug sm:text-[1.5rem]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <section className="prose-editorial mt-16 border-t border-rule-strong pt-10">
            <h2 className="reading-column font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight">
              {reflection.heading}
            </h2>
            {reflection.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <h3 className="reading-column mt-10 font-display text-[1.25rem] font-semibold leading-snug">
              {reflection.takeawayHeading}
            </h3>
            <p>{reflection.takeaway}</p>
          </section>

          <p className="mt-12">
            <Link to="/references" className="label-xs quiet-link text-primary">
              See the references <span aria-hidden="true">→</span>
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
