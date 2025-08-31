import { HomeIcon } from "@components/icons/home";
import { SidebarResource } from "../components/core/sidebar/types";
import { ShieldHalved } from "@components/icons/shield-halved";

export const MENU_RESOURCES_CONFIGS: SidebarResource[] = [
  {
    id: "inicio",
    title: "Início",
    item: <HomeIcon customSize="2.3rem" />,
    path: "/",
  },
  {
    id: "centrais",
    title: "Centrais",
    item: <ShieldHalved customSize="2.3rem" />,
    path: "/centrais",
  },
];
