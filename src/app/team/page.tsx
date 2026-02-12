import { people } from '@/data/content';
import { SectionTitle } from '@/components/section-title';

const committees = ['President', 'VP', 'General Secretary', 'Editorial Team', 'Events Team', 'Sponsorship', 'Publicity', 'Task Forces'];

export default function TeamPage() {
  return (
    <div className="container-shell py-14">
      <SectionTitle title="Team" subtitle="Roles and committees powering WOLA's movement." />
      <div className="mb-8 flex flex-wrap gap-2">{committees.map((c) => <span key={c} className="rounded-full border border-muted px-3 py-1 text-sm">{c}</span>)}</div>
      <div className="grid gap-4 md:grid-cols-2">{people.map((member) => <article key={member.id} className="rounded-xl2 bg-white p-5 shadow-soft"><h3>{member.name}</h3><p className="text-sm text-gold">{member.role}</p><p className="mt-2 text-sm">{member.bio}</p><div className="mt-2 text-sm"><a href={member.socials.linkedin}>LinkedIn</a>{member.email ? <> · <a href={`mailto:${member.email}`}>Email</a></> : null}</div></article>)}</div>
      <section className="mt-10 rounded-xl2 bg-emerald p-6 text-white"><h3 className="text-2xl">Join the team</h3><p className="mt-2">Volunteer across editorial, programmes, partnerships, and operations committees.</p></section>
    </div>
  );
}
