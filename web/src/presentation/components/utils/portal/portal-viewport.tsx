'use client';

import { FC, useEffect, useRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

import { When } from '../when';
import { usePortal } from './contexts/portal-context';
import { PortalViewportProps } from './types';

export const PortalViewport: FC<PortalViewportProps> = (props) => {
  const { children, className, asChild, ...rest } = props;
  const classes = classNames('data-portal-container', className);
  const { opened, setOpened } = usePortal();

  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closePortal = (event: MouseEvent) => {
      if (
        opened &&
        event.target instanceof Element &&
        portalRef.current &&
        !portalRef.current.contains(event.target) &&
        !event.target.closest('[data-portal-container]') &&
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "svg" 
      ) {
        setOpened(false);
      }
    };

    document.addEventListener('mousedown', closePortal);

    return () => {
      document.removeEventListener('mousedown', closePortal);
    };
  }, [opened, setOpened]);

  const Component = asChild ? Slot : 'div';

  return (
    <div ref={portalRef}>
      <When value={opened} expect={true}>
        <Component {...rest} className={classes} ref={portalRef}>
          {children}
        </Component>
      </When>
    </div>
  );
};
