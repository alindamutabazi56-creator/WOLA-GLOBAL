import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/json-ld';
import { events } from '@/content/data';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = events.find((e) => e.slug === params.slug);
  return { title: event ? `${event.title} | WOLA Events` : 'Event not found' };
}

export default function EventDetail({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return notFound();

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.start,
    endDate: event.end,
    location: { '@type': 'Place', name: event.location }
  };

  return (
    <article className="space-y-4">
      <h1 className="font-serif text-4xl">{event.title}</h1>
      <p>{new Date(event.start).toLocaleString('en-GB')} · {event.location}</p>
      <p>{event.description}</p>
      <a href={event.rsvpUrl} className="inline-block rounded bg-brand-emerald px-4 py-2 text-brand-cream">RSVP</a>
      <p className="text-sm">Share: <a href={`https://x.com/intent/post?text=${encodeURIComponent(event.title)}`}>X</a></p>
      <p className="text-sm">Add to calendar: <a href={event.rsvpUrl}>Google Calendar</a></p>
      <JsonLd data={eventJsonLd} />
    </article>
  );
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}
