import { FC } from 'react';
import { Header as PrimitiveHeader } from '@radix-ui/react-accordion';
import classNames from 'classnames';

import { accordionListHeaderStyle } from './styles/accordion-list-header.css';
import { AccordionListHeaderProps } from './types';

export const AccordionListHeader: FC<AccordionListHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionListHeaderStyle, className);

  return (
    <PrimitiveHeader {...rest} className={classes}>
      {children}
    </PrimitiveHeader>
  );
};
