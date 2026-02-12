import { ContactForm, NewsletterForm } from '@/components/forms';

export default function ContactPage() {
  return <div className="container-shell py-12 grid gap-6 md:grid-cols-2"><section><h1 className="font-heading text-4xl text-emerald">Contact</h1><p className="mt-2">General inbox: hello@wola.org</p><p>Press/media enquiries: press@wola.org</p><p>Main chapter location: Nottingham, United Kingdom.</p><NewsletterForm /></section><ContactForm /></div>;
}
