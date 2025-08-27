import { RecipeVariants } from '@vanilla-extract/recipes';
import {
  ScrollAreaProps,
  ScrollAreaViewportProps as PrimitiveScrollAreaViewportProps,
  ScrollAreaScrollbarProps as PrimitiveScrollAreaScrollbarProps,
  ScrollAreaCornerProps as PrimitiveScrollAreaCornerProps,
} from '@radix-ui/react-scroll-area';

import { SCROLL_AREA_SCROLLBAR_SIZES } from './constants';
import { scrollAreaScrollbarRecipe } from './styles/scroll-area-scrollbar-recipe.css';

export type ScrollAreaScrollbarSize =
  (typeof SCROLL_AREA_SCROLLBAR_SIZES)[number];

export type ScrollAreaScrollbarVariants = RecipeVariants<
  typeof scrollAreaScrollbarRecipe
>;

export type ScrollAreaRootProps = ScrollAreaProps & ScrollAreaScrollbarVariants;

export type ScrollAreaViewportProps = PrimitiveScrollAreaViewportProps;

export type ScrollAreaScrollbarProps = PrimitiveScrollAreaScrollbarProps;

export type ScrollAreaCornerProps = PrimitiveScrollAreaCornerProps;
