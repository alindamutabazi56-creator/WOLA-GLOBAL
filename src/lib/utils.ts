import clsx from 'clsx';

export function cn(...inputs: Array<string | undefined | null | false>) {
  return clsx(inputs);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
