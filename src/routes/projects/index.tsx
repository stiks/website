import { createFileRoute, Link } from '@tanstack/react-router';

import { SectionHeading } from '@/lib/components/section-heading';
import { getAllProjects } from '@/lib/data/career';

export const Route = createFileRoute('/projects/')({
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const projects = getAllProjects();

  return (
    <section className="max-w-5xl mx-auto p-4 py-6 relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <SectionHeading>Projects</SectionHeading>
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-300/70 dark:ring-zinc-800/60 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/30 transition-colors"
        >
          Home
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  {p.name}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {p.roleTitle} @ {p.company}
                </div>
              </div>
              <Link
                to="/projects/$project"
                params={{ project: p.slug }}
                className="group inline-flex items-center gap-1.5 rounded bg-zinc-50/80 dark:bg-zinc-800/40 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-200/80 dark:ring-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
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
            {p.description && (
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {p.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
