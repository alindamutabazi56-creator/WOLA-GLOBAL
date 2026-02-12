import { globalSettings } from '@/lib/site';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="container-shell py-12 space-y-8">
      <h1 className="font-heading text-4xl text-emerald">About WOLA</h1>
      <section className="grid gap-4 md:grid-cols-3">{['Mission', 'Vision', 'Values'].map((t, i) => <div className="card p-5" key={t}><h2 className="font-semibold">{t}</h2><p>{i === 0 ? globalSettings.mission : i === 1 ? globalSettings.vision : globalSettings.values.join(', ')}</p></div>)}</section>
      <section className="card p-6"><h2 className="font-heading text-2xl text-emerald">How we work</h2><p>Leadership training, project incubation, mentorship, and support networks that move members from potential to measurable impact.</p></section>
      <section className="card p-6"><h2 className="font-heading text-2xl text-emerald">Brain drain → brain gain</h2><p>We cultivate a brain gain mindset by helping members build opportunities, institutions, and partnerships connected to Afrikan progress.</p></section>
      <section className="card p-6"><h2 className="font-heading text-2xl text-emerald">Timeline</h2><ul className="list-disc pl-5"><li>2023: Founding at the University of Nottingham.</li><li>2024: First Female Spotlight series launched.</li><li>2025: Birmingham and Manchester chapter pathway announced.</li></ul></section>
    </div>
  );
}
