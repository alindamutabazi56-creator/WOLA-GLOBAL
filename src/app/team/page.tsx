import { people } from '@/content/data';

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Team</h1>
      <div className="grid gap-4 md:grid-cols-3">{people.map((p) => <article key={p.slug} className="rounded-xl2 bg-white p-5 shadow-soft"><h2 className="font-serif text-xl">{p.name}</h2><p className="text-sm text-brand-emerald">{p.role} · {p.committee}</p><p className="mt-2 text-sm">{p.bio}</p></article>)}</div>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Join the team</h2>
        <p>Volunteer across editorial, events, sponsorship, publicity, and task forces.</p>
      </section>
    </div>
  );
}
