import { ReactNode } from 'react';
import { HomePage } from '@/components/page/home-page';

interface Props {
  children: ReactNode;
}

const Home = (): JSX.Element => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
