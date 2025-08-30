import { theme } from "@components/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const containerPage = style({
    marginTop: "20rem",
    marginLeft: "5%",
    height: "90vh",
    width: '90%'
});

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
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