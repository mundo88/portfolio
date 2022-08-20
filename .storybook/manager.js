import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://phungvanminh.com/icon.svg',
    brandTitle: 'Quang Minh Components',
    brandUrl: 'https://phungvanminh.com',
  },
});
