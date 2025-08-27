import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import { accordionTriggerFlagRecipe } from './styles/accordion-trigger-flag-recipe.css';
import { accordionContentRecipe } from './styles/accordion-content-recipe.css';

export type AccordionTriggerFlagVariants = RecipeVariants<
  typeof accordionTriggerFlagRecipe
>;

export type AccordionContentVariants = RecipeVariants<
  typeof accordionContentRecipe
>;

export type AccordionRootProps = HTMLAttributes<HTMLDivElement>;

export type AccordionTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionContentProps = HTMLAttributes<HTMLDivElement>;

export type AccordionTextProps = HTMLAttributes<HTMLParagraphElement>;

export type AccordionItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
};

export type AccordionTriggerItemProps = HTMLAttributes<HTMLDivElement>;

export type AccordionTriggerFlagProps = HTMLAttributes<HTMLDivElement> &
  AccordionTriggerFlagVariants;
