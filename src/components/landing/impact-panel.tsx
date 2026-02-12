import { Card } from './card';
import { ImpactData } from './types';

const labels = {
  eventsHosted: 'Events hosted',
  participantsReached: 'Participants reached',
  fundsRaised: 'Funds raised',
  partnerships: 'Partnerships'
} as const;

export function ImpactPanel({ impact }: { impact: ImpactData }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(impact.metrics).map(([key, value]) => (
          <Card key={key} className="p-5">
            <p className="text-sm text-[#6F5D86]">{labels[key as keyof typeof labels]}</p>
            <p className="mt-1 text-2xl font-bold text-[#2F1A4A]">{value}</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Card>
          <h3 className="text-lg font-semibold text-[#2F1A4A]">Highlights</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#3E2F52]">
            {impact.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C9A447]" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {impact.gallery.map((item) => (
            <Card key={item.caption} className="p-0">
              <div className="h-28 rounded-t-3xl bg-gradient-to-br from-[#E8DDF5] to-[#f7f2ff]" aria-hidden="true" />
              <p className="p-4 text-sm text-[#4B3A61]">{item.caption}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
