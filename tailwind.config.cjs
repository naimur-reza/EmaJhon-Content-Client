/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fc2a70",
        
"secondary": "#afea7c",
        
"accent": "#f4a4c5",
        
"neutral": "#191627",
        
"base-100": "#E7E2E9",
        
"info": "#4CCDF0",
        
"success": "#24B277",
        
"warning": "#C29E0F",
        
"error": "#E75F71",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}