import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme/theme.css";

export const wrapper = style({
  padding: "16px",
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
});

export const formWrapper = style({
  padding: "24px",
  backgroundColor: theme.colors.secondarySurface,
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "500px",
  maxWidth: "90vw",
});

export const formTitle = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "8px",
});

export const formField = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const formLabel = style({
  fontSize: "14px",
  fontWeight: 600,
  color: theme.colors.primaryForeground,
});

export const formInput = style({
  padding: "10px",
  border: `1px solid ${theme.colors.neutral}`,
  borderRadius: "6px",
  backgroundColor: theme.colors.primarySurface,
  color: theme.colors.primaryForeground,
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: theme.colors.hoveredSuccessNeutral,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
});

export const formSelect = style({
  padding: "10px",
  border: `1px solid ${theme.colors.neutral}`,
  borderRadius: "6px",
  backgroundColor: theme.colors.primarySurface,
  color: theme.colors.primaryForeground,
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: theme.colors.hoveredSuccessNeutral,
    },
  },
});

export const errorMessage = style({
  fontSize: "12px",
  color: theme.colors.error,
  marginTop: "4px",
});

export const formButton = style({
  marginTop: "24px",
  padding: "12px 24px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  background: theme.colors.success,
  color: theme.colors.textNeutral,
  fontSize: "16px",
  fontWeight: 600,
  transition: "background-color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      background: theme.colors.hoveredSuccess,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const containerPage = style ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem 0",
  gap: "2rem",
  width: "100%",
  maxWidth: "1400px",
})
