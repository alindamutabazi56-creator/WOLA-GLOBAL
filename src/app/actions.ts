'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
  organisation: z.string().optional()
});

const lastSubmission = new Map<string, number>();

function isRateLimited(email: string) {
  const now = Date.now();
  const previous = lastSubmission.get(email) ?? 0;
  if (now - previous < 30_000) return true;
  lastSubmission.set(email, now);
  return false;
}

export async function submitContact(_: unknown, formData: FormData) {
  const data = {
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    message: String(formData.get('message') || ''),
    organisation: String(formData.get('organisation') || '')
  };

  if (data.organisation) return { ok: false, message: 'Spam detected.' };
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) return { ok: false, message: 'Please check the form details.' };
  if (isRateLimited(parsed.data.email)) return { ok: false, message: 'Please wait before sending again.' };

  return { ok: true, message: 'Thank you. We will be in touch shortly.' };
}

export async function submitNewsletter(_: unknown, formData: FormData) {
  const email = String(formData.get('email') || '');
  const trap = String(formData.get('company') || '');
  if (trap) return { ok: false, message: 'Spam detected.' };
  if (!z.string().email().safeParse(email).success) return { ok: false, message: 'Enter a valid email.' };
  return { ok: true, message: 'You are now subscribed.' };
}
