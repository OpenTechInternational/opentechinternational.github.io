/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Alaskan-inspired colors
        'alaska': {
          'blue': '#1B3B6F', // Deep blue like Alaska's winter sky
          'light-blue': '#4A90E2', // Bright blue like Alaska's summer sky
          'gray': '#2C3E50', // Dark gray like Alaska's mountains
          'light-gray': '#ECF0F1', // Light gray like Alaska's snow
          'green': '#2ECC71', // Green like Alaska's summer forests
          'gold': '#F1C40F', // Gold like Alaska's midnight sun
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 