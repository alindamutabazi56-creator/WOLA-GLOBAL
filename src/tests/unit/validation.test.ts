import { describe, expect, it } from 'vitest';
import { newsletterSchema } from '@/lib/validation';

describe('newsletter validation', () => {
  it('accepts valid payload', () => {
    expect(newsletterSchema.safeParse({ email: 'a@b.com', honey: '' }).success).toBe(true);
  });

  it('rejects honeypot spam', () => {
    expect(newsletterSchema.safeParse({ email: 'a@b.com', honey: 'bot' }).success).toBe(false);
  });
});
