/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        90: '5.625rem',
      },
      
      colors: {
        backdrop: '#121212',
        brand: '#1db953',
        highlighted: '#282828',
        link: '#b3b3b3',
        footer: '#181818',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
