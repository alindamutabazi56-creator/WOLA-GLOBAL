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
  description: 'WOLA Global is the central platform connecting WOLA chapters worldwide, supporting Afrikan women’s leadership, self-actualisation, and community development.',
  openGraph: { title: 'WOLA Global', description: 'WOLA Global is the central platform connecting WOLA chapters worldwide, supporting Afrikan women’s leadership, self-actualisation, and community development.', type: 'website', url: siteConfig.url },
  twitter: { card: 'summary_large_image', title: 'WOLA Global', description: 'WOLA Global is the central platform connecting WOLA chapters worldwide, supporting Afrikan women’s leadership, self-actualisation, and community development.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'WOLA Global',
            url: siteConfig.url,
            description: 'WOLA Global is the central platform connecting WOLA chapters worldwide, supporting Afrikan women’s leadership, self-actualisation, and community development.'
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
