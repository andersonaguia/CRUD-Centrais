import { FC } from 'react';
import { Item as PrimitiveItem } from '@radix-ui/react-accordion';
import classNames from 'classnames';

import { accordionListItemRecipe } from './styles/accordion-list-item-recipe.css';
import { AccordionListItemProps } from './types';

export const AccordionListItem: FC<AccordionListItemProps> = (props) => {
  const { children, className, aspect, status, id, ...rest } = props;
  const classes = classNames(
    accordionListItemRecipe({ aspect, status }),
    className,
  );

  return (
    <PrimitiveItem {...rest} className={classes} id={id} value={id}>
      {children}
    </PrimitiveItem>
  );
};
