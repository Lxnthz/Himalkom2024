/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        changa: ["Changa One", "sans-serif"],
        sports: ["Sports World", "sans-serif"],
      },
      textShadow: {
        'black': '4px 5px #040404',
      },
      textStrokeWidth: {
        '2': '2px',
      },
      textStrokeColor: {
        'black': '#000000',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      // Add text shadow utilities
      addUtilities({
        '.text-shadow-black': {
          textShadow: theme('textShadow.black'),
        },
      }, ['responsive', 'hover']);
      
      // Add text stroke width utilities
      addUtilities(
        Object.keys(theme('textStrokeWidth')).reduce((acc, key) => {
          acc[`.text-stroke-${key}`] = {
            '-webkit-text-stroke-width': theme(`textStrokeWidth.${key}`),
          };
          return acc;
        }, {}),
        ['responsive', 'hover']
      );
      
      // Add text stroke color utilities
      addUtilities(
        Object.keys(theme('textStrokeColor')).reduce((acc, key) => {
          acc[`.text-stroke-color-${key}`] = {
            '-webkit-text-stroke-color': theme(`textStrokeColor.${key}`),
          };
          return acc;
        }, {}),
        ['responsive', 'hover']
      );
    }
  ],
}
