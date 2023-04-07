/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('./images/mobile/image-hero.jpg')",
        'hero-desktop': "url('./images/desktop/image-hero.jpg')",
        'interactive-mobile': "url('./images/mobile/image-interactive.jpg')",
        'interactive-desktop':  "url('./images/desktop/image-interactive.jpg')",
        'deep-earth':
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-deep-earth.jpg')",
        'deep-earth-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-deep-earth.jpg')",
        'night-arcade':
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-night-arcade.jpg')",
        'night-arcade-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-night-arcade.jpg')",
        'soccer-team':
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-soccer-team.jpg')",
        'soccer-team-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-soccer-team.jpg')",
        'grid': "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-grid.jpg')",
        'grid-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-grid.jpg')",
        'from-above':
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-from-above.jpg')",
        'from-above-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-from-above.jpg')",
        'pocket-borealis':
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-pocket-borealis.jpg')",
        'pocket-borealis-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-pocket-borealis.jpg')",
        curiosity:
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-curiosity.jpg')",
        'curiosity-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-curiosity.jpg')",
        fisheye:
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/mobile/image-fisheye.jpg')",
        'fisheye-desktop':
          "linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('./images/desktop/image-fisheye.jpg')",
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      height: {
        'intro-h': '32rem',
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '2.5rem',
          {
            lineHeight: '2.25rem',
          },
        ],
      },
      colors: {
        'dark-gray': '#8c8c8c',
        'v-dark-gray': 'hsl(0, 0%, 41%)',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
      gridRowStart: {
        n1: '10',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)'},
        },
        delay: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)'}
        }
      }
    },
  },
  plugins: [],
}

