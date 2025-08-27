import { FC } from 'react';
import { Content as PrimitiveContent } from '@radix-ui/react-accordion';
import classNames from 'classnames';

import { accordionListContentStyle } from './styles/accordion-list-content.css';
import { AccordionListContentProps } from './types';

export const AccordionListContent: FC<AccordionListContentProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionListContentStyle, className);

  return (
    <PrimitiveContent {...rest} className={classes}>
      {children}
    </PrimitiveContent>
  );
};
