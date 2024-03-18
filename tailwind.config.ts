import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        skeleton: 'rgba(255,255,255,0.2)',
        layout: {
          primary: '#F2F3F6',
        },
        'blue-0': '#1B35BB',
        'gray-0': '#D9D9D9',
        'gray-1': '#686868',
        'white-0': '#FFFFFF',
      },
      skew: {
        '-20': '-20deg',
      },
      boxShadow: {
        skeleton: '0 0 30px 30px rgba(255,255,255,0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        skeleton: {
          '0%': { transform: 'translateX(-160%)' },
          '50%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(160%)' },
        },
      },
      fontFamily: {
        square: ['NanumSquareRound'],
      },
      animation: {
        rotate: 'rotate 1.5s linear infinite',
        skeleton: 'skeleton 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
