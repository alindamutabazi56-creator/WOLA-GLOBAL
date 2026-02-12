import { submitContact } from '@/actions/forms';
import { settings } from '@/content/data';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Contact</h1>
      <p>General inbox: hello@wola.afrika · Press/media: press@wola.afrika</p>
      <p>Main chapter location: University of Nottingham, University Park Campus.</p>
      <ul className="flex gap-3">{settings.socialLinks.map((s) => <li key={s.name}><a href={s.url} className="text-brand-emerald">{s.name}</a></li>)}</ul>
      <form action={submitContact} className="grid gap-2 rounded-xl2 bg-white p-6 shadow-soft md:max-w-xl">
        <input name="name" className="rounded border p-2" placeholder="Name" required />
        <input name="email" type="email" className="rounded border p-2" placeholder="Email" required />
        <textarea name="message" className="rounded border p-2" placeholder="Message" required />
        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="rounded bg-brand-emerald px-4 py-2 text-brand-cream">Send message</button>
      </form>
    </div>
  );
}
