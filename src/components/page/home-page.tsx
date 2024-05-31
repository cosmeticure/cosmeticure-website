import { useTranslations } from 'next-intl';
import { Typography } from '@/components/material-tailwind';

export const HomePage = (): JSX.Element => {
  const t = useTranslations('home');

  return (
    <div className='flex flex-row justify-center items-center h-[100vh]'>
      <Typography
        variant='h1'
      >
        {t('label')}
      </Typography>
    </div>
  );
};
