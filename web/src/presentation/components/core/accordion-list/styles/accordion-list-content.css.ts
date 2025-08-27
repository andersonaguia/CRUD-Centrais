import { style, CSSProperties } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';
import {
  accordionListAlertStyle,
  accordionListAttentionStyle,
  accordionListSuccessStyle,
} from './accordion-list-item.css';

export const accordionListContentSuccessStyle: CSSProperties = {
  color: theme.colors.success,
};

export const accordionListContentAttentionStyle: CSSProperties = {
  color: theme.colors.attention,
};

export const accordionListContentAlertStyle: CSSProperties = {
  color: theme.colors.alert,
};

export const accordionListContentStyle = style({
  justifyItems: 'left',
  display: 'block',
  alignItems: 'center',
  marginLeft: '4.2rem',

  fontSize: '1.6rem',
  color: theme.colors.primaryForeground,

  selectors: {
    [`${accordionListSuccessStyle} &`]: accordionListContentSuccessStyle,
    [`${accordionListAttentionStyle} &`]: accordionListContentAttentionStyle,
    [`${accordionListAlertStyle} &`]: accordionListContentAlertStyle,
  },
});
