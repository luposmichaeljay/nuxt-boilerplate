import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

export default {
  preset: definePreset(Lara, {}),
  options: {
    darkModeSelector: '.p-dark',
  },
};
