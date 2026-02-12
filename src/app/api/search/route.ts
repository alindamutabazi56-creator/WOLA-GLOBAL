import { searchSite } from '@/lib/content';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';
  return Response.json(searchSite(q).slice(0, 6));
}
