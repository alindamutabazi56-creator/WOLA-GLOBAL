import { Instagram, Linkedin, Twitter } from 'lucide-react';

const links = [
  { label: 'Chapters', href: '#chapters' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Impact', href: '#impact' },
  { label: 'Get Involved', href: '#get-involved' }
];

const socials = [
  { label: 'Instagram', icon: Instagram },
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'X', icon: Twitter }
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[#eadff7] bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xl font-semibold text-[#2F1A4A]">WOLA Global</p>
          <p className="mt-2 text-sm text-[#5a4a6f]">Empower a woman, empower a nation.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#4B3A61] hover:text-[#5D2D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-start gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={`${social.label} placeholder`}
              className="inline-flex rounded-full border border-[#eadff7] p-2 text-[#5D2D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
            >
              <social.icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-[#f0e8fa] py-4 text-center text-xs text-[#6f5d86]">
        © {new Date().getFullYear()} WOLA Global. All rights reserved.
      </p>
    </footer>
  );
}
