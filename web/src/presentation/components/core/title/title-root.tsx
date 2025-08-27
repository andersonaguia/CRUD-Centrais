import classNames from 'classnames';
import { FC } from 'react';

import { titleRootRecipe } from './styles/title-root-recipe.css';
import { TitleRootProps } from './types';

export const TitleRoot: FC<TitleRootProps> = (props) => {
  const { children, className, size, ...rest } = props;
  const classes = classNames(titleRootRecipe({ size }), className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
