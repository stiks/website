import { ThemeToggle } from '@/lib/components/theme-toggle';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <section className="max-w-5xl mx-auto p-4 flex items-center justify-between py-2 mb-10">
        <div className="text-primary text-xl md:text-2xl font-bold font-caption">
          <a href="/">Kirill Garbar</a>
        </div>
        <div>
          <nav className="flex justify-between text-xs md:text-sm font-heading">
            <ul className="flex items-center">
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <a href="/#projects">Projects</a>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <a href="/#about">About</a>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out ">
                <a href="/#contact">Contact</a>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};
