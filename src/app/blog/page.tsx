'use client';

import { useMemo, useState } from 'react';
import { posts } from '@/data/content';
import { PostCard } from '@/components/cards';
import { SectionTitle } from '@/components/section-title';

const categories = ['All', 'Female Spotlight', 'Society Updates', 'Thought Pieces', 'Events Recaps'];

export default function BlogPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => posts.filter((p) => (category === 'All' || p.category === category) && p.title.toLowerCase().includes(query.toLowerCase())), [category, query]);

  return (
    <div className="container-shell py-14">
      <SectionTitle title="Blog" subtitle="Female Spotlight, updates, thought pieces, and recap stories." />
      <div className="mb-5 flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className="rounded-full border border-muted px-4 py-2 text-sm">{c}</button>)}</div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" className="mb-5 w-full rounded-full border border-muted px-4 py-2" />
      <div className="grid gap-4 md:grid-cols-3">{filtered.map((post) => <PostCard key={post.id} post={post} />)}</div>
    </div>
  );
}
