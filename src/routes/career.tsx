import { createFileRoute, Link } from '@tanstack/react-router';

import { SectionHeading } from '@/lib/components/section-heading';
import { CAREER_ENTRIES } from '@/lib/data/career';

function CareerItem({
  slug,
  period,
  title,
  company,
  description,
  technologies,
}: (typeof CAREER_ENTRIES)[number]) {
  return (
    <article className="relative pl-8 rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-4">
      <span className="absolute left-0 top-5 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/30 shadow" />
      <header className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
        <span className="text-zinc-500 dark:text-zinc-400 font-medium">
          {period}
        </span>
        <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-lg">
          {title}
        </h3>
        <span className="text-emerald-700 dark:text-emerald-300">
          @ {company}
        </span>
      </header>
      <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 text-sm mb-3">
        {description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {technologies.map((t) => (
          <li
            key={t}
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/50"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link
          to="/career/$slug"
          params={{ slug }}
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-200 ring-1 ring-emerald-300/70 dark:ring-emerald-800/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30 transition-colors"
        >
          Read more
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export const Route = createFileRoute('/career')({
  component: () => (
    <section className="mx-auto p-4 py-6 relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <SectionHeading id="career-page">Career</SectionHeading>
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-300/70 dark:ring-zinc-800/60 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/30 transition-colors"
        >
          Home
          <span aria-hidden>↩</span>
        </Link>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
          aria-hidden
        />
        <div className="space-y-6 pl-0 font-mono">
          {CAREER_ENTRIES.map((entry) => (
            <CareerItem key={entry.slug} {...entry} />
          ))}
        </div>
      </div>
    </section>
  ),
});
