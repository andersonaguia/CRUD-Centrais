import classNames from 'classnames';
import { FC } from 'react';

import { accordionTextStyle } from './styles/accordion-text.css';
import { AccordionTextProps } from './types';

export const AccordionText: FC<AccordionTextProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionTextStyle, className);
  return (
    <p {...rest} className={classes}>
      {children}
    </p>
  );
};
