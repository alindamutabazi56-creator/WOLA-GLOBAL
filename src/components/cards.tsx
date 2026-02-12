import Link from 'next/link';
import Image from 'next/image';
import { Chapter, Event, Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link href={`/chapters/${chapter.slug}`} className="overflow-hidden rounded-xl2 border border-muted/60 bg-white shadow-soft">
      <Image src={chapter.heroImage} alt={chapter.name} width={500} height={280} className="h-48 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs uppercase text-gold">{chapter.status}</p>
        <h3 className="mt-1 text-xl">{chapter.name}</h3>
        <p className="mt-2 text-sm text-ink/75">{chapter.city}, {chapter.country}</p>
      </div>
    </Link>
  );
}

export function EventCard({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.slug}`} className="rounded-xl2 border border-muted/60 bg-white p-5 shadow-soft">
      <p className="text-xs uppercase text-gold">{event.tags.join(' · ')}</p>
      <h3 className="mt-1 text-xl">{event.title}</h3>
      <p className="mt-2 text-sm">{formatDate(event.start)} · {event.location}</p>
    </Link>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="rounded-xl2 border border-muted/60 bg-white p-5 shadow-soft">
      <p className="text-xs uppercase text-gold">{post.category}</p>
      <h3 className="mt-1 text-xl">{post.title}</h3>
      <p className="mt-2 text-sm text-ink/75">{post.excerpt}</p>
    </Link>
  );
}
