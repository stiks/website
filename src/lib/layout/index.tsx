import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import { Footer } from './components/footer';
import { Header } from './components/header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      {/* <Meta /> */}
      <div className="fixed inset-0 flex justify-center xs:px-8">
        <div className="flex w-full max-w-6xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      {/*<div className="flex min-h-screen flex-col dark:bg-black dark:text-white">*/}
      <div className="relative flex flex-col w-full dark:text-white">
        <Header />
        <main className="wrapper">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
