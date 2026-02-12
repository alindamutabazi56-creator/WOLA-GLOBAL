import { EventCard, PostCard } from '@/components/cards';
import { AnimatedSection } from '@/components/animated-section';
import { SiteSearch } from '@/components/search';
import { copyDeck, partners, settings, testimonials } from '@/content/data';
import { getFeaturedEvents, getFeaturedPosts } from '@/lib/content';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="space-y-14">
      <section className="texture rounded-xl2 bg-brand-emerald px-8 py-16 text-brand-cream shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em]">WOLA movement</p>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl">{settings.heroTitle}</h1>
        <p className="mt-4 max-w-xl text-lg">{settings.tagline}</p>
        <div className="mt-8 flex gap-3">
          <a href="/join" className="rounded-md bg-brand-gold px-4 py-2 font-semibold text-brand-charcoal">Join WOLA</a>
          <a href="/chapters" className="rounded-md border border-brand-cream/50 px-4 py-2">Explore Chapters</a>
        </div>
        <div className="mt-6"><SiteSearch /></div>
      </section>

      <AnimatedSection><section className="grid gap-4 md:grid-cols-3">
        {copyDeck.tierDescriptions.map((tier) => (
          <article key={tier} className="rounded-xl2 bg-white p-5 shadow-soft">
            <h2 className="font-serif text-2xl">{tier.split(':')[0]}</h2>
            <p className="mt-2 text-sm">{tier.split(':')[1]}</p>
          </article>
        ))}
      </section></AnimatedSection>

      <section className="grid gap-6 rounded-xl2 bg-white p-6 shadow-soft md:grid-cols-2">
        <div><h2 className="font-serif text-3xl">Mission</h2><p className="mt-2">{settings.mission}</p></div>
        <div><h2 className="font-serif text-3xl">Vision</h2><p className="mt-2">{settings.vision}</p></div>
      </section>

      <section>
        <h2 className="font-serif text-3xl">Featured upcoming events</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">{featuredEvents.map((event) => <EventCard key={event.slug} event={event} />)}</div>
      </section>

      <section>
        <h2 className="font-serif text-3xl">Featured articles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">{featuredPosts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
      </section>

      <section className="grid gap-4 rounded-xl2 bg-white p-6 shadow-soft md:grid-cols-4">
        {settings.metrics.map((m) => <div key={m.label}><p className="font-serif text-3xl text-brand-emerald">{m.value}</p><p className="text-sm">{m.label}</p></div>)}
      </section>

      <AnimatedSection><section className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => <blockquote key={t.quote} className="rounded-xl2 bg-white p-5 shadow-soft"><p>“{t.quote}”</p><cite className="mt-2 block text-sm text-brand-emerald">{t.name}</cite></blockquote>)}
      </section></AnimatedSection>

      <section className="rounded-xl2 bg-brand-charcoal p-6 text-brand-cream">
        <h2 className="font-serif text-3xl">Partners</h2>
        <div className="mt-4 flex flex-wrap gap-3">{partners.map((p) => <span key={p} className="rounded-full bg-brand-cream/15 px-3 py-1 text-sm">{p}</span>)}</div>
      </section>
    </div>
  );
}
