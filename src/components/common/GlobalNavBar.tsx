import React from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
  id: number;
  path: string;
  name: string;
}

const GlobalNavBar = (): JSX.Element => {
  const navItem: NavItem[] = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/projects", name: "Projects" },
    { id: 4, path: "/contact", name: "Contact" },
  ];

  const navLinks = navItem.map((item) => (
    <NavLink key={item.id} to={item.path}>
      {item.name}
    </NavLink>
  ));

  return <nav>{navLinks}</nav>;
};

export default GlobalNavBar;
