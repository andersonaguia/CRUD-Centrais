import { HTMLAttributes } from 'react';

export type HeaderRootProps = HTMLAttributes<HTMLDivElement>;

export type HeaderLeftGroupProps = HTMLAttributes<HTMLDivElement>;

export type HeaderRightGroupProps = HTMLAttributes<HTMLDivElement>;

export type HeaderButtonGroupProps = HTMLAttributes<HTMLDivElement>;

export type HeaderButtonProps = HTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};
