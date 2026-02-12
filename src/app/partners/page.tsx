import { submitContact } from '@/actions/forms';

export default function PartnersPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Partners / Support</h1>
      <section className="rounded-xl2 bg-white p-6 shadow-soft"><h2 className="font-serif text-2xl">Sponsor deck</h2><a href="#" className="text-brand-emerald">Download deck (placeholder)</a></section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft"><h2 className="font-serif text-2xl">Transparent use of funds</h2><p>Funds support scholarships, event access, project grants, and chapter operations.</p></section>
      <form action={submitContact} className="grid gap-2 rounded-xl2 bg-white p-6 shadow-soft md:max-w-xl">
        <h2 className="font-serif text-2xl">Partner enquiry</h2>
        <input name="name" className="rounded border p-2" placeholder="Name" required />
        <input name="email" type="email" className="rounded border p-2" placeholder="Email" required />
        <textarea name="message" className="rounded border p-2" placeholder="How would you like to partner?" required />
        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button className="rounded bg-brand-emerald px-4 py-2 text-brand-cream">Send enquiry</button>
      </form>
    </div>
  );
}
