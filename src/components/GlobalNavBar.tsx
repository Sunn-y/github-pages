import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/GlobalNavBar.scss'

interface NavItem {
  id: number;
  path: string;
  name: string;
}

const GlobalNavBar = (): JSX.Element => {
  const navItem: NavItem[] = [
    {id: 1, path: "/", name: "HOME"},
    {id: 2, path: "/about", name: "ABOUT"},
    {id: 3, path: "/portfolio", name: "PORTFOLIO"},
    {id: 4, path: "/contact", name: "CONTACT"},
  ]
  
  const navLinks = navItem.map((item) =>
    <NavLink key={item.id} to={item.path} >
      {item.name}
    </NavLink>
  )

  return <nav>{navLinks}</nav>;
}

export default GlobalNavBar;
