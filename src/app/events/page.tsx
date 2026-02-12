import Link from 'next/link';
import { events } from '@/content/data';

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => +new Date(a.start) - +new Date(b.start));
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Events</h1>
      <div className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Calendar (month + list)</h2>
        <p className="text-sm">List view shown below, month view can be connected to calendar data.</p>
      </div>
      <ul className="space-y-3">{sorted.map((e) => <li key={e.slug} className="rounded-xl2 bg-white p-5 shadow-soft"><p className="text-xs text-brand-emerald">{new Date(e.start).toLocaleString('en-GB')}</p><h2 className="font-serif text-2xl">{e.title}</h2><p>{e.location}</p><Link href={`/events/${e.slug}`} className="text-sm font-semibold text-brand-emerald">Event detail →</Link></li>)}</ul>
    </div>
  );
}
