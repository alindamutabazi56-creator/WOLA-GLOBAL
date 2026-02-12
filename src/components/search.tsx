'use client';

import { useState } from 'react';

type Result = { type: string; title: string; href: string };

export function SiteSearch() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Result[]>([]);

  async function onChange(value: string) {
    setQ(value);
    if (value.length < 2) return setResults([]);
    const res = await fetch(`/api/search?q=${encodeURIComponent(value)}`);
    setResults(await res.json());
  }

  return (
    <div className="relative max-w-md">
      <input value={q} onChange={(e) => onChange(e.target.value)} placeholder="Search articles, events, chapters" className="w-full rounded-md border px-3 py-2" aria-label="Site search" />
      {results.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full rounded-md border bg-white p-2 shadow-soft">
          {results.map((r) => <li key={r.href}><a href={r.href} className="block rounded px-2 py-1 text-sm hover:bg-brand-cream">{r.title} <span className="text-xs text-brand-emerald">({r.type})</span></a></li>)}
        </ul>
      )}
    </div>
  );
}
