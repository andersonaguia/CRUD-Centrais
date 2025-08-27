import { style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const accordionTriggerStyle = style({
  width: '100%',
  display: 'inline-flex',
  gap: '1.2rem',

  fontFamily: theme.fonts.primary,

  backgroundColor: 'transparent',
  cursor: 'pointer',
});
