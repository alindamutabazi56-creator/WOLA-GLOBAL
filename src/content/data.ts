import { Chapter, Event, GlobalSettings, Person, Post } from '@/lib/types';

export const settings: GlobalSettings = {
  heroTitle: 'Women Leaders of Afrika',
  tagline: 'From campus chapters to a continent-wide leadership movement.',
  taglineOptions: [
    'From campus chapters to a continent-wide leadership movement.',
    'Lead boldly. Build community. Transform Afrika.',
    'Where Afrikan women turn ambition into impact.'
  ],
  mission: 'WOLA empowers Afrikan women with leadership development, practical skills, and a support network to drive transformative change.',
  vision: 'An inter-university movement where Afrikan women shape institutions, communities, and economies through a brain gain mindset.',
  values: ['Courageous leadership', 'Collective growth', 'Service-led impact', 'Excellence with integrity'],
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' }
  ],
  footerLinks: [
    { label: 'About', href: '/about' },
    { label: 'Programmes', href: '/programmes' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' }
  ],
  metrics: [
    { label: 'Chapters', value: '3' },
    { label: 'Members served', value: '420+' },
    { label: 'Events hosted', value: '36' },
    { label: 'Funds raised', value: '£18,500' }
  ],
  membershipShopURL: 'https://example.com/membership'
};

export const chapters: Chapter[] = [
  {
    slug: 'nottingham',
    name: 'WOLA Nottingham',
    university: 'University of Nottingham',
    country: 'United Kingdom',
    city: 'Nottingham',
    status: 'active',
    description: 'Founding chapter focused on leadership labs, mentoring circles, and community fundraising.',
    contacts: { email: 'nottingham@wola.afrika' },
    socials: { instagram: 'https://instagram.com', linkedin: 'https://linkedin.com' },
    leaders: ['Amina Bello', 'Chiamaka Eze'],
    initiatives: ['Female Spotlight Live', 'Career Sprint Clinics'],
    heroImage: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1400&auto=format&fit=crop'
  },
  {
    slug: 'ghana-legon',
    name: 'WOLA Legon',
    university: 'University of Ghana',
    country: 'Ghana',
    city: 'Accra',
    status: 'active',
    description: 'Chapter centring entrepreneurship, policy dialogue, and member-led project incubation.',
    contacts: { email: 'legon@wola.afrika' },
    socials: { instagram: 'https://instagram.com' },
    leaders: ['Efua Mensah', 'Nana Adjoa'],
    initiatives: ['Startup Mentorship Pods', 'Community Research Week'],
    heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop'
  },
  {
    slug: 'nairobi',
    name: 'WOLA Nairobi',
    university: 'University of Nairobi',
    country: 'Kenya',
    city: 'Nairobi',
    status: 'launching',
    description: 'Launching chapter building partnerships across technology, civic leadership, and social impact.',
    contacts: { email: 'nairobi@wola.afrika' },
    socials: { linkedin: 'https://linkedin.com' },
    leaders: ['Wanjiku Otieno'],
    initiatives: ['Tech for Community Fellows'],
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop'
  }
];

export const events: Event[] = [
  {
    slug: 'female-spotlight-summit',
    title: 'Female Spotlight Summit',
    start: '2026-03-12T18:00:00Z',
    end: '2026-03-12T20:00:00Z',
    location: 'Nottingham Conference Centre',
    description: 'A fireside evening celebrating Afrikan women building inclusive institutions.',
    rsvpUrl: 'https://example.com/rsvp',
    images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop'],
    tags: ['Female Spotlight', 'Leadership'],
    isFeatured: true,
    chapterSlug: 'nottingham'
  },
  {
    slug: 'brain-gain-lab',
    title: 'Brain Gain Lab: Policy to Practice',
    start: '2026-04-06T17:00:00Z',
    end: '2026-04-06T19:00:00Z',
    location: 'University of Ghana - Great Hall',
    description: 'Interactive workshop on reversing brain drain through campus-led innovation.',
    rsvpUrl: 'https://example.com/rsvp-2',
    images: ['https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1400&auto=format&fit=crop'],
    tags: ['Workshop', 'Policy'],
    isFeatured: true,
    chapterSlug: 'ghana-legon'
  },
  {
    slug: 'wola-open-house',
    title: 'WOLA Open House',
    start: '2025-11-01T11:00:00Z',
    end: '2025-11-01T14:00:00Z',
    location: 'University Park Campus',
    description: 'Meet the committees and explore projects for the next cohort.',
    rsvpUrl: 'https://example.com/rsvp-3',
    images: ['https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop'],
    tags: ['Community'],
    isFeatured: false,
    chapterSlug: 'nottingham'
  },
  {
    slug: 'nairobi-launch-forum',
    title: 'Nairobi Chapter Launch Forum',
    start: '2026-05-10T16:00:00Z',
    end: '2026-05-10T19:00:00Z',
    location: 'University of Nairobi Main Hall',
    description: 'Launch dialogue on student leadership and local initiatives.',
    rsvpUrl: 'https://example.com/rsvp-4',
    images: ['https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1400&auto=format&fit=crop'],
    tags: ['Launch'],
    isFeatured: false,
    chapterSlug: 'nairobi'
  }
];

export const people: Person[] = [
  { slug: 'amina-bello', name: 'Amina Bello', role: 'President', committee: 'Executive', bio: 'Leads strategic partnerships and chapter growth.', headshot: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop', socials: { linkedin: 'https://linkedin.com' }, email: 'amina@wola.afrika', chapterSlug: 'nottingham' },
  { slug: 'chiamaka-eze', name: 'Chiamaka Eze', role: 'General Secretary', committee: 'Executive', bio: 'Drives operations and impact reporting.', headshot: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop', socials: { linkedin: 'https://linkedin.com' }, chapterSlug: 'nottingham' },
  { slug: 'efua-mensah', name: 'Efua Mensah', role: 'Programmes Lead', committee: 'Programmes', bio: 'Curates leadership tracks and workshops.', headshot: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop', socials: { linkedin: 'https://linkedin.com' }, chapterSlug: 'ghana-legon' }
];

export const posts: Post[] = [
  {
    slug: 'leading-with-purpose',
    title: 'Leading with Purpose: Why WOLA Exists',
    category: 'Thought Pieces',
    excerpt: 'A manifesto for leadership that is rooted in service and community power.',
    body: '## Leadership rooted in community\nWOLA exists to create a safe space where Afrikan women can lead boldly...\n\n> "A movement grows when each member grows."\n\n### Practical action\nWe connect students to mentors, internships, and peer accountability.',
    coverImage: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1400&auto=format&fit=crop',
    authorSlug: 'amina-bello',
    publishedAt: '2025-08-02',
    tags: ['Leadership', 'Community']
  },
  {
    slug: 'female-spotlight-ngo-founder',
    title: 'Female Spotlight: Building an Education NGO Across Borders',
    category: 'Female Spotlight',
    excerpt: 'A candid conversation on vision, discipline, and building institutions.',
    body: '## Spotlight profile\nOur latest spotlight features a founder who scaled impact from campus to continent.',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1400&auto=format&fit=crop',
    authorSlug: 'chiamaka-eze',
    publishedAt: '2025-07-18',
    tags: ['Female Spotlight']
  },
  {
    slug: 'female-spotlight-data-scientist',
    title: 'Female Spotlight: Data Science for Public Good',
    category: 'Female Spotlight',
    excerpt: 'How one alumna combines analytics and advocacy for local impact.',
    body: '## Data with dignity\nPublic-interest technology can strengthen local institutions when communities lead design.',
    coverImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1400&auto=format&fit=crop',
    authorSlug: 'efua-mensah',
    publishedAt: '2025-06-11',
    tags: ['Technology', 'Impact']
  },
  {
    slug: 'open-house-recap',
    title: 'Open House Recap: New Voices, New Projects',
    category: 'Events Recaps',
    excerpt: 'Highlights from our latest open house and project incubator pitch session.',
    body: '## Event highlights\nMembers pitched projects tackling health, civic access, and digital literacy.',
    coverImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1400&auto=format&fit=crop',
    authorSlug: 'amina-bello',
    publishedAt: '2025-05-01',
    tags: ['Events']
  },
  {
    slug: 'new-chapter-ghana',
    title: 'Society Update: WOLA Legon Launches',
    category: 'Society Updates',
    excerpt: 'Welcoming our new chapter in Ghana and announcing regional partnerships.',
    body: '## Expanding the movement\nWOLA Legon launches with mentorship pods and leadership circles.',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop',
    authorSlug: 'chiamaka-eze',
    publishedAt: '2025-04-08',
    tags: ['Chapters']
  },
  {
    slug: 'brain-gain-framework',
    title: 'Thought Piece: From Brain Drain to Brain Gain',
    category: 'Thought Pieces',
    excerpt: 'A practical framework for retaining and circulating Afrikan talent.',
    body: '## Brain gain mindset\nWOLA reframes migration through exchange, return pathways, and institution-building.',
    coverImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1400&auto=format&fit=crop',
    authorSlug: 'efua-mensah',
    publishedAt: '2025-03-15',
    tags: ['Brain Gain']
  }
];

export const testimonials = [
  { quote: 'WOLA gave me practical confidence to lead my first community project.', name: 'Member, Nottingham' },
  { quote: 'The mentorship network helped me secure my first policy internship.', name: 'Member, Legon' },
  { quote: 'It feels like home and a leadership accelerator in one.', name: 'Member, Nairobi' }
];

export const partners = ['PanAfrika Youth Forum', 'LeadHer Collective', 'Afrika Futures Lab'];

export const copyDeck = {
  mission: settings.mission,
  vision: settings.vision,
  values: settings.values,
  tierDescriptions: [
    'Safe space: belonging, confidence, and sisterhood.',
    'Self-actualisation: leadership training and skill development.',
    'Community development: projects that create measurable change.'
  ],
  snippets: [
    'Lead boldly.', 'Build institutions.', 'Grow together.', 'Brain gain in action.', 'From campus to continent.',
    'Stories of impact.', 'Mentorship that matters.', 'Projects with purpose.', 'Networked leadership.', 'WOLA is a movement.'
  ]
};
