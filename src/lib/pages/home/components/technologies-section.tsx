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
  grayscale?: boolean;
}

const TechnologyCard = ({ technology, grayscale }: TechnologyCardProps) => (
  <div className="rounded-xl border bg-card text-card-foreground shadow transition-all duration-300 hover:shadow-lg">
    <div className="group flex aspect-square select-none flex-col items-center justify-center p-1 sm:p-2">
      {typeof technology.icon === 'string' ? (
        <img
          src={technology.icon}
          alt={technology.name}
          className={`dark:brightness-100 size-8 sm:size-12 md:size-16 lg:size-20 xl:size-24 transition-all duration-300 dark:grayscale ${grayscale ? 'grayscale group-hover:grayscale-0' : ''}`}
        />
      ) : (
        technology.icon
      )}
      <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
        {technology.name}
      </div>
    </div>
  </div>
);

interface TechnologiesSectionProps {
  className?: string;
  grayscale?: boolean;
}
export const TechnologiesSection = ({
  className,
  grayscale,
}: TechnologiesSectionProps) => {
  return (
    <section className={`mx-auto p-4 ${className || ''}`}>
      <SectionHeading>Technologies</SectionHeading>

      <div className="grid gap-1 sm:gap-2 grid-cols-5 xs:grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-8 2xl:grid-cols-9">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.name}
            technology={technology}
            grayscale={grayscale}
          />
        ))}
      </div>
    </section>
  );
};
