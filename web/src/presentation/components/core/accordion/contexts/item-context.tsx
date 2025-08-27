'use client';

import { FC, createContext, useContext } from 'react';

import { ItemContext, ItemProviderProps } from './types';

const itemContext = createContext<ItemContext>({
  itemID: '',
});

export const ItemProvider: FC<ItemProviderProps> = (props) => {
  const { children, itemID } = props;

  return (
    <itemContext.Provider value={{ itemID }}>{children}</itemContext.Provider>
  );
};

export const useItemContext = () => {
  return useContext(itemContext);
};
