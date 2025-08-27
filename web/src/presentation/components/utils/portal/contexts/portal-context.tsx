'use client';

import { FC, createContext, useContext, useState } from 'react';

import { PortalContextProps, PortalProviderProps } from '../types';

export const PortalContext = createContext<PortalContextProps>({
  opened: false,
  setOpened: () => false,
});

export const PortalProvider: FC<PortalProviderProps> = (props) => {
  const { children } = props;

  const [opened, setOpened] = useState(false);

  return (
    <PortalContext.Provider value={{ opened, setOpened }}>
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => useContext(PortalContext);
