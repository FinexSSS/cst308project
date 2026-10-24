import { createFileRoute, Link } from "@tanstack/react-router";
import { publication } from "@/content/writings";
import frontAsset from "@/assets/front.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shared Traditions in Bangladesh — CST308 Individual Project" },
      {
        name: "description",
        content:
          "An academic project by Shahriar Akram on shared festivals, Baul thought, shrine traditions and cultural belonging in Bangladesh.",
      },
      { property: "og:title", content: "Shared Traditions in Bangladesh" },
      {
        property: "og:description",
        content:
          "Four articles on festivals, Baul thought, shrine traditions and cultural belonging in Bangladesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main
      id="main"
      className="relative flex min-h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url(${frontAsset.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-foreground/20" aria-hidden="true" />

      <div className="relative z-10 flex max-w-[920px] flex-col items-center px-6 text-center text-background">
        <h1 className="font-serif text-[2.75rem] leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Shared <em className="italic">Traditions</em>
          <br />
          in Bangladesh
        </h1>

        <p className="mt-5 font-sans text-sm font-medium uppercase tracking-[0.18em] text-background/90 sm:text-base sm:tracking-[0.22em]">
          People. Culture. Belonging. Beyond Differences.
        </p>

        <Link
          to="/articles"
          className="mt-10 inline-flex items-center gap-3 border border-background/80 px-6 py-3.5 font-sans text-[0.72rem] font-medium uppercase tracking-[0.22em] text-background transition-colors hover:bg-background hover:text-foreground sm:px-8 sm:py-4 sm:text-[0.75rem] sm:tracking-[0.25em]"
        >
          Explore the articles
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Screen-reader-only project metadata */}
      <p className="sr-only">
        {publication.byline}
      </p>
    </main>
  );
}
