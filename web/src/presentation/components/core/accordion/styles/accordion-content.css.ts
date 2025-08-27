import { style } from '@vanilla-extract/css';

export const accordionContentStyle = style({
  display: 'none',
});

export const accordionContentOpenedStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});
