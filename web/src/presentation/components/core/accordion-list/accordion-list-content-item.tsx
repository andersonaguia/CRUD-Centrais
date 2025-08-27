import { FC } from 'react';
import classNames from 'classnames';

import { accordionListContentItemStyle } from './styles/accordion-list-content-item.css';
import { AccordionListContentProps } from './types';

export const AccordionListContentItem: FC<AccordionListContentProps> = (
  props,
) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionListContentItemStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
