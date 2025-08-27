import { recipe } from '@vanilla-extract/recipes';

import * as styles from './container.css';

export const containerRecipe = recipe({
  base: styles.containerStyle,
  variants: {
    model: {
      solid: styles.containerSolidStyle,
      void: styles.containerVoidStyle,
    },
    aspect: {
      primary: styles.containerPrimaryStyle,
      secondary: styles.containerSecondaryStyle,
    },
    status: {
      neutral: styles.containerNeutralStyle,
      success: styles.containerSuccessStyle,
      attention: styles.containerAttentionStyle,
      alert: styles.containerAlertStyle,
    },
    rounded: {
      medium: styles.containerMediumBorderRadiusStyle,
      small: styles.containerSmallBorderRadiusStyle,
    },
    centralized: {
      true: styles.containerCentralizedStyle,
    },
    selected: {
      true: styles.containerSelectedStyle,
    },
    foreground: {
      true: styles.containerForegroundStyle,
    },
    tagged: {
      true: styles.containerTaggedStyle,
    },
  },
  compoundVariants: [
    {
      variants: {
        model: 'solid',
        aspect: 'primary',
      },
      style: styles.containerSolidPrimaryStyle,
    },
    {
      variants: {
        model: 'solid',
        aspect: 'secondary',
      },
      style: styles.containerSolidSecondaryStyle,
    },
    {
      variants: {
        selected: true,
        status: 'neutral',
      },
      style: styles.containerSelectedNeutralStyle,
    },
    {
      variants: {
        selected: true,
        status: 'success',
      },
      style: styles.containerSelectedSuccessStyle,
    },
    {
      variants: {
        selected: true,
        status: 'attention',
      },
      style: styles.containerSelectedAttentionStyle,
    },
    {
      variants: {
        selected: true,
        status: 'alert',
      },
      style: styles.containerSelectedAlertStyle,
    },
    {
      variants: {
        foreground: true,
        selected: true,
        status: 'neutral',
      },
      style: styles.containerForegroundSelectedNeutralStyle,
    },
    {
      variants: {
        foreground: true,
        selected: true,
        status: 'success',
      },
      style: styles.containerForegroundSelectedSuccessStyle,
    },
    {
      variants: {
        foreground: true,
        selected: true,
        status: 'attention',
      },
      style: styles.containerForegroundSelectedAttentionStyle,
    },
    {
      variants: {
        foreground: true,
        selected: true,
        status: 'alert',
      },
      style: styles.containerForegroundSelectedAlertStyle,
    },
    {
      variants: {
        selected: true,
        status: 'neutral',
      },
      style: styles.containerTaggedNeutralStyle,
    },
    {
      variants: {
        selected: true,
        status: 'success',
      },
      style: styles.containerTaggedSuccessStyle,
    },
    {
      variants: {
        selected: true,
        status: 'attention',
      },
      style: styles.containerTaggedAttentionStyle,
    },
    {
      variants: {
        selected: true,
        status: 'alert',
      },
      style: styles.containerTaggedAlertStyle,
    },
  ],
  defaultVariants: {
    model: 'solid',
    aspect: 'secondary',
    status: 'neutral',
    centralized: false,
    selected: false,
    rounded: 'medium',
    foreground: false,
    tagged: false,
  },
});
