'use client';

import { USER_ROLES } from '@/auth-options';
import { useSession } from 'next-auth/react';
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { API_METHODS } from '@react-pakistan/util-functions';
import { baseUrl } from '@/constants';

export interface Profile {
  email: string;
  emailVerified: boolean;
  firstName: string;
  id: string;
  image: string;
  lastName: string;
  role: USER_ROLES;
}

export enum API_ROUTES {
  BLOGS = '/api/blogs',
  BLOG = '/api/blog',
  PROFILE = '/api/profile',
}

interface StatefulProfile {
  isLoading: boolean;
  data: null | Profile;
  error: null | Error;
}

type State = {
  profile: StatefulProfile;
}

interface StateProviderProps {
  children: ReactNode;
}

const useDashboardState = (): State => {
  const [profile, setProfile] = useState<StatefulProfile>({
    isLoading: false,
    data: null,
    error: null,
  });
  const { data: session, status } = useSession();

  useEffect(() => {
    fetchProfile();
  }, [status]);

  const fetchProfile = async () => {
    if (status === 'authenticated') {
      try {
        setProfile({
          data: null,
          error: null,
          isLoading: true,
        });

        const profile = await fetch(
          `${baseUrl}${API_ROUTES.PROFILE}`,
          {
            method: API_METHODS.POST,
            // @ts-ignore
            body: JSON.stringify(session?.user?.id),
          },
        );
        
        const { data } = await profile.json();

        setProfile({
          isLoading: false,
          data,
          error: null
        });
      } catch (err) {
        setProfile({
          data: null,
          isLoading: false,
          error: err as Error,
        });
      }
    };
  }

  return {
    profile,
  };
};

const DashboardStateContext = createContext<State>({
  profile: { isLoading: false, data: null, error: null},
});

export const DashboardStateContextProvider: FC<StateProviderProps> = ({
  children,
}): JSX.Element => {
  const state = useDashboardState();

  return (
    <DashboardStateContext.Provider value={state}>
      {children}
    </DashboardStateContext.Provider>
  )
};

export const useDashboardStateContext = () => {
  const state = useContext(DashboardStateContext);

  return state;
};
