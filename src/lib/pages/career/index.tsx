import { Link } from '@tanstack/react-router';

import { SectionHeading } from '@/lib/components/section-heading.tsx';
import { TimelineItem } from '@/lib/components/timeline-item.tsx';
import { CAREER_ENTRIES } from '@/lib/data/career.ts';

const Career = () => {
  // const maxResolution = 'max-w-5xl';

  return (
    <section className="max-w-5xl mx-auto p-4 py-6 relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-2xl">
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
            <TimelineItem key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
