import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honey: z.string().max(0)
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  honey: z.string().max(0)
});

export const chapterApplicationSchema = z.object({
  name: z.string().min(2),
  university: z.string().min(2),
  country: z.string().min(2),
  email: z.string().email(),
  motivation: z.string().min(20),
  honey: z.string().max(0)
});
