'use server';

import { headers } from 'next/headers';
import { limit } from '@/lib/rate-limit';
import { chapterApplicationSchema, contactSchema, newsletterSchema } from '@/lib/validation';

async function ipKey(prefix: string) {
  const h = headers();
  const ip = h.get('x-forwarded-for') ?? 'local';
  if (limit(`${prefix}:${ip}`)) throw new Error('Too many requests');
}

export async function subscribeAction(_: string, formData: FormData) {
  await ipKey('newsletter');
  const parsed = newsletterSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return 'Please enter a valid email.';
  return 'Thanks for subscribing.';
}

export async function contactAction(_: string, formData: FormData) {
  await ipKey('contact');
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return 'Please check your details and try again.';
  return 'Message sent successfully.';
}

export async function chapterApplicationAction(_: string, formData: FormData) {
  await ipKey('chapter');
  const parsed = chapterApplicationSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return 'Please complete all required fields.';
  return 'Application received.';
}
