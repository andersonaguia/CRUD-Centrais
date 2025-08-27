import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';

export type ToggleTriggerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> & {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
  defaultValue?: boolean;
  asChild?: boolean;
};

export type ToggleContentProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};
