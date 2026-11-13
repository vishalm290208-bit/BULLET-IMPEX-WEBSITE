/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF2F2',
          100: '#FDE8E8',
          200: '#FBD5D5',
          500: '#EF4444',
          600: '#DC2626',
          700: '#C81E1E',
          800: '#9B1C1C',
          900: '#771D1D',
          DEFAULT: '#C81E1E',
        },
        charcoal: {
          950: '#0C0D0E',
          900: '#141618',
          850: '#1A1D20',
          800: '#22252A',
          700: '#31353D',
          600: '#464C56',
          500: '#626A77',
        },
        stone: {
          50: '#FAF9F6',
          100: '#F4F2EC',
          200: '#EAE6DD',
          300: '#D9D3C7',
          400: '#B6ACA0',
          500: '#8C8276',
        },
        sage: {
          50: '#F2F7F4',
          100: '#E2EFE7',
          600: '#2E7D56',
          700: '#246344',
        }
      },
      fontFamily: {
        serif: ['"Georgia"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace']
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.03em',
      }
    },
  },
  plugins: [],
}
