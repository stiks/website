import { GitHubIcon } from '@/lib/components/github-icon.tsx';
import { LinkedInIcon } from '@/lib/components/linkedin-icon.tsx';

interface WhoAmISectionProps {
  className?: string;
}

export const WhoAmISection = ({ className }: WhoAmISectionProps) => {
  return (
    <section className={`mx-auto p-4 py-8 relative ${className || ''}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-md md:text-2xl font-bold font-heading">
            Hi,{' '}
            <div className="tracking-[-0.02em] inline-block m-0">
              I'm Kirill Garbar
            </div>
          </h1>
          <p className="text-muted-foreground max-w-md font-light text-xs md:text-sm">
            a self-taught fullstack developer, specializing in building scalable
            and efficient backend systems.
          </p>
          <span className="relative mt-2 text-xs md:text-sm font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
            England
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20  blur-2xl rounded-full animate-pulse" />
          <img
            alt="Profile"
            className="aspect-square rounded-2xl bg-zinc-100 object-cover object-top dark:bg-zinc-800 size-48 lg:size-48 sm:size-48 relative overflow-hidden border-2 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.3)] transform transition-transform hover:scale-105"
            src="/assets/portrait.png"
          />
        </div>
      </div>
      <div className="flex items-center mt-4 gap-4">
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground py-2 bg-primary w-auto h-8 px-4"
          href="https://drive.google.com/file/d/1f_BlZEG-yheUAmi4xLB_oncQrtxhlPhx/view"
        >
          Resume
        </a>
        <div className="flex gap-2">
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground size-8 p-0"
            href="https://github.com/stiks"
          >
            <GitHubIcon />
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground size-8 p-0"
            href="https://www.linkedin.com/in/kirill-garbar-96783031"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
};
