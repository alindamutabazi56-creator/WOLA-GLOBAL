import { Metadata } from 'next';

export const baseUrl = 'https://wola.example.org';

export function meta(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, url: baseUrl, siteName: 'WOLA', type: 'website' },
    twitter: { card: 'summary_large_image', title, description }
  };
}

export function organisationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Women Leaders of Afrika',
    url: baseUrl,
    sameAs: ['https://instagram.com/wolaglobal', 'https://linkedin.com/company/wolaglobal']
  };
}
