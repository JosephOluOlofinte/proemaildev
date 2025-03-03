import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '390px',
      'xlmobile': '480px',
      'tablet': '640px',
      'xltablet': '768px',
      'laptop': '1024px',
      'lglaptop': '1280px',
      'desktop': '1920px', 
    },
    extend: {
      fontFamily: {
        'titleFont': ['Be Vietnam Pro', 'sans-serif',],
        'bodyFont': ['Figtree', 'sans-serif',],
      },
      colors: {
        'white90': '#E4E4E7',
        'white95': '#F1F1F3',
        'white97': '#F7F7F8',
        'white99': '#FCFCFD',
        'grey10': '#191919',
        'grey15': '#262626',
        'grey20': '#333333',
        'grey30': '#4C4C4D',
        'grey35': '#59595A',
        'grey40': '#656567',
        'grey60': '#98989A',
        'grey70': '#B3B3B3',
        'absoluteWhite': '#ffffff',
        'absoluteBlack': '#000000',
      },

      keyframes: {
        slide: {  
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
      },

      animation: {
        'hero-slide': 'slide 80s linear infinite',
      }

    },
  },
  plugins: [],
} satisfies Config;
