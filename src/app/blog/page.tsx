'use client';

import Link from 'next/link';
import { useState } from 'react';
import { posts } from '@/lib/site';

const categories = ['All', 'Female Spotlight', 'Society Updates', 'Thought Pieces', 'Events Recaps'];

export default function BlogPage() {
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? posts : posts.filter((p) => p.category === cat);
  return <div className="container-shell py-12"><h1 className="font-heading text-4xl text-emerald">Blog</h1><div className="mt-4 flex flex-wrap gap-2">{categories.map((c) => <button key={c} className={`rounded-full border px-3 py-1 text-sm ${cat === c ? 'bg-emerald text-cream' : ''}`} onClick={() => setCat(c)}>{c}</button>)}</div><div className="mt-5 grid gap-4 md:grid-cols-2">{filtered.map((p) => <Link href={`/blog/${p.slug}`} key={p.id} className="card p-5"><p className="text-sm text-gold">{p.category}</p><h2 className="font-semibold">{p.title}</h2><p className="text-sm text-muted">{p.excerpt}</p></Link>)}</div></div>;
}
