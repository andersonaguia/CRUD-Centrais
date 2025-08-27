import { style } from '@vanilla-extract/css';

import {
  toggleTriggerDisabledStyle,
  toggleTriggerEnabledStyle,
} from './toggle-trigger.css';

export const toggleContentStyle = style({
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const toggleDisabledContentStyle = style([
  toggleContentStyle,
  {
    selectors: {
      [`${toggleTriggerEnabledStyle} &`]: {
        display: 'none',
      },
    },
  },
]);

export const toggleEnabledContentStyle = style([
  toggleContentStyle,
  {
    selectors: {
      [`${toggleTriggerDisabledStyle} &`]: {
        display: 'none',
      },
    },
  },
]);
