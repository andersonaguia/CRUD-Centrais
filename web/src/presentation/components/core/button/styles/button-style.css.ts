import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "12px 24px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  background: theme.colors.successNeutral,
  color: theme.colors.textNeutral,
  fontSize: "16px",
  fontWeight: 600,
  transition: "background-color 0.2s ease-in-out",
  width: "200px",
  selectors: {
    "&:hover": {
      background: theme.colors.hoveredSuccessNeutral,
    },
    "&:active": {
      background: theme.colors.successNeutral,
    },
    "&:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },
  },
});
