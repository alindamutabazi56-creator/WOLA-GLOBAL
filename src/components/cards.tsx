import Image from 'next/image';
import Link from 'next/link';
import { Event, Post } from '@/lib/types';

export const EventCard = ({ event }: { event: Event }) => (
  <article className="overflow-hidden rounded-xl2 bg-white shadow-soft">
    <Image src={event.images[0]} width={800} height={400} alt={event.title} className="h-44 w-full object-cover" />
    <div className="p-4">
      <p className="text-xs text-brand-emerald">{new Date(event.start).toLocaleDateString('en-GB')}</p>
      <h3 className="font-serif text-xl">{event.title}</h3>
      <p className="mt-2 text-sm">{event.description}</p>
      <Link href={`/events/${event.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-emerald">View event →</Link>
    </div>
  </article>
);

export const PostCard = ({ post }: { post: Post }) => (
  <article className="overflow-hidden rounded-xl2 bg-white shadow-soft">
    <Image src={post.coverImage} width={800} height={400} alt={post.title} className="h-44 w-full object-cover" />
    <div className="p-4">
      <p className="text-xs text-brand-emerald">{post.category}</p>
      <h3 className="font-serif text-xl">{post.title}</h3>
      <p className="mt-2 text-sm">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-emerald">Read article →</Link>
    </div>
  </article>
);
