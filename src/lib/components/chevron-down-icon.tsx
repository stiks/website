import type React from 'react';

interface ChevronDownIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  width = 24,
  height = 24,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <title>Chevron</title>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};
