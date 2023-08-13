import React from "react";
import styles from './Navigation.module.scss';
import Logo from 'assets/dominican-order.png';
import { NavMenu } from "configs/navigation";
import { NavigationItem } from "types";
import { Menubar } from 'primereact/menubar';
import { MenuItem } from "primereact/menuitem";

export default function Navigation(): React.JSX.Element {

  const logo = <img alt='logo' src={Logo} height="40"></img>
  return (
      <Menubar 
        className={styles.navBar}
        model={convertToMenuItem(NavMenu)} 
        end={logo} 
      />
  )
}

function convertToMenuItem(menu: NavigationItem[]): MenuItem[] {
  return menu.map(item => {
    const {path, ...rest} = item;
    return rest;
  })
}