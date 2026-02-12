import { notFound } from 'next/navigation';
import { posts } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const related = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2);

  return <article className="container-shell py-12"><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, author: post.author, datePublished: post.publishedAt }} /><h1 className="font-heading text-4xl text-emerald">{post.title}</h1><p className="text-sm text-muted">{post.author} · {new Date(post.publishedAt).toLocaleDateString('en-GB')}</p><aside className="card mt-4 p-4"><p className="font-semibold">Contents</p><ul className="list-disc pl-5"><li>Overview</li><li>Key insights</li><li>Closing note</li></ul></aside><blockquote className="my-6 border-l-4 border-gold pl-4 italic">“Leadership is the discipline of turning values into systems.”</blockquote><p>{post.body}</p><div className="mt-6 card p-4"><p className="font-semibold">Author bio</p><p>{post.author} contributes to WOLA editorial storytelling and thought leadership.</p></div><div className="mt-6"><h2 className="font-semibold">Related posts</h2><ul className="list-disc pl-5">{related.map((r) => <li key={r.id}>{r.title}</li>)}</ul></div></article>;
}
