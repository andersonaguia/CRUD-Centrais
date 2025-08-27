'use client';

import { FC } from 'react';
import {
  Root as PrimitiveRoot,
  Viewport as PrimitiveViewport,
  Scrollbar as PrimitiveScrollbar,
  Thumb as PrimitiveThumb,
  Corner as PrimitiveCorner,
} from '@radix-ui/react-scroll-area';
import classNames from 'classnames';

import * as styles from './styles/scroll-area.css';
import { scrollAreaScrollbarRecipe } from './styles/scroll-area-scrollbar-recipe.css';
import { scrollAreaScrollbarThumbStyle } from './styles/scroll-area-scrollbar-thumb.css';
import { ScrollAreaRootProps } from './types';

export const ScrollArea: FC<ScrollAreaRootProps> = (props) => {
  const { children, className, size, ...rest } = props;
  const classes = classNames(styles.scrollAreaRootStyle, className);
  const scrollbarClasses = scrollAreaScrollbarRecipe({ size });

  return (
    <PrimitiveRoot {...rest} className={classes}>
      <PrimitiveViewport className={styles.scrollAreaViewportStyle}>
        {children}
      </PrimitiveViewport>

      <PrimitiveScrollbar className={scrollbarClasses} orientation="vertical">
        <PrimitiveThumb className={scrollAreaScrollbarThumbStyle} />
      </PrimitiveScrollbar>

      <PrimitiveCorner className={styles.scrollAreaScrollbarCornerStyle} />
    </PrimitiveRoot>
  );
};
