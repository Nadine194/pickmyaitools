/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'serif-display': ['"DM Serif Display"', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0f1419',
        'dark-surface': '#1a1f2e',
        'dark-border': '#2a2f3e',
        'accent-muted': '#6b7f99',
        'accent-soft': '#8b9db5',
      },
    },
  },
  plugins: [],
}
