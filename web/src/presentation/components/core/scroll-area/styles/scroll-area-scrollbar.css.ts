import { style } from '@vanilla-extract/css';

import {
  SCROLLBAR_LARGE_SIZE,
  SCROLLBAR_MEDIUM_SIZE,
  SCROLLBAR_SMALL_SIZE,
} from '../constants';

export const scrollAreaScrollbarStyle = style({
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',

  selectors: {
    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
    },
  },
});

export const scrollAreaScrollbarLargeStyle = style({
  selectors: {
    '&[data-orientation="vertical"]': { width: SCROLLBAR_LARGE_SIZE },
    '&[data-orientation="horizontal"]': {
      height: SCROLLBAR_LARGE_SIZE,
    },
  },
});

export const scrollAreaScrollbarMediumStyle = style({
  selectors: {
    '&[data-orientation="vertical"]': { width: SCROLLBAR_MEDIUM_SIZE },
    '&[data-orientation="horizontal"]': {
      height: SCROLLBAR_MEDIUM_SIZE,
    },
  },
});

export const scrollAreaScrollbarSmallStyle = style({
  selectors: {
    '&[data-orientation="vertical"]': { width: SCROLLBAR_SMALL_SIZE },
    '&[data-orientation="horizontal"]': {
      height: SCROLLBAR_SMALL_SIZE,
    },
  },
});
