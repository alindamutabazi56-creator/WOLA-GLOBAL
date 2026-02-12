import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { describe, expect, it } from 'vitest';

describe('HomePage', () => {
  it('renders hero heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /Women Leaders of Afrika/i })).toBeInTheDocument();
  });
});
