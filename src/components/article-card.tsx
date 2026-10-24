import { Link } from "@tanstack/react-router";
import type { Article } from "@/content/writings";

/** A contents-table row: number, title, preview, small plate, reading time. */
export function ArticleCard({ article }: { article: Article }) {
  const number = String(article.order).padStart(2, "0");

  return (
    <li className="border-b border-rule">
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 py-8 sm:grid-cols-[3rem_1fr_16rem] sm:gap-x-10"
      >
        <span className="label-xs pt-1 text-primary">{number}</span>

        <div>
          <h3 className="font-display text-[1.375rem] font-semibold leading-snug transition-colors group-hover:text-primary sm:text-[1.625rem]">
            {article.title}
          </h3>
          <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-relaxed text-foreground/75">
            {article.preview}
          </p>
          <span className="label-xs mt-5 inline-block border-b border-rule pb-1 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
            Read article <span aria-hidden="true">→</span>
          </span>
          <p className="apparatus mt-3 sm:hidden">{article.readingMinutes} min read</p>
        </div>

        <div className="col-span-2 hidden sm:col-span-1 sm:block">
          <img
            src={article.image.url}
            alt={article.image.alt}
            width={1536}
            height={1024}
            loading="lazy"
            className="aspect-[3/2] w-full border border-rule object-cover transition-opacity group-hover:opacity-90"
          />
          <p className="apparatus mt-2">{article.readingMinutes} min read</p>
        </div>

      </Link>
    </li>
  );
}
