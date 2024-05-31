import { Metadata } from 'next';

interface SeoContent {
  home: Metadata;
}

const APP_NAME = 'App Corp';
const APP_DEFAULT_TITLE = 'App Corp | Leading Technology Partners';
const APP_TITLE_TEMPLATE = '%s - App Corp Technology Partners';
const APP_DESCRIPTION = 'App development partners with top-notch software engineering resources.';

const common = {
  authors: [
    {
      name: 'Taimoor Khan',
    }
  ],
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
};

export const seoContent: SeoContent = {
  home: {
    ...common,
  },
};
