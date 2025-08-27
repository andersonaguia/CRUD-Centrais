'use client';

import { FC, useCallback } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { usePortal } from './contexts/portal-context';
import { PortalTriggerProps } from './types';

export const PortalTrigger: FC<PortalTriggerProps> = (props) => {
  const { children, asChild, ...rest } = props;
  const { setOpened } = usePortal();

  const toggleOpened = useCallback(() => {
    setOpened((prev) => !prev);
  }, [setOpened]);

  const Component = asChild ? Slot : 'button';

  return (
    <Component {...rest} onClick={toggleOpened}>
      {children}
    </Component>
  );
};
