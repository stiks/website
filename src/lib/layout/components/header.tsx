import { Link } from '@tanstack/react-router';

import { ThemeToggle } from '@/lib/components/theme-toggle';
import { SECTION_ANCHORS } from '@/lib/constants/anchors';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <section className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-primary text-xl md:text-2xl font-bold font-caption">
          <Link
            to="/"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
          >
            Kirill Garbar
          </Link>
        </div>
        <nav
          aria-label="Primary"
          className="flex justify-between text-xs md:text-sm font-heading"
        >
          <ul className="flex items-center">
            <li className="px-2">
              <Link
                to="/"
                hash={SECTION_ANCHORS.projects}
                className="hover:text-primary transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
              >
                Projects
              </Link>
            </li>
            <li className="px-2">
              <Link
                to="/"
                hash={SECTION_ANCHORS.about}
                className="hover:text-primary transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
              >
                About
              </Link>
            </li>
            <li className="px-2">
              <Link
                to="/"
                hash={SECTION_ANCHORS.contact}
                className="hover:text-primary transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="pl-2">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};
