import { useState } from 'react';

import { ChevronDownIcon } from '@/lib/components/chevron-down-icon';
import { SectionHeading } from '@/lib/components/section-heading';

interface AboutProps {
  className?: string;
}

export const AboutSection = ({ className }: AboutProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`mx-auto p-4 ${className || ''}`}>
      <SectionHeading>About Me</SectionHeading>
      <div className="mb-4">
        <p>
          Hands-on Software Engineering leader with 14+ years of experience
          building, scaling, and operating distributed, high-availability
          systems in data-intensive and regulated environments. Strong bias
          toward execution: designs systems, writes production code, reviews
          critical paths, and owns delivery end-to-end.
        </p>
        <p>
          Deep expertise in backend services, APIs, cloud infrastructure, and
          platform reliability, with practical full-stack capability and
          increasing focus on AI-assisted development workflows. Experienced
          working closely with founders and CTOs in scale-up environments, with
          a natural progression toward Head of Engineering as teams and systems
          mature.
        </p>
      </div>
      <div
        className={`space-y-4 overflow-hidden transition-all duration-500 ease-in mb-2 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>
          I hold a Master’s Degree in Computer Science from St. Petersburg State
          Polytechnical University
        </p>
        <p>
          When I'm not coding, I spend my time listening to music, reading
          books, working out at the gym, and playing games
        </p>
      </div>
      <button
        type="button"
        onClick={toggleExpanded}
        className="flex items-center gap-2 text-sm text-zinc-900 hover:text-zinc-300 transition-colors mb-4"
      >
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
        {isExpanded ? 'View less' : 'View more'}
      </button>
    </section>
  );
};
