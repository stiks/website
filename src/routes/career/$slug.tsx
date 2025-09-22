import { createFileRoute, Link } from '@tanstack/react-router';

import { SectionHeading } from '@/lib/components/section-heading';
import { TechPill } from '@/lib/components/tech-pill';
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
        <SectionHeading>Role not found</SectionHeading>
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
        <SectionHeading>
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
        {entry.description && (
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            {entry.description}
          </p>
        )}

        {entry.responsibilities?.length ? (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
              Key responsibilities
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
              {entry.responsibilities.map((r) => (
                <li key={r.title} className="leading-relaxed">
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">
                    {r.title}
                  </div>
                  {r.description && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {r.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {entry.cases?.length ? (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
              Case studies
            </h3>
            <div className="flex flex-col gap-3">
              {entry.cases.map((c) => (
                <a
                  key={c.title}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 p-3 hover:shadow-md transition"
                >
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.title}
                  </div>
                  {c.description && (
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {c.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        {entry.projects?.length ? (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
              Projects
            </h3>
            <div className="flex flex-col gap-3">
              {entry.projects.map((p) => (
                <div
                  key={p.slug}
                  className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800/80 border-l-2 border-l-emerald-500 bg-white/70 dark:bg-zinc-900/50 p-3 transition-shadow hover:shadow-md hover:bg-white/80 dark:hover:bg-zinc-900/60"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {p.name}
                    </span>
                    {p.dead && (
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-300 ring-1 ring-zinc-200/70 dark:ring-zinc-700/60">
                        Archived
                      </span>
                    )}
                  </div>
                  {p.description && (
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {p.description}
                    </p>
                  )}
                  {p.technologies?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.technologies.map((tech) => (
                        <TechPill key={tech} label={tech} />
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-2">
                    <Link
                      to="/projects/$project"
                      params={{ project: p.slug }}
                      className="group inline-flex items-center gap-1.5 rounded bg-zinc-50/80 dark:bg-zinc-800/40 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-200/80 dark:ring-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      View details
                      <span
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {entry.technologies.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
