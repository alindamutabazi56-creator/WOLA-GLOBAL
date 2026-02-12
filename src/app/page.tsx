'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { chapters, events, globalSettings, posts } from '@/lib/site';

export default function HomePage() {
  const featuredEvents = events.filter((e) => e.isFeatured).slice(0, 3);
  const featuredPosts = posts.slice(0, 3);

  return (
    <div>
      <section className="container-shell py-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-wide text-gold">Women Leaders of Afrika</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 max-w-3xl font-heading text-5xl text-emerald">A movement shaping Afrikan women to lead transformative change.</motion.h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{globalSettings.taglineOptions[0]}</p>
        <div className="mt-8 flex gap-4">
          <Link href={globalSettings.ctas.join} className="btn-primary">Join WOLA</Link>
          <Link href={globalSettings.ctas.chapters} className="btn-secondary">Explore Chapters</Link>
        </div>
      </section>

      <section className="container-shell grid gap-4 pb-12 md:grid-cols-3">
        {['Safe Space', 'Self-Actualisation', 'Community Development'].map((tier, i) => (
          <motion.article key={tier} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="card p-5">
            <h2 className="font-heading text-2xl text-emerald">{tier}</h2>
            <p className="mt-2 text-sm text-muted">{i === 0 ? 'A sisterhood where Afrikan women belong, heal, and gain confidence.' : i === 1 ? 'Leadership labs, mentorship, and skill workshops for practical growth.' : 'Projects and partnerships designed to serve communities and drive impact.'}</p>
          </motion.article>
        ))}
      </section>

      <section className="container-shell pb-12">
        <h2 className="font-heading text-3xl text-emerald">Mission & Vision</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5"><h3 className="font-semibold">Mission</h3><p>{globalSettings.mission}</p></div>
          <div className="card p-5"><h3 className="font-semibold">Vision</h3><p>{globalSettings.vision}</p></div>
        </div>
      </section>

      <section className="container-shell pb-12">
        <h2 className="font-heading text-3xl text-emerald">Featured Events</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">{featuredEvents.map((event) => <Link className="card p-4" key={event.id} href={`/events/${event.slug}`}><p className="text-sm text-gold">{event.location}</p><h3 className="font-semibold">{event.title}</h3></Link>)}</div>
      </section>

      <section className="container-shell pb-12">
        <h2 className="font-heading text-3xl text-emerald">Featured Articles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">{featuredPosts.map((post) => <Link className="card p-4" key={post.id} href={`/blog/${post.slug}`}><p className="text-sm text-gold">{post.category}</p><h3 className="font-semibold">{post.title}</h3></Link>)}</div>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-4 md:grid-cols-4">{Object.entries(globalSettings.metrics).map(([key, value]) => <div key={key} className="card p-4 text-center"><p className="text-2xl font-heading text-emerald">{value}</p><p className="text-sm capitalize text-muted">{key}</p></div>)}</div>
      </section>

      <section className="container-shell pb-12">
        <h2 className="font-heading text-3xl text-emerald">Testimonials</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <blockquote className="card p-5">“WOLA gave me a leadership identity and a practical pathway to build impact.” — Member, Nottingham</blockquote>
          <blockquote className="card p-5">“The network helped me turn uncertainty into confidence and service.” — Member, Birmingham</blockquote>
        </div>
      </section>

      <section className="container-shell pb-12">
        <h2 className="font-heading text-3xl text-emerald">Partners</h2>
        <div className="mt-3 flex flex-wrap gap-3">{['Afrika Futures Fund', 'Women in STEM UK', 'Impact Commons'].map((p) => <span className="card px-4 py-2" key={p}>{p}</span>)}</div>
      </section>
    </div>
  );
}
