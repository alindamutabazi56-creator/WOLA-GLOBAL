'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { globalSettings } from '@/lib/site';

const links = [
  ['About', '/about'],
  ['Chapters', '/chapters'],
  ['Programmes', '/programmes'],
  ['Events', '/events'],
  ['Blog', '/blog'],
  ['Team', '/team'],
  ['Join', '/join'],
  ['Partners', '/partners'],
  ['Contact', '/contact']
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-emerald/10 bg-cream/95 backdrop-blur">
      <nav className="container-shell flex items-center justify-between py-4" aria-label="Main">
        <Link href="/" className="font-heading text-xl text-emerald">WOLA</Link>
        <div className="hidden gap-5 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={`text-sm ${pathname === href ? 'text-emerald font-semibold' : 'text-ink/80'}`}>
              {label}
            </Link>
          ))}
        </div>
        <Link href={globalSettings.ctas.join} className="btn-primary">Join WOLA</Link>
      </nav>
    </header>
  );
}
