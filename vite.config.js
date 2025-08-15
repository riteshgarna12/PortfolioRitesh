import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
            first: 'hsl(271, 76%, 53%)',
            title: 'hsl(271, 4%, 26%)',
            text: 'hsl(271, 4%, 38%)',
            body: 'hsl(271, 4%, 99%)',
            container: 'hsl(271, 4%, 95%)',
            border: 'hsl(271, 4%, 91%)',
            whiteCustom: 'hsl(271, 4%, 100%)',
        },
        fontFamily: {
            body: ['"Montserrat Alternates"', 'sans-serif'],
            heading: ['"Tenor Sans"', 'sans-serif'],
        },
        fontSize: {
            h1: '3.5rem',
            h2: '3rem',
            h3: '1.5rem',
            large: '1.25rem',
            normal: '0.875rem',
            small: '0.813rem',
        },
        fontWeight: {
            500: '500',
            600: '600',
            700: '700',
            800: '800',
        },
      },
  },
  plugins: [tailwindcss(),react()],
}) 