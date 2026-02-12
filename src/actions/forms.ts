'use server';

import { z } from 'zod';

const inboxSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  website: z.string().optional()
});

const newsletterSchema = z.object({
  email: z.string().email(),
  website: z.string().optional()
});

const rateMap = new Map<string, number>();
const WINDOW_MS = 60_000;

function limited(key: string) {
  const now = Date.now();
  const last = rateMap.get(key) ?? 0;
  if (now - last < WINDOW_MS) return true;
  rateMap.set(key, now);
  return false;
}

export async function submitContact(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsed = inboxSchema.safeParse(data);
  if (!parsed.success) return { ok: false, error: 'Please complete all fields correctly.' };
  if (parsed.data.website) return { ok: true, message: 'Thanks for your message.' };
  if (limited(parsed.data.email)) return { ok: false, error: 'Too many requests. Please wait a minute.' };
  return { ok: true, message: 'Thanks for contacting WOLA. We will reply shortly.' };
}

export async function submitNewsletter(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsed = newsletterSchema.safeParse(data);
  if (!parsed.success) return { ok: false, error: 'Enter a valid email address.' };
  if (parsed.data.website) return { ok: true, message: 'Subscribed.' };
  if (limited(parsed.data.email + '-newsletter')) return { ok: false, error: 'Please wait before trying again.' };
  return { ok: true, message: 'You are now on the WOLA newsletter list.' };
}
