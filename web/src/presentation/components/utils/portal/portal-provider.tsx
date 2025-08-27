import { ReactNode } from 'react';

import { PortalProvider as PortalContextProvider } from './contexts/portal-context';

export const PortalProvider = ({ children }: { children: ReactNode }) => {
  return <PortalContextProvider>{children}</PortalContextProvider>;
};
