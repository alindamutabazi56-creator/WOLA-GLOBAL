import { SectionTitle } from '@/components/section-title';
import { meta } from '@/lib/seo';

export const metadata = meta('Programmes | WOLA', 'Leadership and self-actualisation programmes for WOLA members.');

export default function ProgrammesPage() {
  return (
    <div className="container-shell py-14">
      <SectionTitle title="Programmes" subtitle="Leadership + self-actualisation pipeline." />
      <div className="grid gap-4 md:grid-cols-3">
        {['Foundations Track', 'Cohort Labs', 'Executive Workshops'].map((track) => <article key={track} className="rounded-xl2 bg-white p-5 shadow-soft"><h3>{track}</h3><p className="mt-2 text-sm">Structured learning and coaching for practical leadership growth.</p></article>)}
      </div>
      <section className="mt-10 rounded-xl2 bg-white p-6 shadow-soft">
        <h3 className="text-2xl">Signature initiatives</h3>
        <ul className="mt-3 space-y-1"><li>Female Spotlight</li><li>Fireside chats</li><li>Skill workshops</li><li>Community fundraising</li></ul>
      </section>
      <section className="mt-10 rounded-xl2 bg-white p-6 shadow-soft">
        <h3 className="text-2xl">Project incubator</h3>
        <p className="mt-2">Members propose projects aligned to career goals and local challenges.</p>
        <pre className="mt-4 overflow-auto rounded-lg bg-ink p-4 text-xs text-white">{`Template:\n- Problem statement\n- Beneficiaries\n- Delivery plan\n- Partnerships\n- Metrics`}</pre>
      </section>
    </div>
  );
}
