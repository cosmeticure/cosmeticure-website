'use client';

import { InfinityDashboardVariant1 } from '@appcorp/app-corp-designs';
import { getFullName } from '@react-pakistan/util-functions';
import { FC, ReactNode, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { dashboardData } from '@/data/dashboard';
import { useDashboardStateContext } from '@/context/use-dashboard-context';

const toHeading = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

interface Props {
  children: ReactNode;
}

export const DashboardTemplate: FC<Props> = ({
  children,
}): JSX.Element => {
  const { push } = useRouter();
  const pathName = usePathname(); 
  const [isOpen, setIsOpen] = useState(false);
  const { profile: { isLoading, data } } = useDashboardStateContext();

  const singleLevelMenuArray = useMemo(() => ([...dashboardData.sideBar.singleLevelMenu]), []);
  singleLevelMenuArray[0].handleOnClick = () => push('/en/app/dashboard');
  singleLevelMenuArray[1].handleOnClick = () => push('/en/app/content');
  singleLevelMenuArray[2].handleOnClick = () => push('/en/app/ads');

  const pageHeading = toHeading(pathName.split('/')[3]);

  const updatedDashboardData = useMemo(() => ({
    ...dashboardData,
    sideBar: {
      ...dashboardData.sideBar,
      singleLevelMenu: [
        ...singleLevelMenuArray,
      ],
    },
    navBar: {
      ...dashboardData.navBar,
      avatarContainerSkeletonClassName: '!rounded-full',
      avatarSvgSkeletonClassName: '',
      emailSkeletonClassName: 'h-3 w-20',
      handleMobileNav: () => setIsOpen((cur: boolean) => !cur),
      isLoading,
      isMobileNavOpen: isOpen,
      label: pageHeading,
      nameSkeletonClassName: 'h-4 w-32',
      profileAvatarAlt: 'avatar',
      profileAvatarSrc: data?.image as string,
      profileEmail: data?.email as string,
      profileIsAdmin: false,
      profileName: data?.firstName && data?.lastName && getFullName({ firstName: data?.firstName, lastName: data?.lastName }) || '',
    }
  }), [singleLevelMenuArray, isOpen, setIsOpen, data, isLoading, pageHeading]);

  return (
    <InfinityDashboardVariant1
      {...updatedDashboardData}
    >
      {children}
    </InfinityDashboardVariant1>
  );
};
