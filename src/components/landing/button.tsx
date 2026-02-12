import Link from 'next/link';
import { clsx } from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'gold' | 'outline';
  className?: string;
};

const styles = {
  gold: 'bg-[#C9A447] text-white hover:bg-[#b08d38] border border-[#C9A447]',
  outline: 'border border-[#5D2D91] text-[#5D2D91] hover:bg-[#F4EEFB]'
};

export function Button({ children, href, onClick, type = 'button', variant = 'gold', className }: ButtonProps) {
  const sharedClass = clsx(
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5D2D91]',
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={sharedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={sharedClass}>
      {children}
    </button>
  );
}
