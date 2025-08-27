import { FC } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { headerButtonStyle } from './styles/header-button.css';
import { HeaderButtonProps } from './types';

export const HeaderItem: FC<HeaderButtonProps> = (props) => {
  const { children, className, asChild, ...rest } = props;
  const classes = classNames(headerButtonStyle, className);

  const Component = asChild ? Slot : 'button';

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
