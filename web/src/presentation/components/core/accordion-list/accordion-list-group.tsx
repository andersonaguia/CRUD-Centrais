import { FC } from 'react';
import classNames from 'classnames';

import { accordionListGroupStyle } from './styles/accordion-list-group.css';
import { AccordionListActionGroupProps } from './types';

export const AccordionListGroup: FC<AccordionListActionGroupProps> = (
  props,
) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionListGroupStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
