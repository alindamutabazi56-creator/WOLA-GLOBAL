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
      <nav aria-label="Main" className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="text-lg font-semibold text-[#2F1A4A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
          >
            WOLA Global
          </a>
          <Button href="#get-involved">Join WOLA</Button>
        </div>
        <div className="mt-3 flex gap-5 overflow-x-auto pb-1 md:mt-0 md:justify-end">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm font-medium text-[#4B3A61] transition hover:text-[#5D2D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
