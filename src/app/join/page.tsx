import { settings } from '@/content/data';

export default function JoinPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Join / Membership</h1>
      <p>Join a leadership community offering mentorship, project support, and lifelong networks.</p>
      <a href={settings.membershipShopURL} className="inline-block rounded bg-brand-emerald px-4 py-2 text-brand-cream">Go to membership shop</a>
      <section className="rounded-xl2 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl">FAQ</h2>
        <details className="mt-2"><summary>Who can join?</summary><p>Students and alumni aligned with WOLA values.</p></details>
        <details><summary>Time commitment</summary><p>Typically 2-4 hours weekly depending on role and programme.</p></details>
      </section>
    </div>
  );
}
