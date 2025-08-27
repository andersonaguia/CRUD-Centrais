'use client';

import { FC, createContext, useContext, useState } from 'react';

import { ActivedItemContext, ActivedItemProviderProps } from './types';

const activedItemContext = createContext<ActivedItemContext>({
  activedItemID: null,
  setActivedItemID: () => {},
});

export const ActivedItemProvider: FC<ActivedItemProviderProps> = (props) => {
  const { children } = props;
  const [activedItemID, setActivedItemID] = useState<string | null>(null);

  return (
    <activedItemContext.Provider value={{ activedItemID, setActivedItemID }}>
      {children}
    </activedItemContext.Provider>
  );
};

export const useActivedItemContext = () => {
  return useContext(activedItemContext);
};
