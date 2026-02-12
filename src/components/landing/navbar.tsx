import { Button } from './button';

const links = [
  { label: 'Chapters', href: '#chapters' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Impact', href: '#impact' },
  { label: 'Get Involved', href: '#get-involved' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadff7] bg-white/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-semibold text-[#2F1A4A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]">WOLA Global</a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-[#4B3A61] transition hover:text-[#5D2D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]">
              {link.label}
            </a>
          ))}
        </div>
        <Button href="#get-involved">Join WOLA</Button>
      </nav>
    </header>
  );
}
