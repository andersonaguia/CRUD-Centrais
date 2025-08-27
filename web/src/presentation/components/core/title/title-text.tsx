import { FC } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

import { titleTextStyle } from './styles/title-text.css';
import { TitleTextProps } from './types';

export const TitleText: FC<TitleTextProps> = (props) => {
  const { children, className, asChild, ...rest } = props;
  const classes = classNames(titleTextStyle, className);

  const Component = asChild ? Slot : 'h1';

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
