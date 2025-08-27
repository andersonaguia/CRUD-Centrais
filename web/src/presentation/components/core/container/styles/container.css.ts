import { style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';

export const containerStyle = style({
  minWidth: '4.8rem',
  minHeight: '4.8rem',

  fontFamily: theme.fonts.primary,
  color: theme.colors.neutral,

  backgroundColor: theme.colors.primarySurface,
});

export const containerSolidStyle = style({});

export const containerVoidStyle = style({
  background: 'transparent',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.colors.secondaryForeground,
});

export const containerPrimaryStyle = style({});

export const containerSecondaryStyle = style({});

export const containerNeutralStyle = style({
  color: theme.colors.secondaryForeground,
});

export const containerSuccessStyle = style({
  color: theme.colors.success,
});

export const containerAttentionStyle = style({
  color: theme.colors.attention,
});

export const containerAlertStyle = style({
  color: theme.colors.alert,
});

export const containerMediumBorderRadiusStyle = style({
  borderRadius: '16px',
});

export const containerSmallBorderRadiusStyle = style({
  borderRadius: '8px',
});

export const containerCentralizedStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const containerSelectedStyle = style({
  borderWidth: '1px',
  borderStyle: 'solid',
});

export const containerTaggedStyle = style({
  borderLeftWidth: '0.8rem',
});

export const containerForegroundStyle = style({});

export const containerSolidPrimaryStyle = style({
  backgroundColor: theme.colors.primarySurface,
});

export const containerSolidSecondaryStyle = style({
  backgroundColor: theme.colors.secondarySurface,
});

export const containerSelectedNeutralStyle = style({
  borderColor: theme.colors.primaryForeground,
});

export const containerSelectedSuccessStyle = style({
  borderColor: theme.colors.success,
});

export const containerSelectedAttentionStyle = style({
  borderColor: theme.colors.attention,
});

export const containerSelectedAlertStyle = style({
  borderColor: theme.colors.alert,
});

export const containerForegroundSelectedNeutralStyle = style({
  color: theme.colors.primaryForeground,
});

export const containerForegroundSelectedSuccessStyle = style({
  color: theme.colors.primaryForeground,
});

export const containerForegroundSelectedAttentionStyle = style({
  color: theme.colors.primaryForeground,
});

export const containerForegroundSelectedAlertStyle = style({
  color: theme.colors.primaryForeground,
});

export const containerTaggedNeutralStyle = style({
  borderColor: theme.colors.primaryForeground,
});

export const containerTaggedSuccessStyle = style({
  borderColor: theme.colors.success,
});

export const containerTaggedAttentionStyle = style({
  borderColor: theme.colors.attention,
});

export const containerTaggedAlertStyle = style({
  borderColor: theme.colors.alert,
});

// ........................................................................

// export const containerSuccessStyle = style([
//   containerSelectedStyle,
//   {
//     borderColor: theme.colors.success,
//     color: theme.colors.success,
//   },
// ]);

// export const containerNormalSelectedStyle = style([
//   containerSelectedStyle,
//   {
//     borderColor: theme.colors.primaryForeground,
//     color: theme.colors.primaryForeground,
//   },
// ]);

// export const containerDangerousStyle = style([
//   containerSelectedStyle,
//   {
//     borderColor: theme.colors.alert,
//     color: theme.colors.alert,
//   },
// ]);

// export const containerDarkStyle = style({
//   backgroundColor: theme.colors.background,
// });

// export const containerVoidStyle = style({
//   border: `1px solid rgba(250, 250, 250, 0.4)`,
//   background: 'transparent',
// });

// export const containerRoundedSmallStyle = style({
//   borderRadius: '8px',
// });

// export const containerRoundedMediumStyle = style({
//   borderRadius: '16px',
// });
