import { FC } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

import { containerRecipe } from './styles/container-recipe.css';
import { ContainerProps } from './types';

export const Container: FC<ContainerProps> = (props) => {
  const {
    children,
    className,
    model,
    aspect,
    status,
    rounded,
    centralized,
    selected,
    foreground,
    tagged,
    asChild,
    ...rest
  } = props;

  const classes = classNames(
    containerRecipe({
      model,
      aspect,
      status,
      rounded,
      centralized,
      selected,
      foreground,
      tagged,
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
