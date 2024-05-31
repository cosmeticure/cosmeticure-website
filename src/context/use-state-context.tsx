'use client';

import { API_METHODS } from '@react-pakistan/util-functions';
import { usePathname } from '@/navigation';
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';
import { baseUrl } from '@/constants';

export enum API_ROUTES {
  BLOGS = '/api/blogs',
  BLOG = '/api/blog',
}

type State = {
  isMenuOpen: boolean;
}

interface StateProviderProps {
  children: ReactNode;
}

const useClientState = (): State => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return {
    isMenuOpen,
  };
};

const ClientStateContext = createContext<State>({
  isMenuOpen: false,
});

export const ClientStateContextProvider: FC<StateProviderProps> = ({
  children,
}): JSX.Element => {
  const state = useClientState();

  return (
    <ClientStateContext.Provider value={state}>
      {children}
    </ClientStateContext.Provider>
  )
};

export const useClientStateContext = () => {
  const state = useContext(ClientStateContext);

  return state;
};
