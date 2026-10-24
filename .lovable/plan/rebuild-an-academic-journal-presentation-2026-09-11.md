# Rebuild: an academic journal presentation

A different look for the same project — closer to how a university research journal or a
scholarly online publication presents work, rather than a magazine. The writing, images,
references and academic details stay exactly as they are; only the presentation changes.

## What changes visually

- **Restrained scholarly palette.** Near-white paper ground, ink black text, one deep
  oxblood/indigo accent used only for links and small markers. Less green, less colour
  overall, thin grey rules.
- **Journal masthead instead of a magazine header.** A quiet band at the top: project
  title, then course and student identification on one modest line, then a horizontal rule
  and the menu. No large decorative title on inner pages.
- **Single reading column.** Body text in one comfortably wide column with generous line
  height, left aligned, sized for long reading. Wide margins rather than side panels.
- **Numbered structure.** Articles are presented as numbered papers (01–04) with numbered
  section headings inside, which is how academic pieces are usually read and marked.
- **Front page as a table of contents.** The supplied front picture sits at the top with the
  title and subtitle beside or beneath it, followed by the short introduction, then the four
  articles listed as a contents table (number, title, one-line preview, reading time) instead
  of picture cards. Each entry shows its picture small, to the side.
- **Article opening block.** Each article page opens with the number, title, reading time and
  a short abstract-style preview line, then the picture with its caption, then the text.
- **Footnote-style citations.** Citations stay word for word as supplied but are set smaller
  and in a slightly muted tone so they read as scholarly apparatus, not body text.
- **References page as a formal bibliography.** Hanging-indent entries, alphabetical within
  each existing group, with the links kept.
- **About page as a project statement.** Details listed as a formal record (student, ID,
  course, topic), then the statement text, then the guiding question in a plain bordered
  block rather than a filled green panel, then the themes table restyled as an academic table
  with ruled rows.
- **Typography.** A serif for headings and body reading, a plain sans for navigation, numbers,
  labels and captions. Larger body size than now.
- **Motion.** Essentially none — only gentle link and focus states. Academic submissions read
  better still.

## What stays untouched

- Every word of the four articles, previews, captions, alt text, themes, references and
  academic identification.
- The picture mapping: front picture on the home page, pictures 1–4 on their own articles.
- Pages and menu: Home, Articles, About, References, and the four article pages with
  previous / back / next links at the end.
- No invented content, no new features, no sign-in, search, comments or newsletter.

## Technical notes

- Rework the shared design tokens in `src/styles.css` (colour variables, fonts loaded via a
  `<link>` in `src/routes/__root.tsx`, new utilities for the reading column, hanging indents,
  numbered headings, footnote text) and drop the marquee/reveal motion utilities.
- Rewrite the presentation layers only: `site-header`, `site-footer`, `article-card` (becomes a
  contents row), `routes/index`, `routes/articles.index`, `routes/articles.$slug`,
  `routes/about`, `routes/references`.
- `src/content/writings.ts` is left as the single source of content; no text edits.
- Keep each route's own page title and description metadata; verify build, then check every
  route on desktop and phone widths for overflow and console errors.
