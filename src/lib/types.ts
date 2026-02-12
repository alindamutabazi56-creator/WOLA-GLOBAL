export type ChapterStatus = 'active' | 'launching';

export type Chapter = {
  slug: string;
  name: string;
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
  slug: string;
  title: string;
  start: string;
  end: string;
  location: string;
  description: string;
  rsvpUrl: string;
  images: string[];
  tags: string[];
  isFeatured: boolean;
  chapterSlug: string;
};

export type PostCategory = 'Female Spotlight' | 'Society Updates' | 'Thought Pieces' | 'Events Recaps';
export type Post = {
  slug: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  body: string;
  coverImage: string;
  authorSlug: string;
  publishedAt: string;
  tags: string[];
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  committee: string;
  bio: string;
  headshot: string;
  socials: { linkedin?: string };
  email?: string;
  chapterSlug?: string;
};

export type GlobalSettings = {
  heroTitle: string;
  tagline: string;
  taglineOptions: string[];
  mission: string;
  vision: string;
  values: string[];
  socialLinks: { name: string; url: string }[];
  footerLinks: { label: string; href: string }[];
  metrics: { label: string; value: string }[];
  membershipShopURL: string;
};
