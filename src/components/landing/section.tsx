import { clsx } from 'clsx';

export function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={clsx('mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  );
}
