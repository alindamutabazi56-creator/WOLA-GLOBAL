export type ChapterStatus = 'active' | 'launching';

export interface Chapter {
  id: string;
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
}

export interface Event {
  id: string;
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
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  category: 'Female Spotlight' | 'Society Updates' | 'Thought Pieces' | 'Events Recaps';
  excerpt: string;
  body: string;
  coverImage: string;
  authorId: string;
  publishedAt: string;
  tags: string[];
}

export interface Person {
  id: string;
  name: string;
  role: string;
  bio: string;
  headshot: string;
  socials: { linkedin?: string };
  email?: string;
  chapterSlug?: string;
}

export interface GlobalSettings {
  orgName: string;
  heroTitle: string;
  taglineOptions: string[];
  ctas: { join: string; chapters: string };
  mission: string;
  vision: string;
  values: string[];
  socials: { instagram: string; linkedin: string; x: string };
  metrics: { chapters: number; members: number; events: number; fundsRaised: string };
  membershipShopURL: string;
  footerLinks: { label: string; href: string }[];
  partnerLogos: string[];
  testimonials: { quote: string; name: string }[];
}
