import { notFound } from 'next/navigation';
import { cms } from '@/lib/cms';

function extractHeadings(markdown: string) {
  return markdown.split('\n').filter((line) => line.startsWith('###')).map((line) => line.replace('### ', ''));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await cms.getPostBySlug(params.slug);
  if (!post) return notFound();
  const author = await cms.getPersonById(post.authorId);
  const headings = extractHeadings(post.body);
  const related = (await cms.getPosts()).filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishedAt,
    author: author?.name
  };

  return (
    <article className="container-shell py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-xs uppercase text-gold">{post.category}</p>
      <h1 className="mt-2 text-4xl">{post.title}</h1>
      <p className="mt-3 max-w-3xl text-ink/80">{post.excerpt}</p>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_260px]">
        <div className="rounded-xl2 bg-white p-6 shadow-soft">
          {post.body.split('\n').map((line, i) => line.startsWith('###') ? <h3 key={i} className="mt-4 text-2xl">{line.replace('### ', '')}</h3> : <p key={i} className="mt-3">{line}</p>)}
          <blockquote className="mt-6 border-l-4 border-gold pl-4 italic">“Leadership grows where courage meets community.”</blockquote>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl2 bg-white p-4 shadow-soft"><h3 className="font-semibold">Table of contents</h3><ul className="mt-2 text-sm">{headings.map((h) => <li key={h}>• {h}</li>)}</ul></div>
          <div className="rounded-xl2 bg-white p-4 shadow-soft"><h3 className="font-semibold">Author</h3><p>{author?.name}</p><p className="text-sm text-ink/70">{author?.bio}</p></div>
          <div className="rounded-xl2 bg-white p-4 shadow-soft"><h3 className="font-semibold">Related posts</h3><ul className="mt-2 text-sm">{related.map((r) => <li key={r.id}>• {r.title}</li>)}</ul></div>
        </aside>
      </div>
    </article>
  );
}
