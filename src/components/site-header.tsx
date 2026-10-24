import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { publication } from "@/content/writings";

const nav = [
  { to: "/articles", label: "Articles" },
  { to: "/approach", label: "Research approach" },
  { to: "/about", label: "About" },
  { to: "/references", label: "References" },
] as const;

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);

  const Title = compact ? "p" : "h1";

  return (
    <header className="border-b border-rule-strong bg-background">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-start justify-between gap-4 pb-4 pt-6">
          <div>
            <Title className="font-display text-[1.5rem] font-semibold leading-tight sm:text-[1.75rem]">
              <Link to="/" className="transition-colors hover:text-primary">
                {publication.name}
              </Link>
            </Title>
            <p className="label-xs mt-2 text-muted-foreground">{publication.byline}</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 shrink-0 p-3 text-foreground sm:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <nav
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} flex-col border-t border-rule pb-2 sm:flex sm:flex-row sm:items-center sm:gap-x-8 sm:border-t sm:pb-0`}
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="label-xs min-h-11 border-b border-rule py-3 text-muted-foreground transition-colors hover:text-primary sm:min-h-0 sm:border-0 sm:py-3"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
