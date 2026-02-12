import { ContactForm } from '@/components/forms';
import { SectionTitle } from '@/components/section-title';
import { globalSettings } from '@/data/content';

export default function ContactPage() {
  return (
    <div className="container-shell py-14">
      <SectionTitle title="Contact" subtitle="General enquiries, media outreach, and chapter support." />
      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Contact form</h3><ContactForm /></section>
        <section className="rounded-xl2 bg-white p-6 shadow-soft"><h3 className="text-2xl">Details</h3><p className="mt-2">General inbox: hello@wola.org</p><p>Press/media: media@wola.org</p><p>Main chapter location: University of Nottingham, Nottingham, UK</p><div className="mt-4 text-sm"><a href={globalSettings.socials.instagram}>Instagram</a> · <a href={globalSettings.socials.linkedin}>LinkedIn</a></div></section>
      </div>
    </div>
  );
}
