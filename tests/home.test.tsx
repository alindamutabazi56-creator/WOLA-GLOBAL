import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('Home page', () => {
  it('renders hero headline', () => {
    render(<HomePage />);
    expect(screen.getByText(/movement shaping Afrikan women/i)).toBeInTheDocument();
  });
});
