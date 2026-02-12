import Link from 'next/link';
import { globalSettings } from '@/lib/site';

export default function JoinPage() {
  return <div className="container-shell py-12 space-y-4"><h1 className="font-heading text-4xl text-emerald">Join / Membership</h1><p>Join for community, leadership training, project support, and strategic networks.</p><div className="card p-5"><h2 className="font-semibold">Membership tiers</h2><p>Standard member and leadership fellow pathways are configurable in CMS settings.</p><Link className="btn-primary mt-3" href={globalSettings.membershipShopUrl}>Go to membership shop</Link></div><div className="card p-5"><h2 className="font-semibold">FAQ</h2><p><strong>Who can join?</strong> Students and allies committed to WOLA values.</p><p><strong>Time commitment?</strong> Flexible with monthly touchpoints.</p></div></div>;
}
