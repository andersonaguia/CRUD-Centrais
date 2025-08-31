import { style } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme/theme.css";

export const wrapper = style({
  padding: "16px",
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  width: "100%",
  maxWidth: "1400px",
  maxHeight: "600px",
  overflow: "auto",
  position: "relative",
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
  position: "sticky",
  top: 0,
  zIndex: 10,
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

export const trEven = style({
  background: theme.colors.tableRowEven,
  selectors: {
    "&:hover": { background: theme.colors.hoveredOptionBackground },
  },
});

export const trOdd = style({
  background: theme.colors.tableRowOdd,
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

export const paginationInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

export const itemsPerPage = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const itemsPerPageLabel = style({
  fontSize: "14px",
  color: theme.colors.primaryForeground,
  whiteSpace: "nowrap",
});

export const itemsPerPageSelect = style({
  padding: "4px 8px",
  border: "none",
  borderRadius: "6px",
  fontSize: "14px",
  color: theme.colors.primaryForeground,
  background: theme.colors.primarySurface,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      borderColor: theme.colors.hoveredNeutral,
    },
    "&:focus": {
      outline: "none",
      borderColor: theme.colors.primaryForeground,
    },
  },
});

export const button = style({
  padding: "4px 8px",
  border: `1px solid ${theme.colors.neutral}`,
  borderRadius: "6px",
  cursor: "pointer",
  background: theme.colors.primarySurface,
  color: theme.colors.textNeutral,
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

export const editButton = style({
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  background: "transparent",
  color: theme.colors.penWhite,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: theme.colors.hoveredNeutral,
    },
  },
});

export const deleteButton = style({
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  background: "transparent",
  color: theme.colors.alert,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: theme.colors.hoveredAlert,
      opacity: 0.5,
    },
  },
});

export const navigation = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "12px",
  fontSize: "14px",
  color: theme.colors.primaryForeground,
});

export const filtersContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center", 
  justifyContent: "space-between",
  gap: "1.5rem",
  marginBottom: "2rem",
  padding: "1rem",
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  width: "90%",
  maxWidth: "1400px",
});

export const filterItems = style({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  flexGrow: 1, 
});

export const filterLabel = style({
  fontSize: "1.2rem",
  marginBottom: "1rem",
});

export const filterInput = style({
  width: "100%", 
  padding: "8px",
  border: `1px solid ${theme.colors.tableColorPrimary}`,
  background: theme.colors.tableColorPrimary,
  color: theme.colors.primaryForeground,
  borderRadius: "6px",
});

export const selectFilter = style({
  width: "100%", 
  padding: "8px",
  border: "none",
  fontSize: "1.5rem",
  color: theme.colors.primaryForeground,
  background: theme.colors.tableColorPrimary,
  borderRadius: "6px",
});

export const clearFiltersButton = style({
  padding: "1rem",
  marginTop: "2rem",
  backgroundColor: theme.colors.alert,
  color: theme.colors.penWhite,
  borderRadius: "3px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: theme.colors.hoveredAlert,
      opacity: "0.5",
    },
  },
});
