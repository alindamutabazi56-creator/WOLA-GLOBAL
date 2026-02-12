import { team } from '@/lib/site';

export default function TeamPage() {
  return <div className="container-shell py-12"><h1 className="font-heading text-4xl text-emerald">Team</h1><p className="mt-2">Committees include Editorial, Events, Sponsorship, Publicity, and Task Forces.</p><div className="mt-4 grid gap-4 md:grid-cols-3">{team.map((person) => <article key={person.id} className="card p-5"><h2 className="font-semibold">{person.name}</h2><p className="text-sm text-gold">{person.role}</p><p className="text-sm">{person.bio}</p></article>)}</div><section className="mt-6 card p-6"><h2 className="font-heading text-2xl text-emerald">Join the team</h2><p>Volunteer across programmes, operations, and storytelling.</p></section></div>;
}
