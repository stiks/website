export interface TechPillProps {
  label: string;
  className?: string;
  title?: string;
}

const TECH_PILL_BASE_CLASS =
  'px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/50 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/30 transition-colors';

export function TechPill({ label, className, title }: TechPillProps) {
  const mergedClassName = className
    ? `${TECH_PILL_BASE_CLASS} ${className}`
    : TECH_PILL_BASE_CLASS;

  return (
    <span className={mergedClassName} title={title ?? label}>
      {label}
    </span>
  );
}
