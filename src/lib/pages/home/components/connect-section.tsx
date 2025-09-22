import { SectionHeading } from '@/lib/components/section-heading';

interface ConnectSectionProps {
  className?: string;
}

export const ConnectSection = ({ className }: ConnectSectionProps) => {
  return (
    <section className={`mx-auto p-4 ${className || ''}`}>
      <SectionHeading>Let's connect</SectionHeading>

      <div className="space-y-4 flex flex-col items-center">
        <div>
          <p>
            Any questions, proposals, or collaborations? Feel free to reach out.{' '}
          </p>
        </div>
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 bg-primary"
          href="mailto:me@kirill.dev"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};
