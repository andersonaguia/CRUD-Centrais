import classNames from 'classnames';
import { FC } from 'react';

import { accordionTriggerItemStyle } from './styles/accordion-trigger-item.css';
import { AccordionTriggerItemProps } from './types';

export const AccordionTriggerItem: FC<AccordionTriggerItemProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionTriggerItemStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
