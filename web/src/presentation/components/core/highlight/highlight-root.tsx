import { FC } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { HighlightRootProps } from './types';
import { highlightRootRecipe } from './styles/highlight-root-recipe.css';

export const HighlightRoot: FC<HighlightRootProps> = (props) => {
  const { children, className, highlighted, status, asChild, ...rest } = props;
  const classes = classNames(
    highlightRootRecipe({
      highlighted,
      status,
    }),
    className,
  );

  const Component = asChild ? Slot : 'div';

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
