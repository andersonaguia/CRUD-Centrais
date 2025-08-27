'use client';

import classNames from 'classnames';
import { FC } from 'react';

import { useActivedItemContext } from './contexts/active-item-context';
import { accordionTriggerFlagRecipe } from './styles/accordion-trigger-flag-recipe.css';
import { AccordionTriggerFlagProps } from './types';
import { useItemContext } from './contexts/item-context';

export const AccordionTriggerFlag: FC<AccordionTriggerFlagProps> = (props) => {
  const { children, className, ...rest } = props;
  const { activedItemID } = useActivedItemContext();
  const { itemID } = useItemContext();

  const opened = activedItemID === itemID;

  const classes = classNames(
    accordionTriggerFlagRecipe({
      actived: opened,
    }),
    className,
  );

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
