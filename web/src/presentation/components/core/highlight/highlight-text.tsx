import { FC } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { highlightTextStyle } from './styles/highlight-text.css';
import { HighlightTextProps } from './types';

export const HighlightText: FC<HighlightTextProps> = (props) => {
  const { children, className, asChild, ...rest } = props;
  const classes = classNames(highlightTextStyle, className);

  const Component = asChild ? Slot : 'p';

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
