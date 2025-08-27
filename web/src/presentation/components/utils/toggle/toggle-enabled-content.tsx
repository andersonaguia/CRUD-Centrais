import { FC } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { toggleEnabledContentStyle } from './styles/toggle-content.css';
import { ToggleContentProps } from './types';

export const ToggleEnabledContent: FC<ToggleContentProps> = (props) => {
  const { children, className, asChild, ...rest } = props;
  const classes = classNames(toggleEnabledContentStyle, className);

  const Component = asChild ? Slot : 'div';

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
