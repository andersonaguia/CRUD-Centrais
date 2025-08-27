import { HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import { highlightRootRecipe } from './styles/highlight-root-recipe.css';
import * as constants from './constants';

export type HighlightTemplateStatus =
  (typeof constants.HIGHLIGHT_STATUS)[number];

export type HighlightRootVariants = RecipeVariants<typeof highlightRootRecipe>;

export type HighlightRootProps = HTMLAttributes<HTMLDivElement> &
  HighlightRootVariants & {
    asChild?: boolean;
  };

export type HighlightItemProps = HTMLAttributes<HTMLDivElement>;

export type HighlightTextProps = HTMLAttributes<HTMLParagraphElement> & {
  asChild?: boolean;
};
