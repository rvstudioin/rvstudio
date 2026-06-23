export const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: 'var(--obsidian)',
          soft:    'var(--obsidian-soft)',
          muted:   'var(--obsidian-muted)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          light:   'var(--gold-light)',
          dim:     'var(--gold-dim)',
        },
        cream: {
          DEFAULT: 'var(--cream)',
          muted:   'var(--cream-muted)',
        },
        gray: {
          studio:  'var(--gray)',
          light:   'var(--gray-light)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1' }],
        'display-md': ['clamp(1.4rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],
        'eyebrow':    ['0.65rem', { lineHeight: '1', letterSpacing: '0.25em' }],
        'label':      ['0.7rem',  { lineHeight: '1', letterSpacing: '0.15em' }],
      },
    },
  },
  plugins: [],
};