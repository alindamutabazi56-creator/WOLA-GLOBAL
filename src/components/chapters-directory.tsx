'use client';

import { Chapter } from '@/lib/types';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export function ChaptersDirectory({ chapters }: { chapters: Chapter[] }) {
  const [country, setCountry] = useState('all');
  const [status, setStatus] = useState('all');
  const [view, setView] = useState<'list' | 'map'>('list');

  const filtered = useMemo(() => chapters.filter((c) => (country === 'all' || c.country === country) && (status === 'all' || c.status === status)), [chapters, country, status]);
  const countries = ['all', ...Array.from(new Set(chapters.map((c) => c.country)))];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <select aria-label="Filter by country" className="rounded border px-2 py-1" onChange={(e) => setCountry(e.target.value)}>
          {countries.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select aria-label="Filter by status" className="rounded border px-2 py-1" onChange={(e) => setStatus(e.target.value)}>
          <option value="all">all</option><option value="active">active</option><option value="launching">launching</option>
        </select>
        <button className="rounded border px-3 py-1" onClick={() => setView(view === 'list' ? 'map' : 'list')}>Switch to {view === 'list' ? 'map' : 'list'} view</button>
      </div>
      {view === 'map' ? (
        <div className="rounded-xl bg-white p-6 shadow-soft">
          <p className="text-sm">Map view (concept):</p>
          <ul className="mt-2 grid gap-2 md:grid-cols-3">{filtered.map((c) => <li key={c.slug} className="rounded bg-brand-cream p-2">📍 {c.city}, {c.country}</li>)}</ul>
        </div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {filtered.map((c) => (
            <li key={c.slug} className="rounded-xl bg-white p-5 shadow-soft">
              <p className="text-xs uppercase tracking-wide text-brand-emerald">{c.status}</p>
              <h3 className="font-serif text-xl">{c.name}</h3>
              <p className="text-sm">{c.university}</p>
              <p className="mt-2 text-sm">{c.description}</p>
              <Link href={`/chapters/${c.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-emerald">Visit chapter →</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
