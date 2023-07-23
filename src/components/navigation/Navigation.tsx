import React from "react";
import styles from './Navigation.module.scss';
import { NavMenu } from "configs/navigation_menu";

export default function Navigation(): React.JSX.Element {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>

      </div>
      <div className={styles.nav}>
        <ul>
          {NavMenu.map((item, idx) => {
            if (item.enabled) return (
              <li>{item.title}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}