import React, { useState } from "react";
import { NavMenu } from "configs/navigation";
import { NavLink } from "react-router-dom";
import Logo from "assets/dominican-order.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons/lib";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu((prev) => !prev);
  const handleClickInDesktop = () => {
    if (showMenu) setShowMenu(false);
  };

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
        <div
          className={`nav ${showMenu ? "active" : ""}`}
          onClick={handleClickInDesktop}
        >
          {NavMenu.map((item) => (
            <NavLink to={item.path}>{item.label}</NavLink>
          ))}
        </div>
        <div className="menu-icon">
          <MenuIcon onClick={handleClick} />
        </div>
      </div>
    </header>
  );
}

type Props = {
  onClick: () => void;
};
function MenuIcon({ onClick }: Props) {
  return (
    <IconContext.Provider value={{ color: "white", size: "30px" }}>
      <RxHamburgerMenu onClick={onClick} />
    </IconContext.Provider>
  );
}
