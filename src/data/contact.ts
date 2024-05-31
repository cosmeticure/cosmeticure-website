import { faqComponent } from './faq-component';

export const pageHeader = {
  banner: 'https://material-tailwind.com/img/bg-hero-4.avif',
  description: 'pageDescription',
  heading: 'pageHeading',
};

export const contactForm = {
  firstNameLabel: 'firstNameLabel',
  firstNamePlaceholder: 'firstNamePlaceholder',
  lastNameLabel: 'lastNameLabel',
  lastNamePlaceholder: 'lastNamePlaceholder',
  emailPlaceholder: 'emailPlaceholder',
  emailLabel: 'emailLabel',
  servicesLabel: 'servicesLabel',
  services: [
    {
      enabled: true,
      label: 'serviceItem1Label',
    },
    {
      enabled: true,
      label: 'serviceItem2Label',
    },
    {
      enabled: true,
      label: 'serviceItem3Label',
    },
    {
      enabled: true,
      label: 'serviceItem4Label',
    },
    {
      enabled: true,
      label: 'serviceItem5Label',
    },
    {
      enabled: true,
      label: 'serviceItem6Label',
    },
  ],
  messageLabel: 'messageLabel',
  messagePlaceholder: 'messagePlaceholder',
  formSubmitLabel: 'formSubmitLabel',
};

export const contactSection = {
  description: 'sectionDescription',
  email: 'hello@appcorp.org',
  heading: 'sectionHeading',
  infoDescription: 'infoDescription',
  infoHeading: 'infoHeading',
  phone: '+44 757 6191443',
  subTitle: 'sectionSubTitle',
  ...contactForm,
};

export const faqs = {...faqComponent};
