import { useState } from 'react';

import { ChevronDownIcon } from '@/lib/components/chevron-down-icon';
import { SectionHeading } from '@/lib/components/section-heading';
import type { RoleData } from '@/lib/data/roles';
import { guid } from '@/lib/utils/uuid.ts';

interface AboutProps {
  className?: string;
  roleData: RoleData;
}

export const AboutSection = ({ className, roleData }: AboutProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`mx-auto p-4 ${className || ''}`}>
      <SectionHeading>About Me</SectionHeading>
      <div className="mb-4">
        {roleData.about.map((paragraph) => (
          <p key={guid()}>{paragraph}</p>
        ))}
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
