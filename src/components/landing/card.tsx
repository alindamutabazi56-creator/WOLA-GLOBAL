import { clsx } from 'clsx';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <article className={clsx('rounded-3xl border border-[#E8DDF5] bg-white p-6 shadow-[0_12px_35px_rgba(40,16,68,0.08)]', className)}>{children}</article>;
}
