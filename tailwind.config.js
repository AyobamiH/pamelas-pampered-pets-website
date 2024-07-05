/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        
        'xs': '320px',   // Custom breakpoint for screens up to 320px
        'sm': '321px',   // Overriding the default sm breakpoint to start at 321px
        'md': '769px',   // Overriding the default md breakpoint to start at 769px
        'lg': '1201px',  // Overriding the default lg breakpoint to start at 1201px
      },
     fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
       animation: {
        'spin-3d': 'spin-3d 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-3d': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    }
  },
  plugins: [],
};

