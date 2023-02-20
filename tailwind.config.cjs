/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0A2647",
          "secondary": "#144272",
          "accent": "#ffffff",
          "neutral": "#205295",
          "base-100": "#DBE4F0",
          "info": "#99B6F0",
          "success": "#3ACF96",
          "warning": "#E9B416",
          "error": "#E03E29",
        },
      },
      {
        dark: {
          "primary": "#ffffff",
          "secondary": "#144272",
          "accent": "#205295",
          "neutral": "#2C74B3",
          "base-100": "#0A2647",
          "info": "#99B6F0",
          "success": "#3ACF96",
          "warning": "#E9B416",
          "error": "#E03E29",
        }
      }
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}