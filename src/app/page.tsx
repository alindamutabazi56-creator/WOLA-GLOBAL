'use client';

import { FormEvent, useMemo, useState } from 'react';
import { ChevronDown, Globe2, HandHeart, Landmark, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/landing/button';
import { Card } from '@/components/landing/card';
import { Section } from '@/components/landing/section';
import { ChapterCard } from '@/components/landing/chapter-card';
import { ImpactPanel } from '@/components/landing/impact-panel';
import { Chapter, ImpactData } from '@/components/landing/types';

const chapters: Chapter[] = [
  {
    id: 'nottingham',
    name: 'University of Nottingham',
    city: 'Nottingham',
    country: 'UK',
    signatureWork: ['Career confidence circles for Afrikan women students', 'Community wellness workshops and safe-space dialogues', 'Mentorship pairings with alumni and professionals']
  },
  {
    id: 'cardiff',
    name: 'Cardiff University',
    city: 'Cardiff',
    country: 'UK',
    signatureWork: ['Leadership skill labs and speaker evenings', 'Fundraising initiatives for women-led grassroots causes', 'Study-to-career transition coaching and peer support']
  },
  {
    id: 'makerere',
    name: 'Makerere University',
    city: 'Kampala',
    country: 'Uganda',
    signatureWork: ['Enterprise readiness workshops for young women', 'Campus advocacy for confidence and belonging', 'Neighbourhood volunteer days and school outreach']
  },
  {
    id: 'toronto-scarborough',
    name: 'University of Toronto Scarborough',
    city: 'Toronto',
    country: 'Canada',
    signatureWork: ['Networking forums connecting students to diaspora leaders', 'Financial literacy and self-advocacy sessions', 'Partnership events with local community organisations']
  },
  {
    id: 'coming-soon-1',
    name: 'Leeds Chapter (Coming Soon)',
    city: 'Leeds',
    country: 'UK',
    signatureWork: ['Mentorship', 'Campus engagement', 'Community projects']
  },
  {
    id: 'coming-soon-2',
    name: 'Ottawa Chapter (Coming Soon)',
    city: 'Ottawa',
    country: 'Canada',
    signatureWork: ['Leadership labs', 'Storytelling circles', 'Fundraising campaigns']
  }
];

const impactByChapter: ImpactData[] = [
  {
    chapterId: 'nottingham',
    metrics: { eventsHosted: '24', participantsReached: '1,120', fundsRaised: '£12,600', partnerships: '15' },
    highlights: ['Delivered a year-long sisterhood programme with monthly themed events.', 'Built cross-campus partnerships supporting women in leadership and enterprise.', 'Organised community volunteering drives benefiting local women and families.'],
    gallery: [{ caption: 'Leadership brunch with student ambassadors.' }, { caption: 'Community fundraiser and impact showcase evening.' }, { caption: 'Mentorship circle with alumni speakers.' }]
  },
  {
    chapterId: 'cardiff',
    metrics: { eventsHosted: '18', participantsReached: '860', fundsRaised: '£9,400', partnerships: '11' },
    highlights: ['Hosted confidence-building workshops for first-year Afrikan women students.', 'Ran talks with women leaders in policy, business, and media.', 'Coordinated chapter-wide fundraising for community education initiatives.'],
    gallery: [{ caption: 'Women in leadership panel discussion.' }, { caption: 'Peer mentorship launch session.' }, { caption: 'Community project planning workshop.' }]
  },
  {
    chapterId: 'makerere',
    metrics: { eventsHosted: '27', participantsReached: '1,540', fundsRaised: 'UGX 38M', partnerships: '17' },
    highlights: ['Trained emerging leaders through practical self-actualisation workshops.', 'Partnered with local organisations for women-focused community projects.', 'Supported youth outreach sessions in nearby schools and neighbourhoods.'],
    gallery: [{ caption: 'Community development day in Kampala.' }, { caption: 'Self-actualisation training and coaching.' }, { caption: 'Girls leadership outreach in local schools.' }]
  },
  {
    chapterId: 'toronto-scarborough',
    metrics: { eventsHosted: '21', participantsReached: '980', fundsRaised: 'CA$16,200', partnerships: '14' },
    highlights: ['Connected students with diaspora mentors across multiple sectors.', 'Hosted inclusion-centred networking events with partner organisations.', 'Launched practical finance and career-readiness sessions for members.'],
    gallery: [{ caption: 'Diaspora leadership networking night.' }, { caption: 'Financial wellness workshop for members.' }, { caption: 'Community partner planning meeting.' }]
  }
];

const filterOptions = ['All', 'UK', 'Uganda', 'Canada'] as const;

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<(typeof filterOptions)[number]>('All');
  const [selectedImpactChapter, setSelectedImpactChapter] = useState('nottingham');
  const [email, setEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const filteredChapters = useMemo(() => {
    const query = search.toLowerCase();
    return chapters.filter((chapter) => {
      const matchesSearch = `${chapter.name} ${chapter.city} ${chapter.country}`.toLowerCase().includes(query);
      const matchesFilter = filter === 'All' || chapter.country === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const activeImpact = impactByChapter.find((entry) => entry.chapterId === selectedImpactChapter) ?? impactByChapter[0];

  const selectImpact = (chapterId: string) => {
    if (!impactByChapter.find((entry) => entry.chapterId === chapterId)) {
      return;
    }
    setSelectedImpactChapter(chapterId);
    document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validEmail = /\S+@\S+\.\S+/.test(email);
    if (!validEmail) {
      setFormMessage('Please enter a valid email address.');
      return;
    }
    setFormMessage('Thank you for subscribing. We will keep you updated.');
    setEmail('');
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#241634]">
      <Navbar />

      <Section className="pt-16 sm:pt-20">
        <div className="rounded-3xl border border-[#E9DEF8] bg-gradient-to-br from-[#F9F5FF] via-white to-white p-8 shadow-[0_18px_40px_rgba(62,31,102,0.08)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5D2D91]">WOLA Global</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#2F1A4A] sm:text-5xl">WOLA Global</h1>
          <p className="mt-3 text-xl font-medium text-[#5D2D91]">“Empower a woman, empower a nation.”</p>
          <p className="mt-4 max-w-3xl text-base text-[#4B3A61] sm:text-lg">WOLA Global is the central platform connecting WOLA chapters worldwide, supporting Afrikan women’s leadership, self-actualisation, and community development.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#chapters">Explore Chapters</Button>
            <Button href="#get-involved" variant="outline">Start a Chapter</Button>
          </div>
          <div className="mt-10 grid gap-3 rounded-2xl border border-[#E8DDF5] bg-white p-4 sm:grid-cols-3">
            {[
              ['Chapters', '24+'],
              ['Countries', '10'],
              ['Events Hosted', '200+']
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-[#F0E8FA] p-4">
                <p className="text-sm text-[#6F5D86]">{label}</p>
                <p className="text-2xl font-semibold text-[#2F1A4A]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="chapters" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-[#2F1A4A]">Chapters across the world</h2>
        <p className="mt-3 text-[#4B3A61]">Find your local chapter and see what they’re building.</p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#3E2F52]">Search chapters</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by university, city, or country"
              className="w-full rounded-xl border border-[#DECDF1] px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter chapters by country">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`rounded-full border px-3 py-1.5 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91] ${
                  filter === option
                    ? 'border-[#5D2D91] bg-[#F4EEFB] text-[#5D2D91]'
                    : 'border-[#E2D4F2] text-[#5A4A6E] hover:border-[#5D2D91]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredChapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} onSelectImpact={selectImpact} />
          ))}
        </div>
      </Section>

      <Section id="our-work" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-[#2F1A4A]">What we do</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: 'Safe Space & Sisterhood',
              icon: ShieldCheck,
              description: 'We cultivate a trusted sisterhood where Afrikan women can grow, heal, and thrive together.',
              activities: ['Peer support circles and wellbeing conversations', 'Community talks centred on confidence and identity', 'Local social events that foster belonging and care']
            },
            {
              title: 'Leadership & Self-Actualisation',
              icon: Landmark,
              description: 'We equip members to lead with purpose through practical skill-building and personal development.',
              activities: ['Leadership workshops and personal branding sessions', 'Mentorship pathways with alumni and professionals', 'Career readiness talks and accountability groups']
            },
            {
              title: 'Community Development & Impact',
              icon: HandHeart,
              description: 'We turn shared ambition into meaningful action through projects that support communities.',
              activities: ['Fundraising campaigns for women-led initiatives', 'Volunteer programmes with local partner organisations', 'Community projects designed and led by chapter members']
            }
          ].map((item) => (
            <Card key={item.title}>
              <item.icon className="text-[#5D2D91]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-[#2F1A4A]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#4B3A61]">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#3E2F52]">
                {item.activities.map((activity) => (
                  <li key={activity} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C9A447]" aria-hidden="true" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="impact" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-[#2F1A4A]">What we’ve done, chapter by chapter</h2>

        <div className="mt-6 hidden flex-wrap gap-2 md:flex" role="tablist" aria-label="Chapter impact selector">
          {impactByChapter.map((item) => {
            const chapterName = chapters.find((chapter) => chapter.id === item.chapterId)?.name;
            return (
              <button
                key={item.chapterId}
                role="tab"
                aria-selected={selectedImpactChapter === item.chapterId}
                onClick={() => setSelectedImpactChapter(item.chapterId)}
                className={`rounded-full border px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91] ${
                  selectedImpactChapter === item.chapterId
                    ? 'border-[#5D2D91] bg-[#F4EEFB] text-[#5D2D91]'
                    : 'border-[#E2D4F2] text-[#5A4A6E]'
                }`}
              >
                {chapterName}
              </button>
            );
          })}
        </div>

        <div className="relative mt-6 md:hidden">
          <label htmlFor="chapter-selector" className="sr-only">Select chapter</label>
          <select
            id="chapter-selector"
            value={selectedImpactChapter}
            onChange={(event) => setSelectedImpactChapter(event.target.value)}
            className="w-full appearance-none rounded-xl border border-[#DECDF1] px-4 py-3 pr-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
          >
            {impactByChapter.map((item) => {
              const chapterName = chapters.find((chapter) => chapter.id === item.chapterId)?.name;
              return (
                <option key={item.chapterId} value={item.chapterId}>
                  {chapterName}
                </option>
              );
            })}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-3 text-[#5D2D91]" aria-hidden="true" />
        </div>

        <div className="mt-8">
          <ImpactPanel impact={activeImpact} />
        </div>
      </Section>

      <Section id="get-involved" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-[#2F1A4A]">Build with WOLA Global</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card>
            <Globe2 className="text-[#5D2D91]" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-[#2F1A4A]">Join a chapter</h3>
            <p className="mt-2 text-sm text-[#4B3A61]">Connect with a local chapter to learn, lead, and contribute to purposeful change.</p>
            <Button href="#chapters" className="mt-6">Join WOLA</Button>
          </Card>
          <Card>
            <Landmark className="text-[#5D2D91]" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-[#2F1A4A]">Start a chapter</h3>
            <p className="mt-2 text-sm text-[#4B3A61]">Bring WOLA to your campus or community and shape the next generation of leaders.</p>
            <Button href="#" variant="outline" className="mt-6">Start a Chapter</Button>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-[#2F1A4A]">Newsletter</h3>
            <p className="mt-2 text-sm text-[#4B3A61]">Get chapter updates, opportunities, and impact stories from across the network.</p>
            <form className="mt-4 space-y-3" onSubmit={handleSubscribe} noValidate>
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-[#3E2F52]">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-[#DECDF1] px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
                placeholder="you@example.com"
              />
              <Button type="submit" className="w-full">Subscribe</Button>
              {formMessage ? <p className="text-sm text-[#4B3A61]">{formMessage}</p> : null}
            </form>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
