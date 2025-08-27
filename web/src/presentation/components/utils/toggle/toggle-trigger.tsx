'use client';

import { FC, useCallback } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { ToggleTriggerProps } from './types';
import { toggleTriggerRecipe } from './styles/toggle-trigger-recipe.css';

export const ToggleTrigger: FC<ToggleTriggerProps> = (props) => {
  const { children, className, enabled, setEnabled, asChild, ...rest } = props;
  const classes = classNames(
    toggleTriggerRecipe({
      enabled,
    }),
    className,
  );

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev);
  }, [setEnabled]);

  const Component = asChild ? Slot : 'button';

  return (
    <Component {...rest} type="button" className={classes} onClick={toggle}>
      {children}
    </Component>
  );
};
