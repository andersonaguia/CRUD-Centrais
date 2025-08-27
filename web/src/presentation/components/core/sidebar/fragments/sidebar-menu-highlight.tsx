"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";

import { Highlight } from "@components/core/highlight";
import { SidebarMenuHighlightProps } from "../types";

export const SidebarMenuHighlight: FC<SidebarMenuHighlightProps> = (props) => {
  const { children, path, ...rest } = props;
  const currentPath = usePathname();

  const validateHighlight = () => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <Highlight.Root {...rest} asChild highlighted={validateHighlight()}>
      {children}
    </Highlight.Root>
  );
};
