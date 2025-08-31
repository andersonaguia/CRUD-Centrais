import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const containerPage = style({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10rem 0",
    width: "100%"
});

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  width: "90%",
  maxWidth: "1400px",
});

export const tableContainer = style({
  width: "90%",
  maxWidth: "1400px",
  marginTop: "1rem",
});

export const newCentralButton = style({
  padding: "12px 24px",
  backgroundColor: theme.colors.success,
  color: theme.colors.successWhite,
  border: "none",
  borderRadius: "6px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.hoveredSuccess,
    },
    "&:active": {
      backgroundColor: theme.colors.successNeutral,
    },
  },
});