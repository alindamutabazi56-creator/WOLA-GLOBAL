import { ContactForm } from '@/components/forms';

export default function PartnersPage() {
  return <div className="container-shell py-12 space-y-5"><h1 className="font-heading text-4xl text-emerald">Partners / Support</h1><section className="card p-6"><h2 className="font-semibold">Sponsor deck</h2><a href="#" className="text-emerald underline">Download teaser (placeholder)</a></section><section className="card p-6"><h2 className="font-semibold">Use of funds</h2><ul className="list-disc pl-5"><li>Leadership training bursaries</li><li>Chapter operations and governance</li><li>Community project grants</li></ul></section><ContactForm /></div>;
}
