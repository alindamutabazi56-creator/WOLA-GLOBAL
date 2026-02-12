'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContact, submitNewsletter } from '@/app/actions';

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return <button className="btn-primary" disabled={pending}>{pending ? 'Sending...' : label}</button>;
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, { ok: false, message: '' });
  return (
    <form action={formAction} className="card space-y-4 p-6">
      <input className="w-full rounded-lg border p-2" name="name" placeholder="Full name" required />
      <input className="w-full rounded-lg border p-2" name="email" type="email" placeholder="Email" required />
      <input className="hidden" name="organisation" tabIndex={-1} aria-hidden="true" />
      <textarea className="w-full rounded-lg border p-2" name="message" rows={5} placeholder="How can we help?" required />
      <SubmitButton label="Send message" />
      {state.message && <p className="text-sm text-emerald">{state.message}</p>}
    </form>
  );
}

export function NewsletterForm() {
  const [state, formAction] = useFormState(submitNewsletter, { ok: false, message: '' });
  return (
    <form action={formAction} className="card space-y-3 p-4">
      <input className="w-full rounded-lg border p-2" name="email" type="email" placeholder="Email for updates" required />
      <input className="hidden" name="company" tabIndex={-1} aria-hidden="true" />
      <SubmitButton label="Join newsletter" />
      {state.message && <p className="text-sm text-emerald">{state.message}</p>}
    </form>
  );
}
