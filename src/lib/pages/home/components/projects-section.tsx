import { SectionHeading } from '@/lib/components/section-heading';

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  return (
    <section className={`mx-auto p-4 py-8 relative ${className || ''}`}>
      <SectionHeading>Projects</SectionHeading>
    </section>
  );
};
