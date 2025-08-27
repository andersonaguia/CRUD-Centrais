import { createGlobalTheme } from "@vanilla-extract/css";

import { COLOR_PALETTE } from "./color-palette";

export const theme = createGlobalTheme(":root", {
  colors: {
    primarySurface: COLOR_PALETTE.neutral[850],
    secondarySurface: COLOR_PALETTE.neutral[900],
    background: COLOR_PALETTE.neutral[950],

    primaryForeground: COLOR_PALETTE.neutral[50],
    primaryNormal: COLOR_PALETTE.neutral[250],
    hoveredPrimaryForeground: COLOR_PALETTE.green[600],
    secondaryForeground: COLOR_PALETTE.neutral[200],
    hoveredSecondaryForeground: COLOR_PALETTE.neutral[50],
    contrastedForeground: COLOR_PALETTE.neutral[850],

    neutral: COLOR_PALETTE.neutral[200],
    hoveredNeutral: COLOR_PALETTE.neutral[300],
    success: COLOR_PALETTE.green[500],
    successNeutral: COLOR_PALETTE.green[600],
    hoveredSuccessNeutral: COLOR_PALETTE.green[500],
    successWhite: COLOR_PALETTE.neutral[950],
    penWhite: COLOR_PALETTE.neutral[50],
    hoveredSuccess: COLOR_PALETTE.green[400],
    attention: COLOR_PALETTE.yellow[500],
    hoveredAttention: COLOR_PALETTE.yellow[500],
    alert: COLOR_PALETTE.red[400],
    hoveredAlert: COLOR_PALETTE.red[400],

    error: COLOR_PALETTE.red[300],

    disabledBackground: COLOR_PALETTE.neutral[300], // TO DO
    disabledForeground: COLOR_PALETTE.neutral[300], // TO DO

    highlightSuccessEntrypoint: COLOR_PALETTE.alpha.green[500],
    highlightSuccessEndpoint: COLOR_PALETTE.alpha.neutral[50],
    highlightAttentionEntrypoint: COLOR_PALETTE.alpha.yellow[500],
    highlightAttentionEndpoint: COLOR_PALETTE.alpha.neutral[50],
    highlightAlertEntrypoint: COLOR_PALETTE.alpha.red[500],
    highlightAlertEndpoint: COLOR_PALETTE.alpha.neutral[50],

    foregroundSelectionBackground: COLOR_PALETTE.green[500],
    hoveredOptionBackground: COLOR_PALETTE.neutral[650],
    primaryItemListSurface: COLOR_PALETTE.neutral[750],
    secondaryItemListSurface: COLOR_PALETTE.neutral[650],
    actionRipple: COLOR_PALETTE.alpha.neutral[800],

    tableColorPrimary: COLOR_PALETTE.neutral[850],
    tableRowOdd: COLOR_PALETTE.neutral[860],
    tableRowEven: COLOR_PALETTE.neutral[700],
  },
  fonts: {
    primary: "var(--nunito-font), sans-serif",
  },
});
