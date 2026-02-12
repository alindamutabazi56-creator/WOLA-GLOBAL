import { Chapter, Event, GlobalSettings, Person, Post } from '@/lib/types';

export const globalSettings: GlobalSettings = {
  orgName: 'Women Leaders of Afrika',
  heroTitle: 'Women Leaders of Afrika',
  taglineOptions: [
    'Building bold Afrikan women leaders for lasting impact.',
    'From campus chapters to continental change.',
    'Reversing brain drain into brain gain, together.'
  ],
  ctas: { join: '/join', chapters: '/chapters' },
  mission: 'To empower Afrikan women with leadership development, practical skills, and strategic networks that unlock transformative community change.',
  vision: 'A thriving inter-university movement where Afrikan women lead institutions, shape policy, and invest talent back into Afrika.',
  values: ['Leadership with integrity', 'Collective growth', 'Pan-Afrikan solidarity', 'Service and impact'],
  socials: {
    instagram: 'https://instagram.com/wolaglobal',
    linkedin: 'https://linkedin.com/company/wolaglobal',
    x: 'https://x.com/wolaglobal'
  },
  metrics: { chapters: 3, members: 430, events: 28, fundsRaised: '£14,500' },
  membershipShopURL: 'https://example.com/wola-membership-shop',
  footerLinks: [
    { label: 'Privacy', href: '#' },
    { label: 'Safeguarding', href: '#' },
    { label: 'Constitution', href: '#' }
  ],
  partnerLogos: ['University of Nottingham', 'Afrika Futures Lab', 'Diaspora Women in Policy'],
  testimonials: [
    { quote: 'WOLA gave me language, confidence, and mentors to lead with purpose.', name: 'Amina, Nottingham' },
    { quote: 'The network feels like home and a launchpad at the same time.', name: 'Tariro, Birmingham Chapter' },
    { quote: 'Our chapter translated ideas into funded community projects.', name: 'Nandi, Leeds Chapter' }
  ]
};

export const chapters: Chapter[] = [
  { id: 'c1', slug: 'nottingham', name: 'WOLA Nottingham', university: 'University of Nottingham', country: 'United Kingdom', city: 'Nottingham', status: 'active', description: 'Founding chapter focused on leadership labs, Female Spotlight sessions, and community fundraising.', contacts: { email: 'nottingham@wola.org' }, socials: { instagram: '#', linkedin: '#' }, leaders: ['p1', 'p2'], initiatives: ['Fireside Chats', 'Mentorship Circles'], heroImage: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop' },
  { id: 'c2', slug: 'birmingham', name: 'WOLA Birmingham', university: 'University of Birmingham', country: 'United Kingdom', city: 'Birmingham', status: 'active', description: 'Growing chapter delivering skill workshops and policy-oriented thought circles.', contacts: { email: 'birmingham@wola.org' }, socials: { instagram: '#', linkedin: '#' }, leaders: ['p3'], initiatives: ['Career Sprints', 'Community Policy Forums'], heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop' },
  { id: 'c3', slug: 'accra-launch', name: 'WOLA Accra Launch Team', university: 'University of Ghana', country: 'Ghana', city: 'Accra', status: 'launching', description: 'Launch cohort piloting chapter governance and project incubation in West Afrika.', contacts: { email: 'accra@wola.org' }, socials: { instagram: '#', linkedin: '#' }, leaders: ['p4'], initiatives: ['Campus Mobilisation', 'Female Spotlight West Afrika'], heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop' }
];

export const people: Person[] = [
  { id: 'p1', name: 'Adaeze Okafor', role: 'President', bio: 'Leads strategy, chapter growth, and institutional partnerships.', headshot: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop', socials: { linkedin: '#' }, email: 'president@wola.org', chapterSlug: 'nottingham' },
  { id: 'p2', name: 'Lerato Maseko', role: 'General Secretary', bio: 'Coordinates operations and governance across committees.', headshot: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop', socials: { linkedin: '#' }, chapterSlug: 'nottingham' },
  { id: 'p3', name: 'Nyasha Dube', role: 'VP Programmes', bio: 'Designs leadership and self-actualisation tracks.', headshot: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', socials: { linkedin: '#' }, chapterSlug: 'birmingham' },
  { id: 'p4', name: 'Akosua Mensah', role: 'Launch Coordinator', bio: 'Leads chapter activation in Accra with local student groups.', headshot: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop', socials: { linkedin: '#' }, chapterSlug: 'accra-launch' }
];

export const events: Event[] = [
  { id: 'e1', slug: 'brain-gain-summit-2026', title: 'Brain Gain Leadership Summit 2026', start: '2026-03-16T17:00:00Z', end: '2026-03-16T20:00:00Z', location: 'University of Nottingham, Exchange Building', description: 'A flagship convening on reversing brain drain through women-led innovation and policy.', rsvpUrl: '#', images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'], tags: ['Summit', 'Leadership'], isFeatured: true, chapterSlug: 'nottingham' },
  { id: 'e2', slug: 'female-spotlight-dr-kamau', title: 'Female Spotlight: Dr Kamau in Conversation', start: '2026-04-05T18:00:00Z', end: '2026-04-05T19:30:00Z', location: 'Online', description: 'An intimate fireside chat on strategic leadership and diaspora collaboration.', rsvpUrl: '#', images: ['https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop'], tags: ['Female Spotlight'], isFeatured: true, chapterSlug: 'birmingham' },
  { id: 'e3', slug: 'chapter-launch-bootcamp-accra', title: 'Chapter Launch Bootcamp: Accra', start: '2026-05-12T09:00:00Z', end: '2026-05-12T14:00:00Z', location: 'Accra City Campus', description: 'Training for launch team leads on governance, partnerships, and member experience.', rsvpUrl: '#', images: ['https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop'], tags: ['Chapters'], isFeatured: false, chapterSlug: 'accra-launch' },
  { id: 'e4', slug: 'community-fundraiser-gala', title: 'Community Fundraiser Gala', start: '2025-11-20T18:00:00Z', end: '2025-11-20T22:00:00Z', location: 'Nottingham City Centre', description: 'Celebrating chapter impact and raising funds for student-led community projects.', rsvpUrl: '#', images: ['https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop'], tags: ['Fundraising'], isFeatured: false, chapterSlug: 'nottingham' }
];

export const posts: Post[] = [
  { id: 'b1', slug: 'female-spotlight-ama-boateng', title: 'Female Spotlight: Ama Boateng on Courageous Leadership', category: 'Female Spotlight', excerpt: 'Ama shares lessons on leading with clarity across borders.', body: '### Why representation matters\nLeadership is cultivated in community...', coverImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop', authorId: 'p1', publishedAt: '2026-01-10', tags: ['leadership', 'female spotlight'] },
  { id: 'b2', slug: 'female-spotlight-zanele', title: 'Female Spotlight: Zanele on Public Service', category: 'Female Spotlight', excerpt: 'A reflection on mentorship and public-interest careers.', body: '### Public leadership\nMentorship accelerates confidence...', coverImage: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=1200&auto=format&fit=crop', authorId: 'p3', publishedAt: '2026-01-22', tags: ['public service'] },
  { id: 'b3', slug: 'winter-term-society-update', title: 'Winter Term Society Update', category: 'Society Updates', excerpt: 'Highlights from committees and chapter operations.', body: '### This term in review\nWOLA committees delivered...', coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop', authorId: 'p2', publishedAt: '2026-02-02', tags: ['updates'] },
  { id: 'b4', slug: 'brain-gain-thought-piece', title: 'From Brain Drain to Brain Gain: A Student Blueprint', category: 'Thought Pieces', excerpt: 'How chapters can create talent loops into Afrika.', body: '### A practical framework\nStudents can lead talent return...', coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop', authorId: 'p1', publishedAt: '2026-02-09', tags: ['brain gain'] },
  { id: 'b5', slug: 'fireside-chat-recap', title: 'Fireside Chat Recap: Funding Women-Led Projects', category: 'Events Recaps', excerpt: 'Three practical insights from our latest chat.', body: '### Recap\nParticipants discussed fundraising models...', coverImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop', authorId: 'p4', publishedAt: '2026-02-11', tags: ['events'] },
  { id: 'b6', slug: 'chapter-launch-playbook', title: 'Chapter Launch Playbook', category: 'Society Updates', excerpt: 'A concise guide for new university chapters.', body: '### Launch sequence\nSecure anchors, define governance...', coverImage: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop', authorId: 'p3', publishedAt: '2026-02-12', tags: ['chapters'] }
];
