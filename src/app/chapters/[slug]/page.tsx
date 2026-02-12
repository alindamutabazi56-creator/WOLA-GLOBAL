import { notFound } from 'next/navigation';
import { chapters, events } from '@/content/data';

export default function ChapterDetail({ params }: { params: { slug: string } }) {
  const chapter = chapters.find((c) => c.slug === params.slug);
  if (!chapter) return notFound();
  const chapterEvents = events.filter((e) => e.chapterSlug === chapter.slug);
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-4xl">{chapter.name}</h1>
      <p>{chapter.description}</p>
      <p><strong>University:</strong> {chapter.university} · {chapter.city}, {chapter.country}</p>
      <section className="rounded-xl2 bg-white p-6 shadow-soft"><h2 className="font-serif text-2xl">Leadership team</h2><ul className="mt-2 list-disc pl-6">{chapter.leaders.map((l) => <li key={l}>{l}</li>)}</ul></section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft"><h2 className="font-serif text-2xl">Local initiatives</h2><ul className="mt-2 list-disc pl-6">{chapter.initiatives.map((i) => <li key={i}>{i}</li>)}</ul></section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft"><h2 className="font-serif text-2xl">Chapter events</h2><ul className="mt-2 list-disc pl-6">{chapterEvents.map((e) => <li key={e.slug}>{e.title}</li>)}</ul></section>
    </div>
  );
}

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}
