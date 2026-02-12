'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['About', '/about'], ['Chapters', '/chapters'], ['Programmes', '/programmes'], ['Events', '/events'], ['Blog', '/blog'], ['Team', '/team'], ['Join', '/join'], ['Partners', '/partners'], ['Contact', '/contact']
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-brand-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main navigation">
        <Link href="/" className="font-serif text-xl">WOLA</Link>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>Menu</button>
        <ul className={`${open ? 'block' : 'hidden'} absolute left-0 top-14 w-full bg-brand-cream p-4 md:static md:flex md:w-auto md:gap-4 md:bg-transparent md:p-0`}>
          {links.map(([label, href]) => (<li key={href}><Link href={href} className="block py-1 text-sm hover:text-brand-emerald">{label}</Link></li>))}
        </ul>
      </nav>
    </header>
  );
}
