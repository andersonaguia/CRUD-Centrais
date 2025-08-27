'use client';

import { FC, useCallback } from 'react';
import classNames from 'classnames';

import { useActivedItemContext } from './contexts/active-item-context';
import { useItemContext } from './contexts/item-context';
import { accordionTriggerStyle } from './styles/accordion-trigger.css';
import { AccordionTriggerProps } from './types';

export const AccordionTrigger: FC<AccordionTriggerProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(accordionTriggerStyle, className);

  const { activedItemID, setActivedItemID } = useActivedItemContext();
  const { itemID } = useItemContext();

  const opened = activedItemID === itemID;

  const handleClick = useCallback(() => {
    setActivedItemID(opened ? null : itemID);
  }, [setActivedItemID, opened, itemID]);

  return (
    <button {...rest} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
};
