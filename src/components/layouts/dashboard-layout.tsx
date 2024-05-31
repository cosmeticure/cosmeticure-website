import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Providers } from '@/components/providers';
import { DashboardTemplate } from '@/components/templates/dashboard-template';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export const DashboardLayout: FC<Props> = ({
  children,
  params,
}): JSX.Element => {
  return (
    <html dir='ltr' lang={params.locale}>
      <body className={inter.className}>
        <Providers locale={params.locale}>
          <main>
            <DashboardTemplate>
              {children}
            </DashboardTemplate>
          </main>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
    </html>
  );
};
