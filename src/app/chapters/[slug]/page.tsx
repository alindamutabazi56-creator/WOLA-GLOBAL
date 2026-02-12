import { notFound } from 'next/navigation';
import { cms } from '@/lib/cms';
import { SectionTitle } from '@/components/section-title';

export default async function ChapterDetail({ params }: { params: { slug: string } }) {
  const chapter = await cms.getChapterBySlug(params.slug);
  if (!chapter) return notFound();
  const people = (await cms.getPeople()).filter((p) => chapter.leaders.includes(p.id));
  const events = (await cms.getEvents()).filter((e) => e.chapterSlug === chapter.slug);

  return (
    <div className="container-shell py-14">
      <SectionTitle title={chapter.name} subtitle={chapter.description} />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl2 bg-white p-6 shadow-soft"><h3>Leadership team</h3><ul className="mt-3 space-y-2">{people.map((person) => <li key={person.id}>{person.name} — {person.role}</li>)}</ul></div>
        <div className="rounded-xl2 bg-white p-6 shadow-soft"><h3>Local initiatives</h3><ul className="mt-3 space-y-2">{chapter.initiatives.map((i) => <li key={i}>• {i}</li>)}</ul></div>
      </div>
      <section className="mt-10 rounded-xl2 bg-white p-6 shadow-soft"><h3>Events</h3><ul className="mt-3 space-y-2">{events.map((event) => <li key={event.id}>{event.title}</li>)}</ul></section>
      <section className="mt-10 rounded-xl2 bg-white p-6 shadow-soft"><h3>Contact</h3><p>{chapter.contacts.email}</p></section>
    </div>
  );
}
