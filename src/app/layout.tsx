import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { orgJsonLd } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Women Leaders of Afrika (WOLA)',
  description: 'WOLA empowers Afrikan women through leadership development, skills, and community impact.',
  openGraph: {
    title: 'Women Leaders of Afrika (WOLA)',
    description: 'A movement and leadership institution for Afrikan women.',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'Women Leaders of Afrika (WOLA)' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <Nav />
        <main id="main" className="mx-auto min-h-screen max-w-6xl px-4 py-8">{children}</main>
        <Footer />
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  );
}
