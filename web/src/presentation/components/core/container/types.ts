import { HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import * as constants from './constants';
import { containerRecipe } from './styles/container-recipe.css';

export type ContainerModel = (typeof constants.CONTAINER_MODELS)[number];

export type ContainerAspect = (typeof constants.CONTAINER_ASPECTS)[number];

export type ContainerStatus = (typeof constants.CONTAINER_STATUS)[number];

export type ContainerRoundedOption =
  (typeof constants.CONTAINER_ROUNDED_OPTIONS)[number];

export type ContainerVariants = RecipeVariants<typeof containerRecipe>;

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  ContainerVariants & {
    asChild?: boolean;
  };
