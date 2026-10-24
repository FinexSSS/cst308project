import { Link } from "@tanstack/react-router";
import { publication } from "@/content/writings";

const links = [
  { to: "/articles", label: "Articles" },
  { to: "/approach", label: "Research approach" },
  { to: "/about", label: "About" },
  { to: "/references", label: "References" },
] as const;

function BylineLink() {
  const [name, rest] = publication.byline.split(" | ", 2);
  return (
    <span className="apparatus ml-auto">
      <a
        href="https://www.facebook.com/shahariar.akram.7"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 transition-colors hover:text-primary"
      >
        {name}
      </a>
      {rest && ` | ${rest}`}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule-strong">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-baseline gap-x-8 gap-y-3 px-5 py-8 sm:px-8 lg:px-10">
        <span className="font-display text-base font-semibold">
          <Link to="/" className="transition-colors hover:text-primary">
            {publication.name}
          </Link>
        </span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="label-xs py-1 text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <BylineLink />
      </div>
    </footer>
  );
}
