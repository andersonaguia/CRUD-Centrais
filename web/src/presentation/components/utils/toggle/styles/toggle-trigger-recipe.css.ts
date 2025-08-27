import { recipe } from '@vanilla-extract/recipes';

import * as styles from './toggle-trigger.css';

export const toggleTriggerRecipe = recipe({
  base: styles.toggleTriggerStyle,
  variants: {
    enabled: {
      true: styles.toggleTriggerEnabledStyle,
      false: styles.toggleTriggerDisabledStyle,
    },
  },
});
