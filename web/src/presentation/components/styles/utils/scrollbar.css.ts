import { ComplexStyleRule } from '@vanilla-extract/css';

import { theme } from '../theme/theme.css';

export const largeScrollbarStyle: ComplexStyleRule = {
  overflowY: 'scroll',

  '::-webkit-scrollbar': {
    width: '8px',
    position: 'absolute',
  },
  '::-webkit-scrollbar-track': {
    color: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.secondaryForeground,
    borderRadius: '12px',
  },
};

export const mediumScrollbarStyle: ComplexStyleRule = {
  overflowY: 'scroll',

  '::-webkit-scrollbar': {
    width: '6px',
    position: 'absolute',
  },
  '::-webkit-scrollbar-track': {
    color: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.secondaryForeground,
    borderRadius: '12px',
  },
};

export const smallScrollbarStyle: ComplexStyleRule = {
  overflowY: 'scroll',

  '::-webkit-scrollbar': {
    width: '4px',
    position: 'absolute',
  },
  '::-webkit-scrollbar-track': {
    color: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.secondaryForeground,
    borderRadius: '12px',
  },
};
