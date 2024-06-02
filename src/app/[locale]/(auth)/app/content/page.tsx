import { ReactElement } from 'react';
import Image from 'next/image';
import { googleProductsContent, googleServicesContent } from '@/data/content';
import { Typography } from '@/components/material-tailwind';

const Content = (): ReactElement => {
  return (
    <div>
      <Typography className='p-4' variant='h3'>
        Business Description on Google
      </Typography>
      <Typography variant='paragraph'>
        Welcome to Cosmeticure, where beauty meets advanced medical care. We offer a comprehensive suite of cosmetic and therapeutic services designed to enhance your appearance and well-being. Our expert team specializes in Hair Transplants, Liposuction, Rhinoplasty, PRP therapy, Laser treatments, Hydrafacials, Anti Wrinkle injections, Fillers, Facelifts, Tummy Tucks, Breast Augmentation, Burn care, Vaginoplasty, Skin Grafting, Breast Reduction, Skin Whitening, Fat Grafting, and Scar Removal. Each procedure is tailored to your unique needs, ensuring natural, stunning results. Have questions or ready to transform your look? Our dedicated professionals are here to guide you every step of the way. Contact us today to book your appointment.
      </Typography>
      <Typography className='p-4' variant='h3'>
        Services published on Google
      </Typography>
      <div className='grid grid-cols-3 gap-6'>
        {googleServicesContent
          .sort((a, b) => a.order - b.order)
          .map(({ id, title, content }) => {
            return (
              <div key={id} className='p-4 border border-white rounded-md'>
                <Typography key={id} variant='h4' className='pb-4'>
                  {title}
                </Typography>
                <Typography variant='paragraph'>
                  {content.slice(0, 300)}
                </Typography>
              </div>
            );
          })}
      </div>
      <Typography className='p-4' variant='h3'>
        Products published on Google
      </Typography>
      <div className='grid grid-cols-3 gap-6'>
        {googleProductsContent
          .sort((a, b) => a.order - b.order)
          .map(({ brand, content, id, image, price, title }) => {
            return (
              <div key={id} className='p-4 border border-white rounded-md'>
                <div
                  className='relative w-full h-[200px] rounded-md'
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                  }}
                />
                <Typography key={id} variant='h4' className='pb-4'>
                  {title} - {brand}
                </Typography>
                <Typography variant='paragraph'>
                  {content.slice(0, 1000)} - {price}
                </Typography>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Content;
