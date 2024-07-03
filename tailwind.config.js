import { default as themeConstants } from './theme/themeConstants';
import { screens as _screens } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: themeConstants.font.heading,
        body: themeConstants.font.body,
        default: themeConstants.font.body,
      },
      colors: {
        gg: themeConstants.background.default,
        paper: themeConstants.background.paper,
        primary: themeConstants.primary,
        secondary: themeConstants.secondary,
        error: themeConstants.error,
        fg: themeConstants.fg.main,
        action: '#EE4444',
        danger: '#EE4444',
        grey: themeConstants.primary.grey,
        darkgrey: themeConstants.primary.darkgrey,
      },
      screens: {
        ..._screens,
        ...themeConstants.breakpoints,
        ha: { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
};
