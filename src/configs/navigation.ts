import { NavigationItem } from "types";

export enum Paths {
  HOME = "/",
  CALENDAR = "/calendar",
  SACRAMENTS = "/sacraments",
  PARISH = "/parish",
  RESOURCES = "/resources",
}

export const NavMenu: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "HOME",
    path: Paths.HOME,
  },
  {
    id: "calendar",
    label: "Schedule/Events",
    icon: "CALENDAR",
    path: Paths.CALENDAR,
  },
  {
    id: "sacraments",
    label: "Sacraments",
    icon: "BOOK",
    path: Paths.SACRAMENTS,
  },
  {
    id: "parish",
    label: "Parish Life",
    icon: "HEART",
    path: Paths.PARISH,
  },
  {
    id: "resources",
    label: "Resources",
    icon: "FOLDER_OPEN",
    path: Paths.RESOURCES,
  },
];
