/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-top-mobile': "url('./src/assets/card-proker/card1-mobile.svg')",
        'card-bottom-mobile': "url('./src/assets/card-proker/card2-mobile.svg')",
        'card-top-desktop': "url('./src/assets/card-proker/card1-desktop.svg')",
        'card-bottom-desktop': "url('./src/assets/card-proker/card2-desktop.svg')",
        'card-top-tablet': "url('./src/assets/card-proker/card1-tablet.svg')",
        'card-bottom-tablet': "url('./src/assets/card-proker/card2-tablet.svg')",
        
        'hero-banner-desktop': "url('./src/assets/banner-desktop.png')",
        'hero-banner-tablet': "url('./src/assets/banner-tablet.png')",
        'hero-banner-phone': "url('./src/assets/banner-phone.png')",

        'ilkomunity-box': "url('./src/assets/bgilkomunity.png')",
        'megaproker-box': "url('./src/assets/bgmegaproker.png')",

        'grid-ilkomunity': "url('./src/assets/ilkomunity.svg')",
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
      textShadow: {
        'black': "4px 5px #040404"          
      },
      textStrokeWidth: {
        '2': '2px'
      },
      textStrokeColor: {
        'black': '#000'
      }
    },
  },
  plugins: [],
};
