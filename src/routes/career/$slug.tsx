import { createFileRoute, Link } from '@tanstack/react-router';

import { SectionHeading } from '@/lib/components/section-heading';
import { getCareerEntryBySlug } from '@/lib/data/career';

export const Route = createFileRoute('/career/$slug')({
  component: CareerDetail,
});

function CareerDetail() {
  const { slug } = Route.useParams();
  const entry = getCareerEntryBySlug(slug);

  if (!entry) {
    return (
      <section className="mx-auto p-4 py-6">
        <SectionHeading id="career-not-found">Role not found</SectionHeading>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">
          We couldn&apos;t find that role. It may have been moved or updated.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            to="/career"
            className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-200 ring-1 ring-emerald-300/70 dark:ring-emerald-800/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30 transition-colors"
          >
            Back to Career
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-300/70 dark:ring-zinc-800/60 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/30 transition-colors"
          >
            Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto p-4 py-6 relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <SectionHeading id="career-role">
          {entry.title} @ {entry.company}
        </SectionHeading>
        <div className="flex gap-2">
          <Link
            to="/career"
            className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-200 ring-1 ring-emerald-300/70 dark:ring-emerald-800/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30 transition-colors"
          >
            Back to Career
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-300/70 dark:ring-zinc-800/60 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/30 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>

      <article className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium">
            {entry.period}
          </span>
          <h2 className="text-zinc-900 dark:text-zinc-100 font-semibold text-xl">
            {entry.title}
          </h2>
          <span className="text-emerald-700 dark:text-emerald-300">
            @ {entry.company}
          </span>
        </div>
        <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
          {entry.description}
        </p>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
            Technologies
          </h3>
          <ul className="flex flex-wrap gap-2">
            {entry.technologies.map((t) => (
              <li
                key={t}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/50"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
