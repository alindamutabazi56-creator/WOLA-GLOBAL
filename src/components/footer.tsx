import Link from 'next/link';
import { globalSettings } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-emerald/10 py-10">
      <div className="container-shell grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg text-emerald">Women Leaders of Afrika</p>
          <p className="text-sm text-muted">Leadership. Sisterhood. Brain gain.</p>
        </div>
        <div className="space-y-2">
          {globalSettings.footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm hover:text-emerald">{link.label}</Link>
          ))}
        </div>
        <form action="/api/newsletter" className="space-y-2">
          <label htmlFor="footer-email" className="text-sm font-medium">Newsletter</label>
          <input id="footer-email" name="email" type="email" className="w-full rounded-lg border border-emerald/20 p-2" placeholder="you@example.com" />
          <button className="btn-secondary" type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
