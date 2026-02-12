import { notFound } from 'next/navigation';
import { cms } from '@/lib/cms';
import { formatDate } from '@/lib/utils';

export default async function EventDetail({ params }: { params: { slug: string } }) {
  const event = await cms.getEventBySlug(params.slug);
  if (!event) return notFound();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.start,
    endDate: event.end,
    location: { '@type': 'Place', name: event.location }
  };

  return (
    <div className="container-shell py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm uppercase text-gold">{event.tags.join(' · ')}</p>
      <h1 className="mt-2 text-4xl">{event.title}</h1>
      <p className="mt-3">{formatDate(event.start)} · {event.location}</p>
      <p className="mt-6 max-w-3xl">{event.description}</p>
      <div className="mt-6 flex gap-3"><a className="rounded-full bg-emerald px-5 py-2 text-white" href={event.rsvpUrl}>RSVP</a><a className="rounded-full border px-5 py-2" href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${event.title}`}>Add to calendar</a></div>
      <p className="mt-4 text-sm">Share: <a href="#">LinkedIn</a> · <a href="#">X</a></p>
      <section className="mt-10 rounded-xl2 bg-white p-6 shadow-soft"><h3>Photo highlights</h3><p className="text-sm">Media gallery placeholder with optimised images.</p></section>
    </div>
  );
}
