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
    icon: "HOME",
    path: Paths.HOME,
  },
  {
    id: "calendar",
    icon: "CALENDAR",
    path: Paths.CALENDAR,
  },
  {
    id: "sacraments",
    icon: "BOOK",
    path: Paths.SACRAMENTS,
  },
  {
    id: "parish",
    icon: "HEART",
    path: Paths.PARISH,
  },
  {
    id: "resources",
    icon: "FOLDER_OPEN",
    path: Paths.RESOURCES,
  },
];
