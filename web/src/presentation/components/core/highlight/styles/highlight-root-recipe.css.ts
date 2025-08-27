import { recipe } from '@vanilla-extract/recipes';

import * as styles from './highlight-root.css';

export const highlightRootRecipe = recipe({
  base: styles.highlightRootStyle,
  variants: {
    highlighted: {
      true: styles.highlightRootHighlightedStyle,
    },
    status: {
      success: styles.highlightRootSuccessStyle,
      attention: styles.highlightRootAttentionStyle,
      alert: styles.highlightRootAlertStyle,
    },
  },
  compoundVariants: [
    {
      variants: {
        highlighted: true,
        status: 'success',
      },
      style: styles.highlightRootHighlightedSuccessStyle,
    },
    {
      variants: {
        highlighted: true,
        status: 'attention',
      },
      style: styles.highlightRootHighlightedAttentionStyle,
    },
    {
      variants: {
        highlighted: true,
        status: 'alert',
      },
      style: styles.highlightRootHighlightedAlertStyle,
    },
  ],
  defaultVariants: {
    highlighted: false,
    status: 'success',
  },
});
