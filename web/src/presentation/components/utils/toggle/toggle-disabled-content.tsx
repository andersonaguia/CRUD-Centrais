import { FC } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { toggleDisabledContentStyle } from './styles/toggle-content.css';
import { ToggleContentProps } from './types';

export const ToggleDisabledContent: FC<ToggleContentProps> = (props) => {
  const { children, className, asChild, ...rest } = props;
  const classes = classNames(toggleDisabledContentStyle, className);

  const Component = asChild ? Slot : 'div';

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
