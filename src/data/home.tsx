import { InfinityStatVariant1Props } from '@appcorp/app-corp-designs/type/infinity-stat-type';
import { contactForm } from './contact';
import { faqComponent } from './faq-component';

export const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL}`;

export const navBarData = {
  logo: `${baseUrl}/app-corp-logo.webp`,
  logoAlt: 'logoAlt',
  items: [
    {
      enabled: true,
      id: 'item-1',
      label: 'homeItem',
      route: '/',
    },
    {
      enabled: true,
      id: 'item-2',
      label: 'servicesItem',
      route: '/services',
      subMenuItems: [
        {
          enabled: true,
          id: 'item-2-a',
          label: 'webAppDevelopmentItem',
          route: '/service-detail/web-app-development',
        },
        {
          enabled: true,
          id: 'item-2-b',
          label: 'mobileAppDevelopmentItem',
          route: '/service-detail/mobile-app-development',
        },
        {
          enabled: true,
          id: 'item-2-c',
          label: 'eCommerceDevelopmentItem',
          route: '/service-detail/ecommerce-development',
        },
        {
          enabled: true,
          id: 'item-2-d',
          label: 'contentManagementItem',
          route: '/service-detail/content-management',
        },
        {
          enabled: true,
          id: 'item-2-e',
          label: 'uiuxItem',
          route: '/service-detail/ui-ux',
        },
      ],
    },
    {
      enabled: false,
      id: 'item-3',
      label: 'portfolioItem',
      route: '/portfolio',
    },
    {
      enabled: true,
      id: 'item-4',
      label: 'pricingItem',
      route: '/pricing',
    },
    {
      enabled: true,
      id: 'item-5',
      label: 'aboutItem',
      route: '/about',
    },
    {
      enabled: false,
      id: 'item-6',
      label: 'blogItem',
      route: '/blog',
    },
    {
      enabled: true,
      id: 'item-7',
      label: 'contactItem',
      route: '/contact',
    },
  ],
};

export const heroData = {
  banner: `${baseUrl}/app-corp-hero.webp`,
  ctaLabel: 'ctaLabel',
  description: 'description',
  // handleCtaOnClick: () => console.log('handleCtaOnClick'),
  heading: 'heading',
  subTitle: 'subTitle',
};

export const featuresData = {
  description: 'description',
  heading: 'heading',
  mobileAppBanner: `${baseUrl}/app-corp-mobile-app-development.webp`,
  mobileAppBannerAlt: 'mobileAppBannerAlt',
  mobileAppDescription: 'mobileAppDescription',
  mobileAppHeading: 'mobileAppHeading',
  subTitle: 'subTitle',
  webAppBanner: `${baseUrl}/app-corp-web-app-development.webp`,
  webAppBannerAlt: 'webAppBannerAlt',
  webAppDescription: 'webAppDescription',
  webAppHeading: 'webAppHeading',
  eCommerceBanner: `${baseUrl}/app-corp-ecommerce-development.webp`,
  eCommerceBannerAlt: 'eCommerceBannerAlt',
  eCommerceDescription: 'eCommerceDescription',
  eCommerceHeading: 'eCommerceHeading',
  contentBanner: `${baseUrl}/app-corp-content-management.webp`,
  contentBannerAlt: 'contentBannerAlt',
  contentDescription: 'contentDescription',
  contentHeading: 'contentHeading',
};

export const aboutData = {
  description: 'description',
  heading: 'heading',
  subTitle: 'subTitle',
  content: [
    'content1',
    'content2',
    'content3',
    'content4',
    'content5',
    'content6',
    'content7',
    'content8',
  ],
  // formHeading: 'formHeading',
  // submitButtonLabel: 'submitButtonLabel',
  ...contactForm,
};

export const statsData: InfinityStatVariant1Props = {
  description: 'description',
  heading: 'heading',
  subTitle: 'subTitle',
  stats: [
    {
      description: 'stat1Description',
      heading: 'stat1Heading',
      stat: '1,290+',
    },
    {
      description: 'stat2Description',
      heading: 'stat2Heading',
      stat: '3,450+',
    },
    {
      description: 'stat3Description',
      heading: 'stat3Heading',
      stat: '530+',
    },
    {
      description: 'stat4Description',
      heading: 'stat4Heading',
      stat: '24/7',
    },
  ],
};

export const testimonialsData = {
  description: 'description',
  heading: 'heading',
  subTitle: 'subTitle',
  items: [
    {
      enabled: true,
      feedback: 'item1Feedback',
      client: 'item1Client',
    },
    {
      enabled: true,
      feedback: 'item2Feedback',
      client: 'item2Client',
    },
    {
      enabled: true,
      feedback: 'item3Feedback',
      client: 'item3Client',
    },
  ],
};

export const faqs = {
  ...faqComponent,
};

export const footer = {
  columns: [
    {
      enabled: true,
      id: 'item-1',
      label: 'col1Label',
      order: 1,
      items: [
        {
          enabled: true,
          id: 'item-1-a',
          label: 'col1Item1Label',
          order: 1,
          route: '/about',
        },
        {
          enabled: true,
          id: 'item-1-b',
          label: 'col1Item2Label',
          order: 2,
          route: '/pricing',
        },
      ],
    },
    {
      enabled: true,
      id: 'item-2',
      label: 'col2Label',
      order: 2,
      items: [
        {
          enabled: true,
          id: 'item-2-a',
          label: 'col2Item1Label',
          order: 1,
          route: '/contact',
        },
        {
          enabled: true,
          id: 'item-2-b',
          label: 'col2Item2Label',
          order: 2,
          route: '/pricing',
        },
      ],
    },
    {
      enabled: true,
      id: 'item-3',
      label: 'col3Label',
      order: 3,
      items: [
        {
          enabled: true,
          id: 'item-3-a',
          label: 'col3Item1Label',
          order: 1,
          route: '/terms',
        },
        {
          enabled: true,
          id: 'item-3-b',
          label: 'col3Item2Label',
          order: 2,
          route: '/privacy',
        },
      ],
    },
  ],
  mainColumn: {
    label: 'col4Label',
    description: 'col4Description',
  },
  disclaimer: 'disclaimer',
};
