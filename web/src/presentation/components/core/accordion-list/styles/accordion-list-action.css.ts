import { CSSProperties, style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';
import {
  accordionListSuccessStyle,
} from './accordion-list-item.css';

export const accordionListActionStyleSucessStyle: CSSProperties = {
  color: theme.colors.success,
};

export const accordionListActionStyleDangerousStyle: CSSProperties = {
  color: theme.colors.alert,
};

export const accordionListActionStyleWarningStyle: CSSProperties = {
  color: theme.colors.attention,
};

export const accordionListActionStyle = style({
  textAlign: 'right',
  fontFamily: theme.fonts.primary,
  color: theme.colors.primaryForeground,
  fontSize: '2.4rem',

  cursor: 'pointer',

  backgroundColor: 'transparent',

  ':hover': {
    color: theme.colors.neutral,
  },

  selectors: {
    [`${accordionListSuccessStyle} &`]: accordionListActionStyleSucessStyle,
  },
});
