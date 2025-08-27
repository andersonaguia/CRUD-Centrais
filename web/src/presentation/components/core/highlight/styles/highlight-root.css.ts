import { style, CSSProperties } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const highlightedSuccessStyle: CSSProperties = {
  borderColor: theme.colors.success,
  background: `linear-gradient(100deg, ${theme.colors.highlightSuccessEntrypoint} 0%, ${theme.colors.highlightSuccessEndpoint} 100%)`,
};

export const highlightedAttentionStyle: CSSProperties = {
  borderColor: theme.colors.attention,
  background: `linear-gradient(100deg, ${theme.colors.highlightAttentionEntrypoint} 0%, ${theme.colors.highlightAttentionEndpoint} 100%)`,
};

export const highlightedAlertStyle: CSSProperties = {
  borderColor: theme.colors.alert,
  background: `linear-gradient(100deg, ${theme.colors.highlightAlertEntrypoint} 0%, ${theme.colors.highlightAlertEndpoint} 100%)`,
};

export const unhighlightedStyle: CSSProperties = {
  borderColor: 'transparent',
  background: 'transparent',
};

export const highlightRootStyle = style({
  display: 'inline-flex',
  color: theme.colors.primaryForeground,

  fontSize: '1.6rem',

  borderRadius: '6px 0 0 6px',
  borderLeft: '4.8px solid transparent',
});

export const highlightRootHighlightedStyle = style({});

export const highlightRootSuccessStyle = style({});

export const highlightRootAttentionStyle = style({});

export const highlightRootAlertStyle = style({});

export const highlightRootHighlightedSuccessStyle = style(
  highlightedSuccessStyle,
);

export const highlightRootHighlightedAttentionStyle = style(
  highlightedAttentionStyle,
);

export const highlightRootHighlightedAlertStyle = style(highlightedAlertStyle);
