import { notFound } from 'next/navigation';
import Link from 'next/link';
import { events } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return notFound();
  return <div className="container-shell py-12 space-y-4"><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Event', name: event.title, startDate: event.start, endDate: event.end, location: event.location }} /><h1 className="font-heading text-4xl text-emerald">{event.title}</h1><p>{event.description}</p><p>{new Date(event.start).toLocaleString('en-GB')} - {new Date(event.end).toLocaleString('en-GB')}</p><p>{event.location}</p><div className="flex gap-3"><Link className="btn-primary" href={event.rsvpUrl}>RSVP</Link><a className="btn-secondary" href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}`}>Add to calendar</a></div><p className="text-sm text-muted">Share: copy this page URL to send to your network.</p></div>;
}
