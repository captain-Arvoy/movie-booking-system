/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      leading: {
        'misc': 'line-height: 3px',
      },
      backgroundColor:{
        'primary': '#101014',
        'secondary': '#eeeeee'
      },
      textColor:{
        'primary': '#eeeeee',
        'secondary': '#101014'
      }
    },
  },
  plugins: [require("daisyui")],
}
