import { Link } from '@tanstack/react-router';
import type React from 'react';

import { SectionHeading } from '@/lib/components/section-heading';
import { TimelineItem } from '@/lib/components/timeline-item';
import { CAREER_ENTRIES } from '@/lib/data/career';
import type { RoleType } from '@/lib/data/roles';

interface CareerSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  role: RoleType;
}

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export const CareerSection = ({
  className,
  role,
  ...props
}: CareerSectionProps) => {
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
        <SectionHeading>Career Timeline</SectionHeading>
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
          {CAREER_ENTRIES.slice(0, 2).map((entry, idx) => (
            <div
              key={entry.slug}
              className={idx === 1 ? 'hidden sm:block' : ''}
            >
              <TimelineItem entry={entry} role={role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
