import { style } from '@vanilla-extract/css';

export const accordionTriggerFlagStyle = style({
  transition: 'transform 0.3s ease-in-out',
  transform: 'rotate(0deg)',
});

export const accordionActiveTriggerFlagStyle = style({
  transition: 'transform 0.3s ease-in-out',
  transform: 'rotate(180deg)',
});
