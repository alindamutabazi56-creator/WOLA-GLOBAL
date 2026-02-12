import { ContactForm } from '@/components/forms';
import { SectionTitle } from '@/components/section-title';

export default function PartnersPage() {
  return (
    <div className="container-shell py-14">
      <SectionTitle title="Partners / Support" subtitle="Collaborate to scale women-led impact across campuses and communities." />
      <section className="rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Sponsor deck</h3><p className="mt-2">Download our sponsor deck and partnership opportunities.</p><button className="mt-4 rounded-full border px-5 py-2">Download deck (placeholder)</button></section>
      <section className="mt-8 rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Donation CTA</h3><p className="mt-2">Funds support leadership training, chapter operations, and community initiatives with transparent reporting.</p></section>
      <section className="mt-8 rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Partner enquiry</h3><ContactForm /></section>
    </div>
  );
}
