import type React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({
  children,
  className,
}: SectionHeadingProps) => {
  return (
    <div className="mb-4">
      <h2
        className={`text-xl font-semibold uppercase tracking-wider text-secondary font-heading ${className || ''}`}
      >
        {children}
      </h2>
    </div>
  );
};
