/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '400px',
      smOnly: { max: '767.98px' },
      md: '768px',
      mdOnly: { min: '768px', max: '1279.98px' },
      xl: '1280px',
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '18px',
          sm: '18px',
          md: '40px',
          xl: '22px',
        },
        minWidth: '400px',
        maxWidth: '1280px',
      },
    },
  },
  plugins: [],
};