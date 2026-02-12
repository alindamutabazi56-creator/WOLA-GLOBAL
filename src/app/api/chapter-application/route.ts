import { chapterApplicationSchema } from '@/lib/validation';
import { limit } from '@/lib/rate-limit';

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'local';
  if (limit(`chapter:${ip}`)) return new Response('Too many requests', { status: 429 });
  const parsed = chapterApplicationSchema.safeParse(await req.json());
  if (!parsed.success) return new Response('Bad request', { status: 400 });
  return Response.json({ ok: true });
}
