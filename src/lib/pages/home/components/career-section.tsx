import { Link } from '@tanstack/react-router';
import type React from 'react';

import { SectionHeading } from '@/lib/components/section-heading';
import { CAREER_ENTRIES, type TimelineEntry } from '@/lib/data/career';

type CareerSectionProps = React.ComponentPropsWithoutRef<'section'>;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

const TECH_PILL_CLASS =
  'px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/50 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/30 transition-colors';

function TechPill({ label }: { label: string }) {
  return <span className={TECH_PILL_CLASS}>{label}</span>;
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative">
      <span
        className="pointer-events-none absolute left-3 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/30 shadow"
        aria-hidden
      />
      <div className="ml-8 rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium">
              {entry.period}
            </span>
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold text-lg">
              {entry.title}
            </span>
            <span className="text-emerald-700 dark:text-emerald-300">
              @ {entry.company}
            </span>
          </div>
          <Link
            to="/career/$slug"
            params={{ slug: entry.slug }}
            className="group inline-flex items-center gap-1.5 rounded-full bg-zinc-50/80 dark:bg-zinc-800/40 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-zinc-200/80 dark:ring-zinc-700/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            View role
            <span
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>
        <div className="space-y-2 mb-3">
          <div className="leading-relaxed text-zinc-700 dark:text-zinc-300 text-sm">
            {entry.description}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const CareerSection = ({ className, ...props }: CareerSectionProps) => {
  return (
    <section
      className={cx(
        'mx-auto p-4 py-4 relative',
        'bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 lg:rounded-2xl',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <SectionHeading id="career">Career Timeline</SectionHeading>
        <Link
          to="/career"
          className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-200 ring-1 ring-emerald-300/70 dark:ring-emerald-800/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30 transition-colors"
        >
          View all
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="relative font-mono">
        <div
          className="pointer-events-none absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
          aria-hidden
        />
        <div className="space-y-6">
          {CAREER_ENTRIES.map((entry) => (
            <TimelineItem key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};
