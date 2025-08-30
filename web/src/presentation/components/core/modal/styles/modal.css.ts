import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const backdrop = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const modal = style({
  backgroundColor: theme.colors.primarySurface,
  color: theme.colors.primaryForeground,
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  maxWidth: "600px",
  width: "90%",
  position: "relative",
});

export const closeButtonContainer = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const closeButton = style({
  background: "transparent",
  border: "none",
  fontSize: "24px",
  color: theme.colors.neutral,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: theme.colors.hoveredNeutral,
    },
  },
});

export const modalContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const modalActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  marginTop: "24px",
});
