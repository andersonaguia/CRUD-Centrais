import { FC } from 'react';
import classNames from 'classnames';

import { HighlightItemProps } from './types';
import { highlightItemStyle } from './styles/highlight-item.css';

export const HighlightItem: FC<HighlightItemProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(highlightItemStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
