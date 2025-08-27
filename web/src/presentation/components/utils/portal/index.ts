import { PortalClose } from './portal-close';
import { PortalViewport } from './portal-viewport';
import { PortalProvider } from './portal-provider';
import { PortalTrigger } from './portal-trigger';
import { usePortal as usePortalContext } from './contexts/portal-context';

export const Portal = {
  Provider: PortalProvider,
  Trigger: PortalTrigger,
  Viewport: PortalViewport,
  Close: PortalClose,
};

export const usePortal = usePortalContext;
