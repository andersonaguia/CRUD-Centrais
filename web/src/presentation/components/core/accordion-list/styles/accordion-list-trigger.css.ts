import { CSSProperties, style } from '@vanilla-extract/css';

import { theme } from '../../../styles/theme/theme.css';
import {
  accordionListAlertStyle,
  accordionListAttentionStyle,
  accordionListSuccessStyle,
} from './accordion-list-item.css';

export const accordionListTriggerSucessStyle: CSSProperties = {
  color: theme.colors.success,
};

export const accordionListTriggerAttentionStyle: CSSProperties = {
  color: theme.colors.attention,
};

export const accordionListTriggerAlertStyle: CSSProperties = {
  color: theme.colors.alert,
};

export const accordionListTriggerContentStyle = style({
  marginLeft: '1.6rem',
  marginRight: '1.6rem',

  display: 'flex',
  justifyItems: 'left',

  gap: '0.8rem',
});

export const accordionListTriggerIconStyle = style({
  fontSize: '1.8rem',
  color: theme.colors.primaryForeground,

  transition: 'transform 0.3s ease-in-out',

  selectors: {
    [`${accordionListSuccessStyle} &`]: accordionListTriggerSucessStyle,
    [`${accordionListAttentionStyle} &`]: accordionListTriggerAttentionStyle,
    [`${accordionListAlertStyle} &`]: accordionListTriggerAlertStyle,
  },
});

export const accordionListTriggerLabelStyle = style({
  fontSize: '1.6rem',
  color: theme.colors.primaryForeground,

  selectors: {
    [`${accordionListSuccessStyle} &`]: accordionListTriggerSucessStyle,
    [`${accordionListAttentionStyle} &`]: accordionListTriggerAttentionStyle,
    [`${accordionListAlertStyle} &`]: accordionListTriggerAlertStyle,
  },
});

export const accordionListTriggerStyle = style({
  justifyItems: 'left',
  width: '100%',

  backgroundColor: 'transparent',

  selectors: {
    '&[data-state="open"]': {
      [`& .${accordionListTriggerIconStyle}`]: {
        transform: 'rotate(90deg)',
      },
    },
  },
});
