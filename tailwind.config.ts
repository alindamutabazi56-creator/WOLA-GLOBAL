import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8F4EA',
        ink: '#101010',
        emerald: '#0D3B2E',
        gold: '#B68D40',
        muted: '#D9CBB3'
      },
      fontFamily: {
        heading: ['var(--font-playfair)'],
        body: ['var(--font-inter)']
      },
      boxShadow: {
        soft: '0 12px 32px rgba(16,16,16,0.08)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
