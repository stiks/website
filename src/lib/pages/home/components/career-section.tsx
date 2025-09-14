import type React from 'react';

import { SectionHeading } from '@/lib/components/section-heading';

interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: Array<string>;
}

type CareerSectionProps = React.ComponentPropsWithoutRef<'section'>;

const CAREER_ENTRIES: Array<TimelineEntry> = [
  {
    period: '2021 - Present',
    title: 'Head of Engineering',
    company: '@Crosstech / Hackpartners',
    description:
      'As Head of Engineering, I led the technical and strategic transformation of an AI-driven proof-of-concept into a commercially successful, multi-million-dollar rail inspection system. I built the engineering organization from the ground up, establishing the teams, processes, and technology to enable rapid and sustainable business growth.',
    technologies: ['Golang', 'Python', 'PostgreSQL', 'Even Driven', 'GCP'],
  },
  {
    period: '2011 - 2021',
    title: 'Head of Development and Engineering',
    company: '@Quintessentially',
    description:
      'As the Head of Development, I led three international teams (in-house and remote) of developers, DevOps engineers, and QAs. I was responsible for defining the technology strategy, modernizing the infrastructure, and delivering a state-of-the-art mobile concierge platform for high-profile clients such as Mastercard, HSBC, and ADCB Bank.',
    technologies: [
      'AWS',
      'PHP',
      'Golang',
      'IOS',
      'Android',
      'Microservices',
      'Kubernetes',
    ],
  },
];

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

const TECH_PILL_CLASS =
  'px-3 py-1 rounded text-xs font-medium bg-blue-50 text-blue-600 border-blue-200 border hover:bg-blue-300/20 transition-colors';

function TechPill({ label }: { label: string }) {
  return <span className={TECH_PILL_CLASS}>{label}</span>;
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="bg-gray-50/50 rounded-lg p-4 backdrop-blur-sm border border-gray-200 overflow-hidden shadow-md">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-yellow-500 font-bold">{entry.period}</span>
        <span className="text-blue-400 font-bold text-xl">{entry.title}</span>
        <span className="text-purple-400">{entry.company}</span>
      </div>
      <div className="space-y-2 mb-4">
        <div className="leading-relaxed text-gray-700 text-sm">
          {entry.description}
        </div>
      </div>
      <div className="mt-4">
        {/*<div className="text-gray-600"># Technologies used:</div>*/}
        <div className="flex flex-wrap gap-2">
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
    <section className={cx('mx-auto p-4 py-4 relative', className)} {...props}>
      <SectionHeading id="career">Career Timeline</SectionHeading>

      {/*<div className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-200">*/}
      <div className="font-mono ">
        <div className="space-y-6">
          {CAREER_ENTRIES.map((entry) => (
            <TimelineItem
              key={`${entry.period}-${entry.title}`}
              entry={entry}
            />
          ))}
        </div>
      </div>
      {/*</div>*/}
    </section>
  );
};
