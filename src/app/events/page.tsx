'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { events } from '@/data/content';
import { formatDate } from '@/lib/utils';
import { SectionTitle } from '@/components/section-title';

export default function EventsPage() {
  const [mode, setMode] = useState<'month' | 'list'>('month');
  const [q, setQ] = useState('');
  const filtered = useMemo(() => events.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()) || e.tags.join(' ').toLowerCase().includes(q.toLowerCase())), [q]);
  const upcoming = filtered.filter((e) => new Date(e.start) >= new Date());
  const past = filtered.filter((e) => new Date(e.start) < new Date());

  return (
    <div className="container-shell py-14">
      <SectionTitle title="Events" subtitle="Calendar and list views, with archives and highlights." />
      <div className="mb-4 flex gap-2"><button className="rounded-full border px-4 py-2" onClick={() => setMode(mode === 'month' ? 'list' : 'month')}>Switch to {mode === 'month' ? 'list' : 'month'} view</button><input className="rounded-full border px-4 py-2" placeholder="Search events" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      {mode === 'month' ? <div className="rounded-xl2 bg-white p-6 shadow-soft">Month view placeholder with date grid and event chips.</div> : null}
      <h3 className="mt-8 text-2xl">Upcoming</h3>
      <div className="mt-3 grid gap-3">{upcoming.map((e) => <Link key={e.id} href={`/events/${e.slug}`} className="rounded-xl2 bg-white p-4 shadow-soft">{e.title} · {formatDate(e.start)} · {e.location}</Link>)}</div>
      <h3 className="mt-8 text-2xl">Past archive</h3>
      <div className="mt-3 grid gap-3">{past.map((e) => <Link key={e.id} href={`/events/${e.slug}`} className="rounded-xl2 bg-white p-4 shadow-soft">{e.title}</Link>)}</div>
    </div>
  );
}
