import { SectionTitle } from '@/components/section-title';
import { globalSettings } from '@/data/content';
import { meta } from '@/lib/seo';

export const metadata = meta('About | WOLA', 'Mission, vision, values, and brain gain framework for Women Leaders of Afrika.');

const milestones = [
  ['2022', 'WOLA founded at the University of Nottingham.'],
  ['2024', 'Inter-university expansion model launched.'],
  ['2025', 'First chapter launch cohort across regions.'],
  ['2026', 'Brain Gain Leadership Summit launched.']
];

export default function AboutPage() {
  return (
    <div className="container-shell py-14">
      <SectionTitle title="About WOLA" subtitle="Women Leaders of Afrika is a movement building leadership pipelines and community impact." />
      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-xl2 bg-white p-5 shadow-soft"><h3>Mission</h3><p>{globalSettings.mission}</p></article>
        <article className="rounded-xl2 bg-white p-5 shadow-soft"><h3>Vision</h3><p>{globalSettings.vision}</p></article>
        <article className="rounded-xl2 bg-white p-5 shadow-soft"><h3>Values</h3><ul>{globalSettings.values.map((v) => <li key={v}>• {v}</li>)}</ul></article>
      </div>
      <section className="mt-10 rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">How we work</h3><p className="mt-2">Leadership training, project incubation, mentorship, and support networks aligned to measurable community development.</p></section>
      <section className="mt-10 rounded-xl2 border border-gold/40 bg-emerald p-6 text-white"><h3 className="text-2xl">Brain drain → brain gain</h3><p className="mt-2">We help members build globally relevant expertise while investing their talent into Afrika through projects, partnerships, and policy leadership.</p></section>
      <section className="mt-10">
        <h3 className="text-2xl">Timeline</h3>
        <div className="mt-4 space-y-3">{milestones.map(([y, text]) => <div key={y} className="rounded-xl2 bg-white p-4 shadow-soft"><p className="text-gold">{y}</p><p>{text}</p></div>)}</div>
      </section>
    </div>
  );
}
