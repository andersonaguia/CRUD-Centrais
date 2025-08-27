import { recipe } from '@vanilla-extract/recipes';

import * as styles from './accordion-trigger-flag.css';

export const accordionTriggerFlagRecipe = recipe({
  variants: {
    actived: {
      true: styles.accordionActiveTriggerFlagStyle,
      false: styles.accordionTriggerFlagStyle,
    },
  },
});
