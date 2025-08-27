import { HTMLAttributes, ReactNode } from 'react';

import { HighlightRootProps } from '@components/core/highlight/types';

export type SidebarResourceGroup = {
  id: string;
  title: string;
  path: string;
};

export type SidebarResource = {
  id: string;
  title: string;
  item: ReactNode;
  path: string;
  resourceGroup?: SidebarResourceGroup[];
};

export type SidebarRootProps = HTMLAttributes<HTMLDivElement>;

export type SideBarMenuProps = HTMLAttributes<HTMLDivElement> & {
  resources: SidebarResource[];
};

export type SidebarMenuHighlightProps = HighlightRootProps & {
  path: string;
};
