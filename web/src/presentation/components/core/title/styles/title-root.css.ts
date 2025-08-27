import { style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const titleRootStyle = style({
  display: 'inline-flex',

  color: theme.colors.primaryForeground,
  fontWeight: 'bold',
  fontFamily: theme.fonts.primary,
});

export const titleRootLargeStyle = style({
  gap: '1.2rem',
  fontSize: '3.2rem',
});

export const titleRootMediumStyle = style({
  gap: '1rem',
  fontSize: '2.4rem',
});

export const titleRootSmallStyle = style({
  gap: '0.8rem',
  fontSize: '1.8rem',
});
