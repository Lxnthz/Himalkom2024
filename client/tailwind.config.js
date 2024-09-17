/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob-m': '375px',
        // => @media (min-width: 640px) { ... }
        
        'mob-l': '425px',
        // => @media (min-width: 640px) { ... }
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'card-top-mobile': "url('./src/assets/card-proker/card1-mobile.png')",
        'card-bottom-mobile': "url('./src/assets/card-proker/card2-mobile.png')",
        'card-top-desktop': "url('./src/assets/card-proker/card1-desktop.png')",
        'card-bottom-desktop': "url('./src/assets/card-proker/card2-desktop.png')",
        'card-top-tablet': "url('./src/assets/card-proker/card1-tablet.png')",
        'card-bottom-tablet': "url('./src/assets/card-proker/card2-tablet.png')",
        
        'hero-banner-desktop': "url('./src/assets/banner-desktop.png')",
        'hero-banner-tablet': "url('./src/assets/banner-tablet.png')",
        'hero-banner-phone': "url('./src/assets/banner-phone.png')",
        'komnews-banner': "url('./src/assets/komnews-banner.svg')",
        'komnews-headline': "url('./src/assets/komnews-headline.svg')",
        'komnews-dalem': "url('./src/assets/komnews-dalem.svg')",
        'komnews-card': "url('./src/assets/komnews-card.svg')",

        'ilkomunity-box': "url('./src/assets/bgilkomunity.png')",
        'megaproker-box': "url('./src/assets/bgmegaproker.png')",

        'grid-ilkomunity': "url('./src/assets/grid-ilkomunity.png')",
        'grid-ilkomunity-desktop': "url('./src/assets/grid-ilkomunity-desktop.png')",
      },
      backgroundSize: {
        "stretch": "100% 100%",
      },
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        changa: ["Changa One", "sans-serif"],
        sports: ["Sports World", "sans-serif"],
      },
      textShadow: {
        'black': '2px 3px #040404',
      },
      textStrokeWidth: {
        '2': '2px',
        '1': '1px',
      },
      textStrokeColor: {
        'black': '#000000',
      },
      keyframes: {
        // MOBILE KEYFRAMES
        blobEnter: {
          '0%': { borderRadius: '50%', transform: 'scale(0)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '100%': { borderRadius: '0', transform: 'scale(1)' },
        },
        blobExit: {
          '100%': { borderRadius: '50%', transform: 'scale(1)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '0%': { borderRadius: '0', transform: 'scale(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },

        // TABLET KEYFRAMES
        blobEnterTablet: {
          '0%': { borderRadius: '50%', transform: 'scale(0)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '100%': { borderRadius: '0', transform: 'scale(1)' },
        },
        blobExitTablet: {
          '100%': { borderRadius: '50%', transform: 'scale(1)' },
          '50%': { borderRadius: '40%', transform: 'scale(1)' },
          '0%': { borderRadius: '0', transform: 'scale(0)' },
        },
        slideInRightTablet: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeftTablet: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(120%)' },
        }
      },
      animation: {
        // MOBILE ANIMATIONS
        blobEnter: 'blobEnter 0.6s ease-in-out forwards',
        blobExit: 'blobExit 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-in-out forwards',
        blobSlideInRight: 'blobEnter 0.6s ease-in-out forwards, slideInRight 0.6s ease-in-out forwards',
        blobSlideInLeft: 'blobExit 0.6s ease-in-out forwards, slideInLeft 0.6s ease-in-out forwards',

        // TABLET ANIMATIONS
        blobEnterTablet: 'blobEnterTablet 0.8s ease-in-out forwards',
        blobExitTablet: 'blobExitTablet 0.8s ease-out forwards',
        slideInRightTablet: 'slideInRightTablet 0.8s ease-in-out forwards',
        slideInLeftTablet: 'slideInLeftTablet 0.8s ease-in-out forwards',
        blobSlideInRightTablet: 'blobEnterTablet 0.8s ease-in-out forwards, slideInRightTablet 0.8s ease-in-out forwards',
        blobSlideInLeftTablet: 'blobExitTablet 0.8s ease-in-out forwards, slideInLeftTablet 0.8s ease-in-out forwards'
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
