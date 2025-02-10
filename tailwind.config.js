/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: '#0EA5E9',
          dark: '#0EA5E9' 
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          dark: '#8B5CF6'
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [import('@tailwindcss/typography')],
}

{/* colors: {
        primary: "#0EA5E9",  // Sky Blue
        secondary: "#8B5CF6", // Purple
        dark: "#0F172A",     // Dark Blue
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      } */}

