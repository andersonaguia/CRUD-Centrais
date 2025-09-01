import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const message = style({
  display: "flex",
  alignItems: "center",
  padding: "2rem",
  fontSize: "2.6rem",
  borderRadius: "6px",
  marginBottom: "1rem",
});

export const actions = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: "2rem",
  fontSize: "1.6rem",
  borderRadius: "6px",
  marginBottom: "1rem",
  width: "100%",
  gap: "1rem",
});

export const backButton = style({
  backgroundColor: theme.colors.neutral,
  padding: "2rem",
  fontSize: "1.6rem",
  borderRadius: "6px",
  width: "100px",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      background: theme.colors.hoveredNeutral,
    },
    "&:active": {
      background: theme.colors.neutral,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const confirmButton = style({
  backgroundColor: theme.colors.alert,
  padding: "2rem",
  fontSize: "1.6rem",
  borderRadius: "6px",
  width: "100px",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      background: theme.colors.hoveredAlert,
    },
    "&:active": {
      background: theme.colors.alert,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});
