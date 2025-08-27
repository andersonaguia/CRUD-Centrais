'use client';

import { FC } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { Callback, PortalCloseProps } from './types';
import { usePortal } from './contexts/portal-context';

export const PortalClose: FC<PortalCloseProps> = (props) => {
  const { children, asChild, onClick, ...rest } = props;
  const callback = onClick as Callback;

  const { setOpened } = usePortal();

  const handleClick = () => {
    if (callback) {
      callback();
    }

    setOpened(false);
  };
  const Component = asChild ? Slot : 'button';

  return (
    <Component {...rest} onClick={handleClick}>
      {children}
    </Component>
  );
};
