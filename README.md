# Shared Traditions in Bangladesh

**People. Culture. Belonging. Beyond Differences.**

An academic publication website for my CST308 individual project at BRAC University. It asks how
shared festivals, Baul songs, shrine traditions and cultural identity bring people of different
religions together in Bangladesh, and where that sharing has limits: who gets to take part, who
decides what counts as "our" culture, and how a living tradition is passed on without freezing it.

| | |
| --- | --- |
| **Course** | CST308: Religious Pluralism, Religious Freedom, and Dialogue in the Modern World |
| **University** | BRAC University |
| **Author** | Shahariar Akram |
| **Date** | 11 September 2026 |

## The articles

Four short essays, each meant to be read on its own. Together they ask one question: what lets
people share the same cultural life while being different?

1. **At the Fair Who Gets to Belong.** Memories of Durga Puja fairs, and the harder question of who could actually be there.
2. **Baul Songs Shrines and the People Behind Them.** Hearing the ideas in a song, and seeing a shrine as more than a heritage image.
3. **Who Decides What Counts as Our Culture.** When a practice becomes a test of identity, and the power behind that test.
4. **How Do We Pass a Living Culture On.** Change, decline and keeping a tradition open to the people who take part in it.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Landing page with the title and a way into the articles |
| `/articles` | The four articles as a numbered table of contents |
| `/articles/:slug` | Article page: illustration and caption, reading time, numbered sections, previous / next links |
| `/approach` | Research approach: the question, method, how themes were built, limits and research ethics |
| `/about` | About the researcher and the interview, plus the reflection analysis |
| `/references` | Formal bibliography in APA style |

## Research approach

A small qualitative study. One semi-structured interview is read alongside an annotated
bibliography of course readings and outside scholarship (Ahmed, Roy, Kaviraj, Harder, Berger,
Casanova, Huq, Zaman and others). Themes were built around shared participation, dignity, cultural
and religious identity, institutional power and the continuity of tradition. The site says plainly
what one interview can and cannot show, and keeps the participant's views apart from the project's
own analysis.

## Design

The site is laid out like a university research journal rather than a magazine:

- Near-white paper background, ink-black text and a single deep red accent for links and markers
- **Source Serif 4** for headings and reading text, **IBM Plex Sans** for navigation, labels and captions
- One wide reading column, articles numbered 01–04 with numbered section headings (1.1, 1.2…)
- An "In this article" section index at the top of each article, breadcrumbs, and a hanging-indent bibliography
- Almost no motion, only link and focus states
- Every illustration is captioned as illustrative, not fieldwork photography
- Responsive, with a mobile menu

All of the writing lives in one file, `src/content/writings.ts`, so the design can change without
touching the text.

## Built with

- [React 19](https://react.dev) and TypeScript
- [TanStack Start](https://tanstack.com/start) (server rendering) with TanStack Router file-based routes
- [Tailwind CSS v4](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com) (Radix UI)
- Vite
- Started in [Lovable](https://lovable.dev)

## Run it locally

You need [Node.js](https://nodejs.org) (or [Bun](https://bun.sh)).

```sh
git clone https://github.com/FinexSSS/cst308project.git
cd cst308project
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm run format`.

## Project structure

```
src/
  content/writings.ts   all article text, the approach, about, reflection and references
  routes/               one file per page (TanStack Router)
  components/           site header, footer, article contents row, shadcn/ui parts
  styles.css            design tokens: colours, fonts, reading column, bibliography styles
docs/                   content inventory and editorial notes
```
