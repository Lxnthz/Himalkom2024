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
        changa: ["Changa One", "sans-serif"]
      },
      keyframes: {
        blobEnter: {
          '0%': { borderRadius: '50%', transform: 'scale(0)' },
          '50%': { borderRadius: '40%', transform: 'scale(1.2)' },
          '100%': { borderRadius: '0', transform: 'scale(1)' },
        },
        blobExit: {   
          '100%': { borderRadius: '0', transform: 'scale(1)' },
          '50%': { borderRadius: '40%', transform: 'scale(1.2)' },
          '0%': { borderRadius: '50%', transform: 'scale(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        blobEnter: 'blobEnter 0.6s ease-in-out forwards',
        blobExit: 'blobExit 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-in-out forwards',
        blobSlideInRight: 'blob 0.6s ease-in-out forwards, slideInRight 0.6s ease-in-out forwards',
        blobSlideInLeft: 'blob 0.6s ease-in-out forwards, slideInLeft 0.6s ease-in-out forwards'
      },
    },
  },
  plugins: [],
};
