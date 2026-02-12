import Link from 'next/link';
import { globalSettings } from '@/data/content';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-muted/60 bg-white">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-lg">Women Leaders of Afrika</h3>
          <p className="mt-3 text-sm text-ink/80">A movement building the next generation of Afrikan women leaders.</p>
        </div>
        <div>
          <p className="font-semibold">Socials</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={globalSettings.socials.instagram}>Instagram</a></li>
            <li><a href={globalSettings.socials.linkedin}>LinkedIn</a></li>
            <li><a href={globalSettings.socials.x}>X</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-3 text-sm">hello@wola.org</p>
          <p className="text-sm">Press: media@wola.org</p>
        </div>
        <div>
          <p className="font-semibold">Footer links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {globalSettings.footerLinks.map((link) => (
              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
