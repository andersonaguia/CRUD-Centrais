import { HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import * as constants from './constants';
import { titleRootRecipe } from './styles/title-root-recipe.css';

export type InputTriggerProfile =
  (typeof constants.TITLE_TRIGGER_SIZES)[number];

export type TitleRootVariants = RecipeVariants<typeof titleRootRecipe>;

export type TitleItemProps = HTMLAttributes<HTMLDivElement>;

export type TitleRootProps = HTMLAttributes<HTMLDivElement> & TitleRootVariants;

export type TitleTextProps = HTMLAttributes<HTMLHeadingElement> & {
  asChild?: boolean;
};
