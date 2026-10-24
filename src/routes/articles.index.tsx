import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArticleCard } from "@/components/article-card";
import { articles, publication } from "@/content/writings";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Introduction and blog series — Shared Traditions in Bangladesh" },
      {
        name: "description",
        content:
          "Introduction to the project and four articles on festivals, Baul thought, shrine traditions, cultural identity and passing on a living culture.",
      },
      { property: "og:title", content: "Introduction and blog series" },
      {
        property: "og:description",
        content:
          "Four ways into shared cultural life: festivals, Baul thought and shrines, cultural identity, and passing traditions on.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <section className="border-b border-rule py-12 sm:py-16">
          <p className="label-xs text-primary">{publication.course}</p>
          <h2 className="reading-column mt-5 font-display text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-[1.15]">
            {publication.introHeading}
          </h2>
          <div className="prose-editorial mt-6">
            {publication.intro.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-[1.25rem] leading-[1.7]" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-14">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight">
            {publication.seriesHeading}
          </h2>
          <p className="reading-column mt-5 text-[1.0625rem] leading-relaxed text-foreground/80">
            {publication.seriesIntro}
          </p>

          <ol className="mt-10 border-t border-rule-strong">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
