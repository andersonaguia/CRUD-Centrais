import { recipe } from '@vanilla-extract/recipes';

import * as styles from './accordion-content.css';

export const accordionContentRecipe = recipe({
  base: styles.accordionContentStyle,
  variants: {
    opened: {
      true: styles.accordionContentOpenedStyle,
    },
  },
  defaultVariants: {
    opened: false,
  },
});
