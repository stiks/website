import type React from 'react';

interface Technology {
  name: string;
  icon: React.ReactNode | string;
}

const technologies: Array<Technology> = [
  {
    name: 'React',
    icon: '/assets/icons/React.svg',
  },
  {
    name: 'TypeScript',
    icon: '/assets/icons/TypeScript.svg',
  },
  {
    name: 'MySQL',
    icon: '/assets/icons/MySQL.svg',
  },
  {
    name: 'Docker',
    icon: '/assets/icons/Docker.svg',
  },
  {
    name: 'Golang',
    icon: '/assets/icons/Go.svg',
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
          className="group-hover:-translate-y-1 size-8 transition-all duration-300"
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
      <div className="mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-primary font-heading">
          TECHNOLOGIES
        </h2>
      </div>
      <div className="grid gap-1 grid-cols-8 sm:grid-cols-9 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-10">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} technology={technology} />
        ))}
      </div>
    </section>
  );
};
