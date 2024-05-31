import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
} from '@react-pakistan/util-functions';

const baseUrl = 'https://appcorp.org/en';

const breadcrumbs = {
  home: [
    'Home',
  ],
};

const faqs = [
  {
    answer: 'AppCorp specializes in a comprehensive suite of digital services including Web and Mobile App Development, eCommerce solutions, Content Management, UI/UX Design, and Branding. Our expertise ensures innovative, user-centric solutions tailored to your unique business needs.',
    question: 'What services does AppCorp offer?',
  },
  {
    answer: "Quality is at the core of AppCorp's ethos. We employ rigorous testing, user feedback loops, and adhere to industry best practices throughout the development process. Our dedicated QA team ensures that every project meets our high standards of excellence.",
    question: 'How does AppCorp ensure the quality of its services?',
  },
  {
    answer: 'Absolutely! AppCorp has a diverse portfolio, showcasing our capability to deliver outstanding results for businesses of all sizes, from startups to large enterprises. Our scalable solutions are customized to meet the specific challenges and goals of your business.',
    question: 'Can AppCorp handle projects for businesses of any size?',
  },
  {
    answer: 'Project timelines vary based on complexity, scope, and specific client requirements. After an initial consultation and scope definition, we provide a realistic timeline, ensuring transparency and regular updates throughout the project lifecycle.',
    question: 'What is the typical project timeline with AppCorp?',
  },
  {
    answer: "Client collaboration is pivotal to our process. AppCorp adopts a communicative approach, ensuring you're informed and involved at every stage. Regular updates, feedback sessions, and accessibility to our project team guarantee a collaborative and transparent relationship.",
    question: 'How does AppCorp approach client collaboration and communication during a project?',
  },
];

export const homeJsonLd = generateBreadcrumbSchema({data: breadcrumbs.home, baseUrl});

export const organizationJsonLd = generateOrganizationSchema({
  image: '',
  baseUrl: 'https://appcorp.org',
  sameAsArr: ['https://appcorp.org/en', 'https://appcorp.org/fr'],
  logo: 'https://wgipzowaktxphuhhqjzj.supabase.co/storage/v1/object/public/appcorpblob/app-corp-logo.webp',
  appName: 'App Corp',
  description: 'App development partners with top-notch software engineering resources.',
  email: 'hello@appcorp.org',
  telephone: '+44 757 6191443',
  streetAddress: '129 Lea Bridge Road',
  addressLocality: 'London',
  addressCountry: 'GB',
  addressRegion: 'London',
  postalCode: 'E10 7DU',
});

export const faqJsonLd = generateFAQSchema({data: faqs});
