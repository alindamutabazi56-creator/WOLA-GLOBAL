import { Chapter, ImpactData } from '@/components/landing/types';

export const networkStats = [
  { label: 'Chapters', value: '24+' },
  { label: 'Countries', value: '10' },
  { label: 'Events Hosted', value: '200+' }
] as const;

export const chapters: Chapter[] = [
  {
    id: 'nottingham',
    name: 'University of Nottingham',
    city: 'Nottingham',
    country: 'UK',
    signatureWork: [
      'Career confidence circles for Afrikan women students',
      'Community wellness workshops and safe-space dialogues',
      'Mentorship pairings with alumni and professionals'
    ]
  },
  {
    id: 'cardiff',
    name: 'Cardiff University',
    city: 'Cardiff',
    country: 'UK',
    signatureWork: [
      'Leadership skill labs and speaker evenings',
      'Fundraising initiatives for women-led grassroots causes',
      'Study-to-career transition coaching and peer support'
    ]
  },
  {
    id: 'makerere',
    name: 'Makerere University',
    city: 'Kampala',
    country: 'Uganda',
    signatureWork: [
      'Enterprise readiness workshops for young women',
      'Campus advocacy for confidence and belonging',
      'Neighbourhood volunteer days and school outreach'
    ]
  },
  {
    id: 'toronto-scarborough',
    name: 'University of Toronto Scarborough',
    city: 'Toronto',
    country: 'Canada',
    signatureWork: [
      'Networking forums connecting students to diaspora leaders',
      'Financial literacy and self-advocacy sessions',
      'Partnership events with local community organisations'
    ]
  }
];

export const workAreas = [
  {
    title: 'Safe Space & Sisterhood',
    description:
      'We cultivate a trusted sisterhood where Afrikan women can grow, heal, and thrive together.',
    activities: [
      'Peer support circles and wellbeing conversations',
      'Community talks centred on confidence and identity',
      'Local social events that foster belonging and care'
    ]
  },
  {
    title: 'Leadership & Self-Actualisation',
    description:
      'We equip members to lead with purpose through practical skill-building and personal development.',
    activities: [
      'Leadership workshops and personal branding sessions',
      'Mentorship pathways with alumni and professionals',
      'Career readiness talks and accountability groups'
    ]
  },
  {
    title: 'Community Development & Impact',
    description:
      'We turn shared ambition into meaningful action through projects that support communities.',
    activities: [
      'Fundraising campaigns for women-led initiatives',
      'Volunteer programmes with local partner organisations',
      'Community projects designed and led by chapter members'
    ]
  }
] as const;

export const impactByChapter: ImpactData[] = [
  {
    chapterId: 'nottingham',
    metrics: {
      eventsHosted: '24',
      participantsReached: '1,120',
      fundsRaised: '£12,600',
      partnerships: '15'
    },
    highlights: [
      'Delivered a year-long sisterhood programme with monthly themed events.',
      'Built cross-campus partnerships supporting women in leadership and enterprise.',
      'Organised community volunteering drives benefiting local women and families.'
    ],
    gallery: [
      { caption: 'Leadership brunch with student ambassadors.' },
      { caption: 'Community fundraiser and impact showcase evening.' },
      { caption: 'Mentorship circle with alumni speakers.' }
    ]
  },
  {
    chapterId: 'cardiff',
    metrics: {
      eventsHosted: '18',
      participantsReached: '860',
      fundsRaised: '£9,400',
      partnerships: '11'
    },
    highlights: [
      'Hosted confidence-building workshops for first-year Afrikan women students.',
      'Ran talks with women leaders in policy, business, and media.',
      'Coordinated chapter-wide fundraising for community education initiatives.'
    ],
    gallery: [
      { caption: 'Women in leadership panel discussion.' },
      { caption: 'Peer mentorship launch session.' },
      { caption: 'Community project planning workshop.' }
    ]
  },
  {
    chapterId: 'makerere',
    metrics: {
      eventsHosted: '27',
      participantsReached: '1,540',
      fundsRaised: 'UGX 38M',
      partnerships: '17'
    },
    highlights: [
      'Trained emerging leaders through practical self-actualisation workshops.',
      'Partnered with local organisations for women-focused community projects.',
      'Supported youth outreach sessions in nearby schools and neighbourhoods.'
    ],
    gallery: [
      { caption: 'Community development day in Kampala.' },
      { caption: 'Self-actualisation training and coaching.' },
      { caption: 'Girls leadership outreach in local schools.' }
    ]
  },
  {
    chapterId: 'toronto-scarborough',
    metrics: {
      eventsHosted: '21',
      participantsReached: '980',
      fundsRaised: 'CA$16,200',
      partnerships: '14'
    },
    highlights: [
      'Connected students with diaspora mentors across multiple sectors.',
      'Hosted inclusion-centred networking events with partner organisations.',
      'Launched practical finance and career-readiness sessions for members.'
    ],
    gallery: [
      { caption: 'Diaspora leadership networking night.' },
      { caption: 'Financial wellness workshop for members.' },
      { caption: 'Community partner planning meeting.' }
    ]
  }
];
