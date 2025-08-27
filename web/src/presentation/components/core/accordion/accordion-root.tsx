'use client';

import { FC } from 'react';
import classNames from 'classnames';

import { AccordionRootProps } from './types';
import { ActivedItemProvider } from './contexts/active-item-context';
import { accordionRootStyle } from './styles/accordion-root.css';

export const AccordionRoot: FC<AccordionRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionRootStyle, className);

  return (
    <div {...rest} className={classes}>
      <ActivedItemProvider>{children}</ActivedItemProvider>
    </div>
  );
};
