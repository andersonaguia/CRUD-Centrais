import { ReactNode } from 'react';

export type ActivedItemContext = {
  activedItemID: string | null;
  setActivedItemID: (itemID: string | null) => void;
};

export type ActivedItemProviderProps = {
  children: ReactNode;
};

export type ItemContext = {
  itemID: string;
};

export type ItemProviderProps = {
  children: ReactNode;
  itemID: string;
};
