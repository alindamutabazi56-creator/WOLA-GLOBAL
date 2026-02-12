import { chapters, events, globalSettings, people, posts } from '@/data/content';

export const cms = {
  getGlobalSettings: async () => globalSettings,
  getChapters: async () => chapters,
  getChapterBySlug: async (slug: string) => chapters.find((c) => c.slug === slug),
  getEvents: async () => events,
  getEventBySlug: async (slug: string) => events.find((e) => e.slug === slug),
  getPosts: async () => posts,
  getPostBySlug: async (slug: string) => posts.find((p) => p.slug === slug),
  getPeople: async () => people,
  getPersonById: async (id: string) => people.find((p) => p.id === id)
};
