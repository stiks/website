import { createFileRoute, Link } from '@tanstack/react-router';

import { SectionHeading } from '@/lib/components/section-heading';
import { getProjectBySlug } from '@/lib/data/career';

export const Route = createFileRoute('/projects/$project')({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: slug } = Route.useParams();
  const result = getProjectBySlug(slug);

  if (!result) {
    return (
      <section className="mx-auto p-4 py-6">
        <SectionHeading>Project not found</SectionHeading>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">
          We couldn&apos;t find that project. It may have been moved or updated.
        </p>
        <div className="mt-4 flex gap-3">
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

  const { project, career } = result;

  return (
    <section className="max-w-5xl mx-auto p-4 py-6 relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <SectionHeading>{project.name}</SectionHeading>
        <div className="flex gap-2">
          <Link
            to="/career/$slug"
            params={{ slug: career.slug }}
            className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-200 ring-1 ring-emerald-300/70 dark:ring-emerald-800/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30 transition-colors"
          >
            {career.company}
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
            {career.period}
          </span>
          <h2 className="text-zinc-900 dark:text-zinc-100 font-semibold text-xl">
            {project.name}
          </h2>
          <span className="text-emerald-700 dark:text-emerald-300">
            @ {career.company}
          </span>
        </div>

        {project.description && (
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.description}
          </p>
        )}

        {project.technologies?.length ? (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
              Technologies
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/50"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </article>
    </section>
  );
}
