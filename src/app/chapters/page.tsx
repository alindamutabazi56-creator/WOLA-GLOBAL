'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { chapters } from '@/lib/site';

export default function ChaptersPage() {
  const [country, setCountry] = useState('all');
  const [status, setStatus] = useState('all');
  const filtered = useMemo(() => chapters.filter((c) => (country === 'all' || c.country === country) && (status === 'all' || c.status === status)), [country, status]);

  return (
    <div className="container-shell py-12">
      <h1 className="font-heading text-4xl text-emerald">Chapters Directory</h1>
      <div className="mt-4 flex gap-3">
        <select className="rounded border p-2" onChange={(e) => setCountry(e.target.value)}><option value="all">All countries</option><option value="United Kingdom">United Kingdom</option></select>
        <select className="rounded border p-2" onChange={(e) => setStatus(e.target.value)}><option value="all">All statuses</option><option value="active">Active</option><option value="launching">Launching</option></select>
      </div>
      <p className="mt-4 text-sm text-muted">Map view is represented via location metadata and is ready for map library integration.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">{filtered.map((c) => <Link className="card p-5" href={`/chapters/${c.slug}`} key={c.id}><h2 className="font-semibold">{c.name}</h2><p>{c.university} · {c.city}</p><span className="text-sm text-gold">{c.status}</span></Link>)}</div>
      <section className="mt-8 card p-6"><h2 className="font-heading text-2xl text-emerald">Start a chapter</h2><p>Eligibility: enrolled student, founding team of 3+, and local faculty sponsor.</p><ol className="list-decimal pl-5"><li>Submit application.</li><li>Attend onboarding call.</li><li>Complete governance training.</li></ol><form className="mt-3 grid gap-2"><input className="rounded border p-2" placeholder="Name"/><input className="rounded border p-2" placeholder="University"/><input className="rounded border p-2" placeholder="Email"/><button className="btn-primary w-fit" type="button">Apply</button></form></section>
    </div>
  );
}
