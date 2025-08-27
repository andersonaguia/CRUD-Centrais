import classNames from 'classnames';
import { FC } from 'react';

import { ItemProvider } from './contexts/item-context';
import { AccordionItemProps } from './types';
import { accordionItemStyle } from './styles/accordion-item.css';

export const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { children, className, id, ...rest } = props;
  const classes = classNames(accordionItemStyle, className);

  return (
    <div {...rest} id={id} className={classes}>
      <ItemProvider itemID={id}>{children}</ItemProvider>
    </div>
  );
};
