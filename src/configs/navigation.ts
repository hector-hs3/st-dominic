import { NavigationItem } from "types";
import { PrimeIcons } from "primereact/api";

export enum Paths {
  HOME = '/',
  CALENDAR = '/calendar',
  SACRAMENTS = '/sacraments',
  PARISH = '/parish',
  RESOURCES = '/resources'
}

export const NavMenu: NavigationItem[] = [
  {
    id: 'home',
    label: "Home",
    icon: PrimeIcons.HOME,
    path: Paths.HOME
  },
  {
    id: 'calendar',
    label: 'Schedule/Events',
    icon: PrimeIcons.CALENDAR,
    path: Paths.CALENDAR
  },
  {
    id: 'sacraments',
    label: "Sacraments",
    icon: PrimeIcons.BOOK,
    path: Paths.SACRAMENTS
  },
  {
    id: 'parish',
    label: 'Parish Life',
    icon: PrimeIcons.HEART,
    path: Paths.PARISH
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: PrimeIcons.FOLDER_OPEN,
    path: Paths.RESOURCES
  }
]