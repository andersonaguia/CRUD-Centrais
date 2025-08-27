import classNames from 'classnames';
import { FC } from 'react';

import { titleItemStyle } from './styles/title-item.css';
import { TitleRootProps } from './types';

export const TitleItem: FC<TitleRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(titleItemStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
