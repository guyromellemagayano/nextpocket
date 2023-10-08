import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./{components,app,hooks,lib,utils}/**/*.{js?(x),ts?(x)}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};

export default config;
