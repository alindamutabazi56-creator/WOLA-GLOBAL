'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
    <header className="sticky top-0 z-50 border-b border-muted/60 bg-background/95 backdrop-blur">
      <nav className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="font-heading text-xl font-semibold">WOLA</Link>
        <div className="hidden gap-5 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={cn('text-sm', pathname.startsWith(href) ? 'text-emerald font-semibold' : 'text-ink/80')}>
              {label}
            </Link>
          ))}
        </div>
        <Link href="/join" className="rounded-full bg-emerald px-4 py-2 text-sm text-white">Join WOLA</Link>
      </nav>
    </header>
  );
}
