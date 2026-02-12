export type ChapterStatus = 'active' | 'launching';

export type Chapter = {
  id: string;
  name: string;
  slug: string;
  university: string;
  country: string;
  city: string;
  status: ChapterStatus;
  description: string;
  contacts: { email: string };
  socials: { instagram?: string; linkedin?: string };
  leaders: string[];
  initiatives: string[];
  heroImage: string;
};

export type Event = {
  id: string;
  title: string;
  slug: string;
  start: string;
  end: string;
  location: string;
  description: string;
  rsvpUrl: string;
  images: string[];
  tags: string[];
  isFeatured?: boolean;
  chapterSlug: string;
};

export type PostCategory = 'Female Spotlight' | 'Society Updates' | 'Thought Pieces' | 'Events Recaps';

export type Post = {
  id: string;
  title: string;
  slug: string;
  category: PostCategory;
  excerpt: string;
  body: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
};

export type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  headshot: string;
  socials: { linkedin?: string };
  email?: string;
  chapterSlug?: string;
};

export type GlobalSettings = {
  taglineOptions: string[];
  ctas: { join: string; chapters: string };
  socials: { instagram: string; linkedin: string; x: string };
  footerLinks: { label: string; href: string }[];
  metrics: { chapters: number; members: number; events: number; funds: string };
  membershipShopUrl: string;
  mission: string;
  vision: string;
  values: string[];
};
