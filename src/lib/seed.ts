import { Chapter, Event, GlobalSettings, Person, Post } from './types';

export const globalSettings: GlobalSettings = {
  taglineOptions: ['Lead Boldly. Build Afrika.', 'From Campus Chapters to Continental Change.'],
  ctas: { join: '/join', chapters: '/chapters' },
  socials: {
    instagram: 'https://instagram.com/wola',
    linkedin: 'https://linkedin.com/company/wola',
    x: 'https://x.com/wola'
  },
  footerLinks: [
    { label: 'About', href: '/about' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Partners', href: '/partners' }
  ],
  metrics: { chapters: 3, members: 420, events: 34, funds: '£18,000' },
  membershipShopUrl: 'https://example.com/membership',
  mission:
    'To empower Afrikan women with leadership, skills, and support networks that unlock transformative change.',
  vision:
    'An inter-university network where Afrikan women become institution builders and catalysts for brain gain.',
  values: ['Sisterhood', 'Excellence', 'Service', 'Agency', 'Integrity']
};

export const chapters: Chapter[] = [
  {
    id: 'c1', name: 'WOLA Nottingham', slug: 'nottingham', university: 'University of Nottingham', country: 'United Kingdom', city: 'Nottingham', status: 'active',
    description: 'Founding chapter focused on leadership labs and peer mentorship.', contacts: { email: 'nottingham@wola.org' }, socials: { instagram: 'https://instagram.com/wola_nott' }, leaders: ['Adaeze Okoro', 'Ama Mensah'], initiatives: ['Leadership Circles', 'Female Spotlight Live'], heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
  },
  {
    id: 'c2', name: 'WOLA Birmingham', slug: 'birmingham', university: 'University of Birmingham', country: 'United Kingdom', city: 'Birmingham', status: 'active',
    description: 'Career advancement and project incubator chapter.', contacts: { email: 'birmingham@wola.org' }, socials: { linkedin: 'https://linkedin.com/company/wola-bham' }, leaders: ['Zuri Adjei'], initiatives: ['Skills Sprint Week'], heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'
  },
  {
    id: 'c3', name: 'WOLA Manchester', slug: 'manchester', university: 'University of Manchester', country: 'United Kingdom', city: 'Manchester', status: 'launching',
    description: 'Launching chapter with focus on entrepreneurship pathways.', contacts: { email: 'manchester@wola.org' }, socials: {}, leaders: ['Nia Balogun'], initiatives: ['Founding Fellows Cohort'], heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216'
  }
];

export const events: Event[] = [
  { id: 'e1', title: 'Brain Gain Leadership Summit', slug: 'brain-gain-leadership-summit', start: '2026-04-19T09:00:00Z', end: '2026-04-19T15:00:00Z', location: 'Nottingham', description: 'A strategic summit on leadership, innovation, and reversing brain drain.', rsvpUrl: 'https://example.com/rsvp1', images: ['https://images.unsplash.com/photo-1515169067868-5387ec356754'], tags: ['Leadership'], isFeatured: true, chapterSlug: 'nottingham' },
  { id: 'e2', title: 'Female Spotlight Fireside', slug: 'female-spotlight-fireside', start: '2026-03-15T18:00:00Z', end: '2026-03-15T20:00:00Z', location: 'Birmingham', description: 'An intimate dialogue with women executives in STEM.', rsvpUrl: 'https://example.com/rsvp2', images: ['https://images.unsplash.com/photo-1468818438311-4bab781ab9b8'], tags: ['Female Spotlight'], isFeatured: true, chapterSlug: 'birmingham' },
  { id: 'e3', title: 'Community Fundraising Lab', slug: 'community-fundraising-lab', start: '2026-05-05T10:00:00Z', end: '2026-05-05T13:00:00Z', location: 'Manchester', description: 'Practical workshop on ethical fundraising and impact.', rsvpUrl: 'https://example.com/rsvp3', images: ['https://images.unsplash.com/photo-1489515217757-5fd1be406fef'], tags: ['Fundraising'], chapterSlug: 'manchester' },
  { id: 'e4', title: 'Project Incubator Demo Day', slug: 'project-incubator-demo-day', start: '2026-06-20T12:00:00Z', end: '2026-06-20T16:00:00Z', location: 'London', description: 'Teams present community-centred prototypes and partnerships.', rsvpUrl: 'https://example.com/rsvp4', images: ['https://images.unsplash.com/photo-1552664730-d307ca884978'], tags: ['Incubator'], chapterSlug: 'nottingham' }
];

export const posts: Post[] = [
  { id: 'p1', title: 'Female Spotlight: Amina on Building Health Equity', slug: 'female-spotlight-amina-health-equity', category: 'Female Spotlight', excerpt: 'Amina shares how data and empathy can redesign patient outcomes.', body: '## Why leadership matters\nAmina explains strategic compassion in health systems.', coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2', author: 'Editorial Team', publishedAt: '2026-02-10', tags: ['health', 'leadership'] },
  { id: 'p2', title: 'Female Spotlight: Kemi and Ethical Fintech', slug: 'female-spotlight-kemi-ethical-fintech', category: 'Female Spotlight', excerpt: 'Designing financial products with fairness at the core.', body: '## Fintech for good\nKemi outlines practical frameworks for inclusive products.', coverImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1', author: 'Editorial Team', publishedAt: '2026-02-18', tags: ['fintech'] },
  { id: 'p3', title: 'WOLA Launches Inter-University Leadership Pipeline', slug: 'wola-launches-inter-university-pipeline', category: 'Society Updates', excerpt: 'New track connects chapter leaders across the UK.', body: '## New pipeline\nCohorts now receive mentorship and project support.', coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', author: 'WOLA Comms', publishedAt: '2026-01-20', tags: ['updates'] },
  { id: 'p4', title: 'Brain Drain to Brain Gain: A Student Blueprint', slug: 'brain-drain-to-brain-gain-blueprint', category: 'Thought Pieces', excerpt: 'How student societies can seed national innovation.', body: '## Blueprint\nWe need ecosystems, not one-off events.', coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644', author: 'Ama Mensah', publishedAt: '2026-01-11', tags: ['brain gain'] },
  { id: 'p5', title: 'Event Recap: Leadership Summit 2025', slug: 'event-recap-leadership-summit-2025', category: 'Events Recaps', excerpt: 'Insights and commitments from our annual summit.', body: '## Recap\nMembers committed to measurable community goals.', coverImage: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a', author: 'Events Team', publishedAt: '2026-02-02', tags: ['events'] },
  { id: 'p6', title: 'Scaling Chapters with Governance Discipline', slug: 'scaling-chapters-with-governance-discipline', category: 'Thought Pieces', excerpt: 'Structures that preserve mission as growth accelerates.', body: '## Governance\nClear roles and values protect momentum.', coverImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', author: 'General Secretary', publishedAt: '2026-02-24', tags: ['governance'] }
];

export const team: Person[] = [
  { id: 't1', name: 'Adaeze Okoro', role: 'President', bio: 'Leads strategy and inter-chapter expansion.', headshot: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', socials: { linkedin: 'https://linkedin.com/in/adaeze' } },
  { id: 't2', name: 'Ama Mensah', role: 'Vice President', bio: 'Drives partnerships and programme quality.', headshot: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f', socials: { linkedin: 'https://linkedin.com/in/ama' } },
  { id: 't3', name: 'Nia Balogun', role: 'General Secretary', bio: 'Owns governance, operations, and chapter onboarding.', headshot: 'https://images.unsplash.com/photo-1544717305-2782549b5136', socials: {} }
];
