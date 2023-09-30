import React from "react";
import { NavMenu } from "configs/navigation";
import { NavLink } from "react-router-dom";
import Logo from "assets/dominican-order.png";

export default function Header() {
  return (
    <header>
      <div className="content">
        <div className="title">
          <img alt="logo" src={Logo} height="40"></img>
          <div>
            St. Dominic Miami<br></br>
            Catholic Church
          </div>
        </div>
        <div className="nav">
          {NavMenu.map((item) => (
            <NavLink to={item.path}>{item.label}</NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
