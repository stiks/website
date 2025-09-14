import type React from 'react';

import { SectionHeading } from '@/lib/components/section-heading.tsx';

interface Technology {
  name: string;
  icon: React.ReactNode | string;
}

const technologies: Array<Technology> = [
  {
    name: 'Golang',
    icon: '/assets/icons/Go.svg',
  },
  {
    name: 'TypeScript',
    icon: '/assets/icons/TypeScript.svg',
  },
  {
    name: 'Python',
    icon: '/assets/icons/Python.svg',
  },
  {
    name: 'PHP',
    icon: '/assets/icons/PHP.svg',
  },
  {
    name: 'React',
    icon: '/assets/icons/React.svg',
  },
  {
    name: 'PostgresSQL',
    icon: '/assets/icons/PostgresSQL.svg',
  },
  {
    name: 'MySQL',
    icon: '/assets/icons/MySQL.svg',
  },
  {
    name: 'MongoDB',
    icon: '/assets/icons/MongoDB.svg',
  },
  {
    name: 'Kubernetes',
    icon: '/assets/icons/Kubernetes.svg',
  },
  {
    name: 'Docker',
    icon: '/assets/icons/Docker.svg',
  },
  {
    name: 'Google Cloud',
    icon: '/assets/icons/GoogleCloud.svg',
  },
  {
    name: 'AWS',
    icon: '/assets/icons/AWS.svg',
  },
  {
    name: 'Azure',
    icon: '/assets/icons/Azure.svg',
  },
];

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => (
  <div className="rounded-xl border bg-card text-card-foreground shadow">
    <div className="group flex aspect-square select-none flex-col items-center justify-center">
      {typeof technology.icon === 'string' ? (
        <img
          src={technology.icon}
          alt={technology.name}
          className="group-hover:grayscale-0 grayscale dark:brightness-100 size-10 lg:size-10 transition-all duration-300"
        />
      ) : (
        technology.icon
      )}
      <div className="mt-3 text-xs text-muted-foreground">
        {technology.name}
      </div>
    </div>
  </div>
);

interface TechnologiesSectionProps {
  className?: string;
}
export const TechnologiesSection = ({
  className,
}: TechnologiesSectionProps) => {
  return (
    <section className={`mx-auto p-4 ${className || ''}`}>
      <SectionHeading id="technologies">Technologies</SectionHeading>

      <div className="grid gap-1 grid-cols-6 sm:grid-cols-9 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-10">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} technology={technology} />
        ))}
      </div>
    </section>
  );
};
