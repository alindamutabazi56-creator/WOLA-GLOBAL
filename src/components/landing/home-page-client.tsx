'use client';

import { FormEvent, useMemo, useState } from 'react';
import { ChevronDown, Globe2, HandHeart, Landmark, ShieldCheck } from 'lucide-react';
import { chapters, impactByChapter, networkStats, workAreas } from '@/data/wola';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Button } from './button';
import { Card } from './card';
import { Section } from './section';
import { ChapterCard } from './chapter-card';
import { ImpactPanel } from './impact-panel';

const workIcons = [ShieldCheck, Landmark, HandHeart] as const;

export function HomePageClient() {
  const [search, setSearch] = useState('');
  const [selectedImpactChapter, setSelectedImpactChapter] = useState(chapters[0]?.id ?? '');
  const [email, setEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const filteredChapters = useMemo(() => {
    const query = search.toLowerCase();
    return chapters.filter((chapter) =>
      `${chapter.name} ${chapter.city} ${chapter.country}`.toLowerCase().includes(query)
    );
  }, [search]);

  const activeImpact =
    impactByChapter.find((entry) => entry.chapterId === selectedImpactChapter) ?? impactByChapter[0];

  const selectImpact = (chapterId: string) => {
    if (!impactByChapter.some((entry) => entry.chapterId === chapterId)) {
      return;
    }
    setSelectedImpactChapter(chapterId);
    document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validEmail = /\S+@\S+\.\S+/.test(email);
    setFormMessage(
      validEmail
        ? 'Thank you for subscribing. We will keep you updated.'
        : 'Please enter a valid email address.'
    );
    if (validEmail) {
      setEmail('');
    }
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#241634]">
      <Navbar />

      <Section className="pt-16 sm:pt-20">
        <div className="rounded-3xl border border-[#E9DEF8] bg-gradient-to-br from-[#F9F5FF] via-white to-white p-8 shadow-[0_18px_40px_rgba(62,31,102,0.08)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5D2D91]">WOLA Global</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#2F1A4A] sm:text-5xl">WOLA Global</h1>
          <p className="mt-3 text-xl font-medium text-[#5D2D91]">“Empower a woman, empower a nation.”</p>
          <p className="mt-4 max-w-3xl text-base text-[#4B3A61] sm:text-lg">
            WOLA Global is the central platform connecting WOLA chapters worldwide, supporting Afrikan
            women’s leadership, self-actualisation, and community development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#chapters">Explore Chapters</Button>
            <Button href="#get-involved" variant="outline">
              Start a Chapter
            </Button>
          </div>
          <div className="mt-10 grid gap-3 rounded-2xl border border-[#E8DDF5] bg-white p-4 sm:grid-cols-3">
            {networkStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[#F0E8FA] p-4">
                <p className="text-sm text-[#6F5D86]">{stat.label}</p>
                <p className="text-2xl font-semibold text-[#2F1A4A]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="chapters" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-[#2F1A4A]">Chapters across the world</h2>
        <p className="mt-3 text-[#4B3A61]">Find your local chapter and see what they’re building.</p>

        <div className="mt-6">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#3E2F52]">Search chapters</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by university, city, or country"
              className="w-full rounded-xl border border-[#DECDF1] px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {filteredChapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} onSelectImpact={selectImpact} />
          ))}
        </div>
      </Section>

      <Section id="our-work" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-[#2F1A4A]">What we do</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {workAreas.map((item, index) => {
            const Icon = workIcons[index];
            return (
              <Card key={item.title}>
                <Icon className="text-[#5D2D91]" aria-hidden="true" />
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
            );
          })}
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
          <label htmlFor="chapter-selector" className="sr-only">
            Select chapter
          </label>
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
            <p className="mt-2 text-sm text-[#4B3A61]">
              Connect with a local chapter to learn, lead, and contribute to purposeful change.
            </p>
            <Button href="#chapters" className="mt-6">
              Join WOLA
            </Button>
          </Card>
          <Card>
            <Landmark className="text-[#5D2D91]" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-[#2F1A4A]">Start a chapter</h3>
            <p className="mt-2 text-sm text-[#4B3A61]">
              Bring WOLA to your campus or community and shape the next generation of leaders.
            </p>
            <Button href="#get-involved" variant="outline" className="mt-6">
              Start a Chapter
            </Button>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-[#2F1A4A]">Newsletter</h3>
            <p className="mt-2 text-sm text-[#4B3A61]">
              Get chapter updates, opportunities, and impact stories from across the network.
            </p>
            <form className="mt-4 space-y-3" onSubmit={handleSubscribe} noValidate>
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-[#3E2F52]">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-[#DECDF1] px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D2D91]"
                placeholder="you@example.com"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
              {formMessage ? <p className="text-sm text-[#4B3A61]">{formMessage}</p> : null}
            </form>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
