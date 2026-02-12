import { chapters } from '@/content/data';
import { ChaptersDirectory } from '@/components/chapters-directory';

export default function ChaptersPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Chapters</h1>
      <p>Explore the growing WOLA chapter network across Afrika and the diaspora.</p>
      <ChaptersDirectory chapters={chapters} />
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">Start a chapter</h2>
        <p className="mt-2">Eligibility: active students/alumni team, local mentor support, and a 12-month plan.</p>
        <ol className="mt-3 list-decimal pl-6 text-sm">
          <li>Submit intent and proposed leadership team.</li><li>Attend onboarding and governance briefing.</li><li>Run first pilot event and submit impact report.</li>
        </ol>
        <form className="mt-4 grid gap-2 md:max-w-xl">
          <input className="rounded border p-2" placeholder="Full name" />
          <input className="rounded border p-2" placeholder="University" />
          <textarea className="rounded border p-2" placeholder="Why do you want to start a chapter?" />
          <button className="rounded bg-brand-emerald px-4 py-2 text-brand-cream">Apply pathway</button>
        </form>
      </section>
    </div>
  );
}
