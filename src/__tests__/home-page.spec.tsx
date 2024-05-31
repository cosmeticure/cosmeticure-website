import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HomePage } from '@/components/page/home-page';

jest.mock('next-intl', () => ({
  useTranslations: () => jest.fn(),
  useMessages: () => jest.fn(),
}));

const messages = require('../messages/en.json');
 
describe('Home Page', () => {
  it('renders a heading', () => {
    render(
      // <NextIntlClientProvider messages={messages} locale='en'>
        <HomePage />
      // </NextIntlClientProvider>
    );
 
    const heading = screen.getByRole('heading', { level: 1 });
 
    expect(heading).toBeInTheDocument();
  });
});
