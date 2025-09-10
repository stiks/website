import { GitHubIcon } from '@/lib/components/github-icon.tsx';
import { LinkedInIcon } from '@/lib/components/linkedin-icon.tsx';

export const Footer = () => {
  return (
    <footer>
      <section className="max-w-4xl mx-auto p-4 py-4 border-t-1 border-border flex justify-between">
        <div className="flex flex-col items-center justify-center">
          <p>© {new Date().getFullYear()} Kirill Garbar</p>
        </div>
        <div className="flex gap-2">
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground size-8 p-0"
            href="https://github.com/stiks"
          >
            <GitHubIcon />
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground size-8 p-0"
            href="https://www.linkedin.com/in/kirill-garbar-96783031"
          >
            <LinkedInIcon />
          </a>
        </div>
      </section>
    </footer>
  );
};
