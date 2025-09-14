interface SectionHeadingProps {
  children: string;
  className?: string;
  id?: string;
}

export const SectionHeading = ({
  children,
  className,
  id,
}: SectionHeadingProps) => {
  return (
    <div className="mb-4" id={id}>
      <h2
        className={`text-xl font-semibold uppercase tracking-wider text-secondary font-heading ${className || ''}`}
      >
        {children}
      </h2>
    </div>
  );
};
