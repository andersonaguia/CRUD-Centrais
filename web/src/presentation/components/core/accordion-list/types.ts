import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionMultipleProps,
  AccordionSingleProps,
  AccordionTriggerProps,
} from '@radix-ui/react-accordion';
import { accordionListItemRecipe } from './styles/accordion-list-item-recipe.css';
import * as constants from './constants';

export type AccordionListAspect =
  (typeof constants.ACCORDION_LIST_ASPECT)[number];

export type AccordionListStatus =
  (typeof constants.ACCORDION_LIST_STATUS)[number];

export type AccordionListItemVariantProps = RecipeVariants<
  typeof accordionListItemRecipe
>;

export type AccordionListRootProps = HTMLAttributes<HTMLDivElement> &
  (AccordionSingleProps | AccordionMultipleProps);

export type AccordionListItemProps = HTMLAttributes<HTMLDivElement> &
  AccordionListItemVariantProps & {
    id: string;
  };

export type AccordionListHeaderProps = HTMLAttributes<HTMLDivElement> &
  AccordionHeaderProps;

export type AccordionListTriggerProps = HTMLAttributes<HTMLDivElement> &
  AccordionTriggerProps;

export type AccordionListContentProps = HTMLAttributes<HTMLDivElement> &
  AccordionContentProps;

export type AccordionListActionGroupProps = HTMLAttributes<HTMLDivElement>;

export type AccordionListActionProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };
