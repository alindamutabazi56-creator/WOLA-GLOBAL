import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { people, posts } from '@/content/data';
import { JsonLd } from '@/components/json-ld';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} | WOLA Blog` : 'Post not found' };
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const author = people.find((p) => p.slug === post.authorSlug);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.publishedAt };

  return (
    <article className="space-y-6">
      <p className="text-xs text-brand-emerald">{post.category}</p>
      <h1 className="font-serif text-4xl">{post.title}</h1>
      <p>{post.excerpt}</p>
      <nav className="rounded bg-white p-4 shadow-soft"><h2 className="font-semibold">Table of contents</h2><ol className="list-decimal pl-6 text-sm"><li>Introduction</li><li>Core insight</li><li>Next steps</li></ol></nav>
      <blockquote className="border-l-4 border-brand-gold pl-4 italic">WOLA stories are built on lived leadership.</blockquote>
      <div className="prose max-w-none rounded-xl2 bg-white p-6 shadow-soft">
        {post.body.split('\n').map((line, i) => <p key={i}>{line}</p>)}
      </div>
      <section className="rounded-xl2 bg-white p-5 shadow-soft"><h2 className="font-serif text-xl">Author</h2><p>{author?.name} · {author?.role}</p><p className="text-sm">{author?.bio}</p></section>
      <section><h2 className="font-serif text-2xl">Related posts</h2><ul className="mt-2 list-disc pl-6">{related.map((r) => <li key={r.slug}><a href={`/blog/${r.slug}`} className="text-brand-emerald">{r.title}</a></li>)}</ul></section>
      <JsonLd data={articleJsonLd} />
    </article>
  );
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
