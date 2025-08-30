import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme/theme.css";

export const wrapper = style({
  padding: "16px",
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
});

export const filterInput = style({
  marginBottom: "8px",
  padding: "8px",
  border: `1px solid ${theme.colors.neutral}`,
  borderRadius: "6px",
  width: "100%",
  background: theme.colors.primarySurface,
  color: theme.colors.primaryForeground,
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
});

export const th = style({
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  textAlign: "left",
  padding: "8px",
  background: theme.colors.secondarySurface,
  color: theme.colors.primaryForeground,
  fontWeight: 600,
});

export const td = style({
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  padding: "8px",
  color: theme.colors.primaryForeground,
});

export const trHover = style({
  selectors: {
    "&:hover": { background: theme.colors.hoveredOptionBackground },
  },
});

export const pagination = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "12px",
  fontSize: "14px",
  color: theme.colors.primaryForeground,
});

export const button = style({
  padding: "4px 8px",
  border: `1px solid ${theme.colors.neutral}`,
  borderRadius: "6px",
  cursor: "pointer",
  background: theme.colors.primarySurface,
  color: theme.colors.primaryForeground,
  selectors: {
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "&:hover": {
      background: theme.colors.hoveredOptionBackground,
    },
  },
});

export const actionsContainer = style({
  display: "flex",
  gap: "8px",
});

export const actionButton = style({
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  background: "transparent",
  color: theme.colors.neutral,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: theme.colors.hoveredNeutral,
    },
  },
});