import { ReactElement } from 'react';
import { googleServicesContent } from '@/data/content';
import { Typography } from '@/components/material-tailwind';

const Content = (): ReactElement => {
  return (
    <div className='grid grid-cols-3 gap-6'>
      {googleServicesContent
        .sort((a, b) => a.order - b.order)
        .map(({ id, title, content }) => {
          return (
            <div key={id} className='p-4 border border-white rounded-md'>
              <Typography key={id} variant='h3' className='pb-4'>
                {title}
              </Typography>
              <Typography variant='paragraph'>
                {content.slice(0, 300)}
              </Typography>
            </div>
          );
        })}
    </div>
  );
};

export default Content;
