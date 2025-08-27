import { FC } from 'react';
import classNames from 'classnames';

import { headerRightGroupStyle } from './styles/header-right-group.css';
import { HeaderRootProps } from './types';

export const HeaderRightGroup: FC<HeaderRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(headerRightGroupStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
