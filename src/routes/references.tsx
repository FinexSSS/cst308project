import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { references } from "@/content/writings";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References — Shared Traditions in Bangladesh" },
      {
        name: "description",
        content:
          "APA reference list for the CST308 individual project on syncretic and folk religious practices in Bangladesh.",
      },
      { property: "og:title", content: "References" },
      {
        property: "og:description",
        content: "APA reference list for this CST308 individual project.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReferencesPage,
});

function ReferencesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader compact />
      <main id="main" className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <article className="py-12 sm:py-16">
          <h1 className="font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.15]">
            References
          </h1>

          <ul className="reading-column mt-10 space-y-6">
            {references.map((entry) => (
              <li
                key={entry.text}
                className="-indent-6 break-words pl-6 text-[1.0625rem] leading-relaxed text-foreground/90"
              >

                {entry.text}
                {entry.link ? (
                  <>
                    {" "}
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noreferrer"
                      className="quiet-link break-all text-primary"
                    >
                      {entry.link}
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
