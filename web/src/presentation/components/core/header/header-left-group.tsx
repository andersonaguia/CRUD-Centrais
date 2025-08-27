import { FC } from 'react';
import classNames from 'classnames';

import { headerLeftGroupStyle } from './styles/header-left-group.css';
import { HeaderRootProps } from './types';

export const HeaderLeftGroup: FC<HeaderRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(headerLeftGroupStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
