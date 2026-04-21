/**
 * Brand Color Palette - Dark Theme
 * haus of veloura Minimalist Aesthetic
 * 
 * THREE COLORS ONLY:
 * - Dark Background (#000000) - Primary background
 * - Warm Taupe Brown (#89725B) - Primary accent
 * - White (#FFFFFF) - Text and light accents
 * 
 * Background: Dark/Black only
 */

export const brandColors = {
  // PRIMARY COLORS ONLY
  primary: {
    dark: '#000000',         // Dark/black background
    taupe: '#89725B',        // Warm taupe brown - primary accent
    white: '#FFFFFF',        // White - text and light accents
  },

  // TEXT COLORS
  text: {
    primary: '#FFFFFF',      // Main text - white
  },

  // ACCENT COLORS
  accent: {
    primary: '#89725B',      // Main accent - taupe
  },

  // BACKGROUND
  background: {
    primary: '#000000',      // Dark background only
  },
};

/**
 * Color Usage Guidelines - DARK THEME
 * 
 * USE ONLY:
 * - #000000 (Dark) for primary backgrounds
 * - #89725B (Warm Taupe) for accents, decorative elements, highlights, CTAs
 * - #FFFFFF (White) for all text and light structural elements
 * 
 * DO NOT USE any other colors.
 * Maintain sufficient contrast for readability on dark backgrounds.
 */

// Tailwind CSS Configuration
export const tailwindColorConfig = {
  colors: {
    'brand-dark': '#000000',
    'brand-taupe': '#89725B',
    'brand-white': '#FFFFFF',
  },
};

// CSS Variables
export const cssVariables = `
  --color-background-dark: #000000;
  --color-accent-taupe: #89725B;
  --color-text-white: #FFFFFF;
`;

export default brandColors;
