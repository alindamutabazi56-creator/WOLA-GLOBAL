import { notFound } from 'next/navigation';
import { chapters, events } from '@/lib/site';

export default function ChapterDetailPage({ params }: { params: { slug: string } }) {
  const chapter = chapters.find((c) => c.slug === params.slug);
  if (!chapter) return notFound();
  const chapterEvents = events.filter((e) => e.chapterSlug === chapter.slug);

  return <div className="container-shell py-12 space-y-4"><h1 className="font-heading text-4xl text-emerald">{chapter.name}</h1><p>{chapter.description}</p><p><strong>Leadership:</strong> {chapter.leaders.join(', ')}</p><p><strong>Initiatives:</strong> {chapter.initiatives.join(', ')}</p><p><strong>Contact:</strong> {chapter.contacts.email}</p><section className="card p-5"><h2 className="font-semibold">Local events</h2><ul className="list-disc pl-5">{chapterEvents.map((e) => <li key={e.id}>{e.title}</li>)}</ul></section></div>;
}
