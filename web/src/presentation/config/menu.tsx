import { HomeIcon } from "@components/icons/home";
import { SidebarResource } from "../components/core/sidebar/types";

export const MENU_RESOURCES_CONFIGS: SidebarResource[] = [
  {
    id: "inicio",
    title: "Início",
    item: <HomeIcon customSize="2.3rem" />,
    path: "/",
  },
];
