import { addons } from '@storybook/manager-api';
import themeSetup from './theme-setup';

addons.setConfig({
  theme: themeSetup,
});