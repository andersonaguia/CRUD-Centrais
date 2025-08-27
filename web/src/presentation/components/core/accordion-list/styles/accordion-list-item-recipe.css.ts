import { recipe } from '@vanilla-extract/recipes';

import * as styles from './accordion-list-item.css';

export const accordionListItemRecipe = recipe({
  base: styles.accordionListItemStyle,
  variants: {
    aspect: {
      primary: styles.accordionListPrimaryAspectStyle,
      secondary: styles.accordionListSecondaryAspectStyle,
    },
    status: {
      normal: styles.accordionListNormalStyle,
      success: styles.accordionListSuccessStyle,
      attention: styles.accordionListAttentionStyle,
      alert: styles.accordionListAlertStyle,
    },
  },
  defaultVariants: {
    aspect: 'primary',
    status: 'normal',
  },
});
