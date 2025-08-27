import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export type PortalTriggerProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'onClick'
> & {
  asChild?: boolean;
};

export type PortalViewportProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

type setOpenedPrevCallback = (prev: boolean) => boolean;

export type PortalContextProps = {
  opened: boolean;
  setOpened: (opened: boolean | setOpenedPrevCallback) => void;
};

export type PortalProviderProps = {
  children: ReactNode;
};

export type PortalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export type Callback = () => {} | undefined;
