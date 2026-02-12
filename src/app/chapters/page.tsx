'use client';

import { useMemo, useState } from 'react';
import { chapters } from '@/data/content';
import { ChapterCard } from '@/components/cards';
import { SectionTitle } from '@/components/section-title';
import { ChapterApplicationForm } from '@/components/forms';

export default function ChaptersPage() {
  const [country, setCountry] = useState('all');
  const [status, setStatus] = useState('all');
  const [view, setView] = useState<'map' | 'list'>('list');

  const filtered = useMemo(() => chapters.filter((c) => (country === 'all' || c.country === country) && (status === 'all' || c.status === status)), [country, status]);
  const countries = Array.from(new Set(chapters.map((c) => c.country)));

  return (
    <div className="container-shell py-14">
      <SectionTitle title="Chapters directory" subtitle="Filter by country and status, then explore chapter detail pages." />
      <div className="mb-4 flex flex-wrap gap-2">
        <select onChange={(e) => setCountry(e.target.value)} className="rounded-full border border-muted px-4 py-2"><option value="all">All countries</option>{countries.map((c) => <option key={c}>{c}</option>)}</select>
        <select onChange={(e) => setStatus(e.target.value)} className="rounded-full border border-muted px-4 py-2"><option value="all">All status</option><option value="active">Active</option><option value="launching">Launching</option></select>
        <button className="rounded-full border border-muted px-4 py-2" onClick={() => setView(view === 'list' ? 'map' : 'list')}>Toggle {view === 'list' ? 'Map' : 'List'} View</button>
      </div>
      {view === 'map' ? <div className="mb-6 rounded-xl2 bg-white p-6 shadow-soft">Map view placeholder for chapter coordinates and clustering.</div> : null}
      <div className="grid gap-4 md:grid-cols-3">{filtered.map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} />)}</div>
      <section className="mt-12 rounded-xl2 bg-white p-6 shadow-soft">
        <h3 className="text-2xl">Start a chapter</h3>
        <p className="mt-2">Eligibility: enrolled student lead, founding team of 3+, and commitment to WOLA values.</p>
        <ol className="my-4 list-decimal pl-5 text-sm"><li>Submit expression of interest</li><li>Attend launch orientation</li><li>Receive starter toolkit</li></ol>
        <ChapterApplicationForm />
      </section>
    </div>
  );
}
