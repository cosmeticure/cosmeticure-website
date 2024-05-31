'use client';

import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

export const MainTemplate: FC<Props> = ({ children }) => {
  const pathName = usePathname();
  const [_, __, route] = pathName.split('/');
  const { data, status } = useSession();

  return (
    <>
      {children}
    </>
  );
};
