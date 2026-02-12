import { cms } from '@/lib/cms';
import { ChapterCard, EventCard, PostCard } from '@/components/cards';
import { SectionTitle } from '@/components/section-title';
import { NewsletterForm } from '@/components/forms';
import { AnimatedReveal } from '@/components/animated-reveal';

export default async function HomePage() {
  const [settings, chapters, events, posts] = await Promise.all([
    cms.getGlobalSettings(), cms.getChapters(), cms.getEvents(), cms.getPosts()
  ]);
  return (
    <div>
      <section className="container-shell py-16 md:py-24">
        <p className="text-sm uppercase tracking-widest text-gold">A movement, not just a society</p>
        <h1 className="mt-4 text-5xl md:text-7xl">{settings.heroTitle}</h1>
        <p className="mt-4 max-w-2xl text-xl text-ink/80">{settings.taglineOptions[0]}</p>
        <div className="mt-8 flex gap-3">
          <a href={settings.ctas.join} className="rounded-full bg-emerald px-6 py-3 text-white">Join WOLA</a>
          <a href={settings.ctas.chapters} className="rounded-full border border-emerald px-6 py-3 text-emerald">Explore Chapters</a>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Mission & Vision" />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Mission</h3><p className="mt-3">{settings.mission}</p></article>
          <article className="rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Vision</h3><p className="mt-3">{settings.vision}</p></article>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Our three-tier story" subtitle="Safe space, self-actualisation, and community development." />
        <div className="grid gap-4 md:grid-cols-3">
          {['Safe space', 'Self-actualisation', 'Community development'].map((tier, i) => (
            <AnimatedReveal key={tier} delay={i * 0.06}>
              <div className="rounded-xl2 border border-muted/70 bg-white p-5 shadow-soft">
                <h3 className="text-xl">{tier}</h3>
                <p className="mt-2 text-sm text-ink/80">We cultivate confident leaders through curated programmes, mentorship, and impact projects.</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Featured events" />
        <div className="grid gap-4 md:grid-cols-2">{events.filter((e) => e.isFeatured).map((event) => <EventCard key={event.id} event={event} />)}</div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Featured articles" subtitle="Including Female Spotlight." />
        <div className="grid gap-4 md:grid-cols-3">{posts.slice(0, 3).map((post) => <PostCard key={post.id} post={post} />)}</div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Impact at a glance" />
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-xl2 bg-white p-5 text-center shadow-soft"><p className="text-4xl">{settings.metrics.chapters}</p><p>Chapters</p></div>
          <div className="rounded-xl2 bg-white p-5 text-center shadow-soft"><p className="text-4xl">{settings.metrics.members}</p><p>Members served</p></div>
          <div className="rounded-xl2 bg-white p-5 text-center shadow-soft"><p className="text-4xl">{settings.metrics.events}</p><p>Events hosted</p></div>
          <div className="rounded-xl2 bg-white p-5 text-center shadow-soft"><p className="text-4xl">{settings.metrics.fundsRaised}</p><p>Funds raised</p></div>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Chapters" />
        <div className="grid gap-4 md:grid-cols-3">{chapters.map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} />)}</div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Testimonials" />
        <div className="grid gap-4 md:grid-cols-3">{settings.testimonials.map((t) => <blockquote key={t.name} className="rounded-xl2 bg-white p-5 shadow-soft">“{t.quote}”<footer className="mt-3 text-sm text-ink/70">— {t.name}</footer></blockquote>)}</div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle title="Partners" />
        <div className="grid gap-4 md:grid-cols-3">{settings.partnerLogos.map((logo) => <div key={logo} className="rounded-xl2 border border-dashed border-muted bg-white p-6 text-center">{logo}</div>)}</div>
      </section>

      <section className="container-shell py-10">
        <h2 className="text-2xl">Newsletter</h2>
        <NewsletterForm />
      </section>
    </div>
  );
}
