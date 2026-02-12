import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';

const bodyFont = Inter({ subsets: ['latin'], variable: '--font-inter' });
const headingFont = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'WOLA Global', template: '%s | WOLA Global' },
  description: siteConfig.description,
  openGraph: { title: 'WOLA Global', description: siteConfig.description, type: 'website', url: siteConfig.url },
  twitter: { card: 'summary_large_image', title: 'WOLA Global', description: siteConfig.description }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Women Leaders of Afrika',
            url: siteConfig.url,
            description: siteConfig.description
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
