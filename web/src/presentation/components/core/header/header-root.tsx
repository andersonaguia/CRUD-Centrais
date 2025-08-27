import { FC } from 'react';
import classNames from 'classnames';

import { headerRootStyle } from './styles/header-root.css';
import { HeaderRootProps } from './types';

export const HeaderRoot: FC<HeaderRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(headerRootStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
