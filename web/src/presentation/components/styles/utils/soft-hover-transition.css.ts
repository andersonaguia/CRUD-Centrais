import { style } from '@vanilla-extract/css';

export const softBackgroundHoverTransition = style({
  transition: 'background-color 0.2s ease-in-out',
});

export const softBorderColorHoverTransition = style({
  transition: 'border-color 0.2s ease-in-out',
});

export const softForegroundHoverTransition = style({
  transition: 'color 0.2s ease-in-out',
});
