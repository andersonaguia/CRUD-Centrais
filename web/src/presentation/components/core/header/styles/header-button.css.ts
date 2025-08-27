import { theme } from '../../../styles/theme/theme.css';
import { style } from '@vanilla-extract/css';

export const headerButtonStyle = style({
  width: '2.6rem',
  height: '2.6rem',
  background: 'transparent',
  color: theme.colors.primaryForeground,
  cursor: 'pointer',
});
