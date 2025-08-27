import { FC } from 'react';
import classNames from 'classnames';

import { headerButtonGroupStyle } from './styles/header-button-group.css';
import { HeaderButtonGroupProps } from './types';

export const HeaderItemGroup: FC<HeaderButtonGroupProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(headerButtonGroupStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
