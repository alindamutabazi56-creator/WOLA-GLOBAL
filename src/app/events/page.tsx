import Link from 'next/link';
import { events } from '@/lib/site';

export default function EventsPage() {
  return <div className="container-shell py-12"><h1 className="font-heading text-4xl text-emerald">Events</h1><p className="mt-2 text-sm text-muted">Calendar month view can be layered with a calendar component. List view shown below.</p><div className="mt-5 grid gap-4 md:grid-cols-2">{events.map((e) => <Link key={e.id} href={`/events/${e.slug}`} className="card p-5"><h2 className="font-semibold">{e.title}</h2><p>{new Date(e.start).toLocaleDateString('en-GB')} · {e.location}</p></Link>)}</div></div>;
}
