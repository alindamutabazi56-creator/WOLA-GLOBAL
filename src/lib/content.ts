import { chapters, events, people, posts, settings } from '@/content/data';

export const getFeaturedEvents = () => events.filter((e) => e.isFeatured);
export const getFeaturedPosts = () => posts.slice(0, 3);
export const getChapterBySlug = (slug: string) => chapters.find((c) => c.slug === slug);
export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);
export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
export const getPersonBySlug = (slug: string) => people.find((p) => p.slug === slug);

export const searchSite = (q: string) => {
  const term = q.toLowerCase();
  return [
    ...posts.filter((p) => p.title.toLowerCase().includes(term)).map((p) => ({ type: 'post', title: p.title, href: `/blog/${p.slug}` })),
    ...events.filter((e) => e.title.toLowerCase().includes(term)).map((e) => ({ type: 'event', title: e.title, href: `/events/${e.slug}` })),
    ...chapters.filter((c) => c.name.toLowerCase().includes(term) || c.country.toLowerCase().includes(term)).map((c) => ({ type: 'chapter', title: c.name, href: `/chapters/${c.slug}` }))
  ];
};

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Women Leaders of Afrika',
  url: 'https://wola.afrika',
  sameAs: settings.socialLinks.map((s) => s.url)
};
