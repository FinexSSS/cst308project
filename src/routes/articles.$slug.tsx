import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getArticle, getNeighbours } from "@/content/writings";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, ...getNeighbours(params.slug) };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.article.title ?? "Article";
    const description =
      loaderData?.article.preview ?? "An article from Shared Traditions in Bangladesh.";
    return {
      meta: [
        { title: `${title} — Shared Traditions in Bangladesh` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article, previous, next } = Route.useLoaderData();
  const number = String(article.order).padStart(2, "0");
  const headings = article.sections
    .map((section, si) => ({
      id: `section-${si + 1}`,
      number: `${article.order}.${si + 1}`,
      heading: section.heading,
    }))
    .filter((item): item is { id: string; number: string; heading: string } =>
      Boolean(item.heading),
    );


  return (
    <div className="min-h-screen">
      <SiteHeader compact />
      <main id="main" className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="label-xs pt-6 text-muted-foreground">
          <Link to="/" className="quiet-link hover:text-primary">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <Link to="/articles" className="quiet-link hover:text-primary">
            Articles
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-foreground">Article {number}</span>
        </nav>

        <article className="py-8">
          <header className="border-b border-rule-strong pb-8">
            <p className="label-xs text-primary">
              Article {number} · {article.readingMinutes} min read
            </p>
            <h1 className="reading-column mt-4 font-display text-[clamp(1.875rem,4vw,2.875rem)] font-semibold leading-[1.14]">
              {article.title}
            </h1>
            <p className="reading-column mt-5 font-display text-lg italic leading-relaxed text-foreground/70">
              {article.preview}
            </p>
          </header>

          <figure className="mt-8">
            <img
              src={article.image.url}
              alt={article.image.alt}
              width={1536}
              height={1024}
              className="aspect-[3/2] w-full border border-rule object-cover"
            />
            <figcaption className="apparatus mt-3 max-w-[80ch]">{article.imageCaption}</figcaption>
          </figure>

          {headings.length > 1 ? (
            <nav
              aria-label="Sections in this article"
              className="reading-column mt-10 border-y border-rule py-5"
            >
              <p className="label-xs text-muted-foreground">In this article</p>
              <ol className="mt-3 space-y-2">
                {headings.map((item) => (
                  <li key={item.id} className="text-[1.0625rem] leading-snug">
                    <span className="label-xs mr-2 text-primary">{item.number}</span>
                    <a href={`#${item.id}`} className="quiet-link hover:text-primary">
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="prose-editorial mt-12">
            {article.opening.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-[1.25rem] leading-[1.7]" : undefined}>
                {paragraph}
              </p>
            ))}

            {article.sections.map((section, si) => (
              <section
                key={section.heading ?? section.paragraphs[0]}
                id={section.heading ? `section-${si + 1}` : undefined}
                className="mt-12 scroll-mt-8"
              >
                {section.heading ? (
                  <h2 className="reading-column font-display text-[1.375rem] font-semibold leading-snug sm:text-[1.5rem]">
                    <span className="label-xs mr-3 align-middle text-primary">
                      {article.order}.{si + 1}
                    </span>
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <nav
          aria-label="Article navigation"
          className="grid gap-6 border-t border-rule-strong py-8 sm:grid-cols-3 sm:gap-8"
        >
          <div>
            {previous ? (
              <Link
                to="/articles/$slug"
                params={{ slug: previous.slug }}
                className="quiet-link group block text-primary"
              >
                <span className="label-xs text-muted-foreground">← Previous</span>
                <span className="mt-2 block font-display text-[1.0625rem] leading-snug">
                  {previous.title}
                </span>
              </Link>
            ) : null}
          </div>

          <div className="sm:text-center">
            <Link to="/articles" className="label-xs quiet-link inline-block py-1 text-primary">
              Back to all articles
            </Link>
          </div>

          <div className="sm:text-right">
            {next ? (
              <Link
                to="/articles/$slug"
                params={{ slug: next.slug }}
                className="quiet-link block text-primary"
              >
                <span className="label-xs text-muted-foreground">Next →</span>
                <span className="mt-2 block font-display text-[1.0625rem] leading-snug">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </div>
        </nav>
      </main>

      <SiteFooter />
    </div>
  );
}
