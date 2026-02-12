import type { Metadata } from 'next';
import { HomePageClient } from '@/components/landing/home-page-client';

export const metadata: Metadata = {
  title: 'WOLA Global',
  description:
    'WOLA Global is the central platform connecting WOLA chapters worldwide, supporting Afrikan women’s leadership, self-actualisation, and community development.'
};

export default function HomePage() {
  return <HomePageClient />;
}
