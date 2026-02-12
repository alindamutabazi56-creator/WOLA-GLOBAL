import Link from 'next/link';
import { posts } from '@/content/data';

export default function BlogPage() {
  const categories = ['All', 'Female Spotlight', 'Society Updates', 'Thought Pieces', 'Events Recaps'];
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Blog</h1>
      <div className="flex flex-wrap gap-2">{categories.map((c) => <span key={c} className="rounded-full bg-white px-3 py-1 text-sm shadow-soft">{c}</span>)}</div>
      <div className="grid gap-4 md:grid-cols-2">{posts.map((p) => <article key={p.slug} className="rounded-xl2 bg-white p-5 shadow-soft"><p className="text-xs text-brand-emerald">{p.category}</p><h2 className="font-serif text-2xl">{p.title}</h2><p className="mt-2 text-sm">{p.excerpt}</p><Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-emerald">Read more →</Link></article>)}</div>
    </div>
  );
}
