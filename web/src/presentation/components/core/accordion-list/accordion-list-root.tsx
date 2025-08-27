import { FC } from 'react';
import { Root as PrimitiveRoot } from '@radix-ui/react-accordion';
import classNames from 'classnames';

import { accordionListRootStyle } from './styles/accordion-list-root.css';
import { AccordionListRootProps } from './types';

export const AccordionListRoot: FC<AccordionListRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionListRootStyle, className);

  return (
    <PrimitiveRoot {...rest} className={classes}>
      {children}
    </PrimitiveRoot>
  );
};
