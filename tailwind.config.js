/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          // Colores personalizados para modo claro y oscuro
          primary: {
            light: '#3B82F6', // blue-500
            dark: '#60A5FA'   // blue-400
          },
          background: {
            light: '#F9FAFB', // gray-50
            dark: '#1F2937'   // gray-800
          },
          surface: {
            light: '#FFFFFF', // white
            dark: '#374151'   // gray-700
          }
        }
      },
    },
    plugins: [],
  }