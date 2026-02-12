import { settings } from '@/content/data';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">About WOLA</h1>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Mission, vision, values</h2>
        <p className="mt-2">{settings.mission}</p>
        <p className="mt-2">{settings.vision}</p>
        <ul className="mt-3 list-disc pl-6">{settings.values.map((v) => <li key={v}>{v}</li>)}</ul>
      </section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">How we work</h2>
        <p>Leadership training, project incubation, mentorship, and a trusted support network form our operating model.</p>
      </section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Brain drain → brain gain</h2>
        <p>WOLA reframes the narrative: we build pathways for Afrikan women to circulate knowledge, invest skills locally, and create institutions that retain talent.</p>
      </section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Milestones</h2>
        <ol className="mt-3 space-y-2 border-l pl-4">
          <li><strong>2023:</strong> Founding chapter launched in Nottingham.</li>
          <li><strong>2024:</strong> Female Spotlight became a flagship initiative.</li>
          <li><strong>2025:</strong> Legon chapter launched and network strategy released.</li>
          <li><strong>2026:</strong> Nairobi chapter launch and pan-African partnerships expansion.</li>
        </ol>
      </section>
    </div>
  );
}
