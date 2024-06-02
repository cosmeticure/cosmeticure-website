import { ReactElement } from 'react';

const image = 'https://cmfjgqlkdxpynhkvydov.supabase.co/storage/v1/object/public/cosmeticureblob/ads/hair-transplant-version-1.jpg';

const Ads = (): ReactElement => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='relative w-full h-[550px]'
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />
    </div>
  );
};

export default Ads;
