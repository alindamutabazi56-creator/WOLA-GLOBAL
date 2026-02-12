import { MapPin } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Chapter } from './types';

export function ChapterCard({ chapter, onSelectImpact }: { chapter: Chapter; onSelectImpact: (id: string) => void }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold text-[#2F1A4A]">{chapter.name}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-[#5A4A6E]">
          <MapPin size={16} aria-hidden="true" />
          {chapter.city}, {chapter.country}
        </p>
      </div>
      <ul className="space-y-2 text-sm text-[#3E2F52]">
        {chapter.signatureWork.map((work) => (
          <li key={work} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C9A447]" aria-hidden="true" />
            <span>{work}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-auto" variant="outline" onClick={() => onSelectImpact(chapter.id)}>
        View chapter impact
      </Button>
    </Card>
  );
}
