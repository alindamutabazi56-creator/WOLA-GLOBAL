export default function ProgrammesPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Programmes</h1>
      <section className="grid gap-4 md:grid-cols-3">
        {['Foundation Track', 'Leadership Cohort', 'Community Impact Track'].map((t) => <article key={t} className="rounded-xl2 bg-white p-5 shadow-soft"><h2 className="font-serif text-xl">{t}</h2><p className="mt-2 text-sm">Structured workshops, mentorship, and measurable outputs.</p></article>)}
      </section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Signature initiatives</h2>
        <ul className="mt-2 list-disc pl-6"><li>Female Spotlight</li><li>Fireside chats</li><li>Skill workshops</li><li>Community fundraising</li></ul>
      </section>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Project incubator</h2>
        <p>Members propose projects aligned to their interests and career goals.</p>
        <pre className="mt-3 overflow-auto rounded bg-brand-cream p-3 text-sm">{`Template: Problem | Audience | Activities | Partners | 90-day outcomes | Budget`}</pre>
      </section>
    </div>
  );
}
