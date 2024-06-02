import { addons } from '@storybook/manager-api';

import theme from './theme';

addons.setConfig({
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false },
    'storybook/background': { hidden: true },
    'storybook/viewport': { hidden: true },
  },
});

addons.setConfig({ theme });
