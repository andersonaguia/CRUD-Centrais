import { style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const accordionListItemStyle = style({
  justifyItems: 'left',
  overflow: 'hidden',
  width: '65.7rem',
});

export const accordionListPrimaryAspectStyle = style({
  backgroundColor: theme.colors.primaryItemListSurface,
});

export const accordionListSecondaryAspectStyle = style({
  backgroundColor: theme.colors.secondaryItemListSurface,
});

export const accordionListNormalStyle = style({});

export const accordionListSuccessStyle = style({
  color: theme.colors.success,
});

export const accordionListAttentionStyle = style({
  color: theme.colors.attention,
});

export const accordionListAlertStyle = style({
  color: theme.colors.alert,
});
