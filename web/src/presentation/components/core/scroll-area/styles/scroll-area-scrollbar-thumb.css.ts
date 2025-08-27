import { style, CSSProperties } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';
import {
  SCROLLBAR_LARGE_SIZE,
  SCROLLBAR_MEDIUM_SIZE,
  SCROLLBAR_SMALL_SIZE,
} from '../constants';
import {
  scrollAreaScrollbarLargeStyle,
  scrollAreaScrollbarMediumStyle,
  scrollAreaScrollbarSmallStyle,
} from './scroll-area-scrollbar.css';

export const scrollAreaScrollbarThumbLargeStyle: CSSProperties = {
  borderRadius: SCROLLBAR_LARGE_SIZE,
};

export const scrollAreaScrollbarThumbMediumStyle: CSSProperties = {
  borderRadius: SCROLLBAR_MEDIUM_SIZE,
};

export const scrollAreaScrollbarThumbSmallStyle: CSSProperties = {
  borderRadius: SCROLLBAR_SMALL_SIZE,
};

export const scrollAreaScrollbarThumbStyle = style({
  flex: 1,
  position: 'relative',
  backgroundColor: theme.colors.secondaryForeground,

  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: '44px',
    minHeight: '44px',
  },

  selectors: {
    [`${scrollAreaScrollbarLargeStyle} &`]: scrollAreaScrollbarThumbLargeStyle,
    [`${scrollAreaScrollbarMediumStyle} &`]:
      scrollAreaScrollbarThumbMediumStyle,
    [`${scrollAreaScrollbarSmallStyle} &`]: scrollAreaScrollbarThumbSmallStyle,
  },
});
