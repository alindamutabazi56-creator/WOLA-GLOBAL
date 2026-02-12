import { settings } from '@/content/data';
import { submitNewsletter } from '@/actions/forms';

export function Footer() {
  return (
    <footer className="mt-20 bg-brand-charcoal text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-xl">Women Leaders of Afrika</h2>
          <p className="mt-2 text-sm text-brand-cream/80">A movement for Afrikan women leading transformative change.</p>
        </div>
        <div>
          <h3 className="font-semibold">Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {settings.footerLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
          </ul>
        </div>
        <form action={submitNewsletter} className="space-y-2">
          <h3 className="font-semibold">Newsletter</h3>
          <input name="email" type="email" required placeholder="Email address" className="w-full rounded-md border border-brand-cream/40 bg-transparent px-3 py-2" />
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <button className="rounded-md bg-brand-gold px-3 py-2 text-brand-charcoal">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
