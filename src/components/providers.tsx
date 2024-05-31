import { FC } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
// import { ClientStateContextProvider } from '@/context/use-state-context';
// import { ThemeProvider } from '@/components/material-tailwind';

interface Props {
  children: any;
  locale: string;
}

export const Providers: FC<Props> = ({
  children,
  locale,
}): JSX.Element => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      {/* <ClientStateContextProvider> */}
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
      {/* </ClientStateContextProvider> */}
    </NextIntlClientProvider>
  );
};
