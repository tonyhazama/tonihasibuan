module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        
        "main-dark": "#0d1321",
        "sub-dark": "#0f172a",
        "mid-dark": "#3e5c76",
        "mid-white": "#748CAB",
        "sub-white": "#f1f5f9",
        "main-white": "#ffffff",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      height: {
        header: "72px",
        "skill-icon": "20px"
      },
      maxWidth: {
        "header-title": "120px",
      },
      width: {
        "cv": "72rem"
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      padding: {
        "paper-margin": "4rem",
        "paper-space": "2rem",
      },
      textColor: {
        "cv-title": "#1C8274",
        "cv-accent": "#1c2b41"
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
        "cv-title": "1.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      borderWidth: {
        "thin": "1px"
      },
      typography: {
        lg: {
          css: {
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      },
      container: ''
    },
    fontFamily: {
      sans: 'Poppins'
    }
  },
  variants: {
    extend: {},
  },corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
    require("@tailwindcss/typography")
  ],
  
};