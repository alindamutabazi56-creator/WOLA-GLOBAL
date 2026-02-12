import { globalSettings } from '@/data/content';
import { SectionTitle } from '@/components/section-title';

const faq = [
  ['Who can join?', 'Students and recent graduates aligned with WOLA values.'],
  ['What is the time commitment?', 'Typically 2-4 hours weekly depending on programme.'],
  ['How do I get involved?', 'Join membership and choose chapter activities.']
];

export default function JoinPage() {
  return (
    <div className="container-shell py-14">
      <SectionTitle title="Join / Membership" subtitle="Community, leadership development, and project support." />
      <section className="rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Why join WOLA?</h3><ul className="mt-3 space-y-1"><li>• Strategic network of Afrikan women leaders</li><li>• Leadership and skills pipeline</li><li>• Mentorship and project incubation</li></ul></section>
      <section className="mt-8 rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Membership</h3><p className="mt-2">Student and alumni tiers can be configured in global settings.</p><a className="mt-4 inline-block rounded-full bg-emerald px-5 py-2 text-white" href={globalSettings.membershipShopURL}>Go to membership shop</a></section>
      <section className="mt-8 rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">FAQ</h3><div className="mt-3 space-y-3">{faq.map(([q, a]) => <details key={q} className="rounded-lg border border-muted p-3"><summary>{q}</summary><p className="mt-2 text-sm">{a}</p></details>)}</div></section>
    </div>
  );
}
