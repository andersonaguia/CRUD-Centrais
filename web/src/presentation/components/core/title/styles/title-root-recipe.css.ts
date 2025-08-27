import { recipe } from '@vanilla-extract/recipes';

import * as styles from './title-root.css';

export const titleRootRecipe = recipe({
  base: styles.titleRootStyle,
  variants: {
    size: {
      small: styles.titleRootSmallStyle,
      medium: styles.titleRootMediumStyle,
      large: styles.titleRootLargeStyle,
    },
  },
  defaultVariants: {
    size: 'large',
  },
});
