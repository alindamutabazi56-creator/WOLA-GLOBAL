const map = new Map<string, { count: number; at: number }>();

export function limit(key: string, max = 5, windowMs = 60_000) {
  const current = map.get(key);
  const now = Date.now();
  if (!current || now - current.at > windowMs) {
    map.set(key, { count: 1, at: now });
    return false;
  }
  current.count += 1;
  current.at = now;
  map.set(key, current);
  return current.count > max;
}
