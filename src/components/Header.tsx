import React from "react";
import { NavMenu } from "configs/navigation";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {NavMenu.map(item => (
        <NavLink to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </header>
  )
}