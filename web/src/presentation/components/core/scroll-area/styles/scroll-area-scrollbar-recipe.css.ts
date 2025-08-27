import { recipe } from '@vanilla-extract/recipes';

import * as styles from './scroll-area-scrollbar.css';

export const scrollAreaScrollbarRecipe = recipe({
  base: styles.scrollAreaScrollbarStyle,
  variants: {
    size: {
      large: styles.scrollAreaScrollbarLargeStyle,
      medium: styles.scrollAreaScrollbarMediumStyle,
      small: styles.scrollAreaScrollbarSmallStyle,
    },
  },
  defaultVariants: {
    size: 'large',
  },
});
