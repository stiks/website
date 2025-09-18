import { Link } from '@tanstack/react-router';

import { TechPill } from '@/lib/components/tech-pill';
import type { TimelineEntry } from '@/lib/data/career';

export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative">
      <span
        className="hidden sm:block pointer-events-none absolute left-3 top-5 sm:top-6 h-2.5 w-2.5 sm:h-3 sm:w-3 -translate-x-1/2 rounded-full bg-emerald-500 ring-2 sm:ring-4 ring-emerald-100 dark:ring-emerald-900/30 shadow"
        aria-hidden
      />
      <div className="ml-0 sm:ml-8 rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="min-w-0 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium">
              {entry.period}
            </span>
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold text-base sm:text-lg">
              {entry.title}
            </span>
            <span className="text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
              @ {entry.company}
            </span>
          </div>
          <Link
            to="/career/$slug"
            params={{ slug: entry.slug }}
            className="group inline-flex items-center justify-center gap-1.5 rounded bg-zinc-50/80 dark:bg-zinc-800/40 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-200/80 dark:ring-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            Details
            <span
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>
        {entry.description && (
          <div className="space-y-2 mb-3">
            <div className="leading-relaxed text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
              {entry.description}
            </div>
          </div>
        )}
        {entry.responsibilities && entry.responsibilities?.length > 0 && (
          <>
            <div className="mb-1 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
              Key responsibilities
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-zinc-700 dark:text-zinc-300">
              {entry.responsibilities?.map((r) => (
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
          </>
        )}
        {entry.projects && entry.projects?.length > 0 && (
          <>
            <div className="mb-1 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
              Projects
            </div>
            <div className="flex flex-col gap-3">
              {entry.projects?.map((p) => (
                <div
                  key={p.name}
                  className="group rounded-lg border border-zinc-200/70 dark:border-zinc-800/80 border-l-2 border-l-emerald-500 bg-white/70 dark:bg-zinc-900/50 p-3 transition-shadow hover:shadow-md hover:bg-white/80 dark:hover:bg-zinc-900/60"
                >
                  <div className="flex flex-wrap items-center gap-2">
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
                  {p.technologies && p.technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.technologies.map((tech) => (
                        <TechPill key={tech} label={tech} />
                      ))}
                    </div>
                  )}
                  <div className="mt-2">
                    <Link
                      to="/projects/$project"
                      params={{
                        project: p.slug,
                      }}
                      className="group inline-flex items-center justify-center gap-1.5 rounded bg-zinc-50/80 dark:bg-zinc-800/40 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-200/80 dark:ring-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors w-full sm:w-auto"
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
          </>
        )}
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {entry.technologies.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
