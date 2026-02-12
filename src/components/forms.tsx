'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { chapterApplicationAction, contactAction, subscribeAction } from '@/app/actions';

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return <button className="rounded-full bg-emerald px-5 py-2 text-white" disabled={pending}>{pending ? 'Submitting…' : label}</button>;
}

export function NewsletterForm() {
  const [message, action] = useFormState(subscribeAction, '');
  return (
    <form className="mt-3 flex gap-2" action={action}>
      <input name="email" type="email" required placeholder="Your email" className="w-full rounded-full border border-muted bg-background px-4 py-2" />
      <input name="honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <SubmitButton label="Subscribe" />
      <span className="text-sm">{message}</span>
    </form>
  );
}

export function ContactForm() {
  const [message, action] = useFormState(contactAction, '');
  return (
    <form className="space-y-3" action={action}>
      <input name="name" required placeholder="Name" className="w-full rounded-xl border border-muted bg-white px-4 py-3" />
      <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border border-muted bg-white px-4 py-3" />
      <textarea name="message" required placeholder="Your message" className="h-40 w-full rounded-xl border border-muted bg-white px-4 py-3" />
      <input name="honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <SubmitButton label="Send" />
      <p>{message}</p>
    </form>
  );
}

export function ChapterApplicationForm() {
  const [message, action] = useFormState(chapterApplicationAction, '');
  return (
    <form className="grid gap-3" action={action}>
      <input name="name" required placeholder="Full name" className="rounded-xl border border-muted px-4 py-3" />
      <input name="university" required placeholder="University" className="rounded-xl border border-muted px-4 py-3" />
      <input name="country" required placeholder="Country" className="rounded-xl border border-muted px-4 py-3" />
      <input name="email" required type="email" placeholder="Email" className="rounded-xl border border-muted px-4 py-3" />
      <textarea name="motivation" required placeholder="Why do you want to start a chapter?" className="h-32 rounded-xl border border-muted px-4 py-3" />
      <input name="honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <SubmitButton label="Submit application" />
      <p>{message}</p>
    </form>
  );
}
