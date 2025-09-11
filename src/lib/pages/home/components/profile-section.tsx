import { GitHubIcon } from '@/lib/components/github-icon.tsx';
import { LinkedInIcon } from '@/lib/components/linkedin-icon.tsx';

interface ProfileSectionProps {
  className?: string;
}

export const ProfileSection = ({ className }: ProfileSectionProps) => {
  return (
    <section className={`mx-auto p-4 py-8 relative ${className || ''}`}>
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
        style={{ opacity: 1 }}
      >
        <div className="w-full lg:w-1/2 text-left space-y-8">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h1 className="text-md md:text-4xl font-bold font-heading">
                Hi,{' '}
                <div className="tracking-[-0.02em] inline-block m-0">
                  I'm Kirill
                </div>
              </h1>
              <p className="text-muted-foreground max-w-md font-light text-sm md:text-sm">
                executive technology leader with 10+ years building and scaling
                high-performing engineering organizations, defining product and
                platform strategy, and owning architectural direction for
                mission-critical systems.
              </p>
              <span className="relative mt-2 text-xs md:text-sm font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
                England
              </span>
            </div>
          </div>

          <div className="flex items-center mt-4 gap-4">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground py-2 bg-primary w-auto h-8 px-4"
              href="https://docs.google.com/document/d/1NVnYW6wxVDxGdR2R_Wt7FYabUQrDONgY6CZfyaUvtTY/view"
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
        </div>
        <div
          className="w-full lg:w-1/2 relative hidden lg:block"
          style={{ opacity: 1, transform: 'none' }}
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-purple-500/10 rounded-3xl transform rotate-6 backdrop-blur-sm border border-white/10"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-green-500/10 to-blue-500/10 rounded-3xl transform -rotate-6 backdrop-blur-sm border border-white/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] z-10">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.3)] transform transition-transform hover:scale-105">
                  <img
                    alt="Kirill Garbar"
                    width="822"
                    height="1094"
                    decoding="async"
                    data-nimg="1"
                    className="aspect-square object-cover object-top"
                    style={{ color: 'transparent' }}
                    src="/assets/portrait.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
