import React from 'react';
import { NavLink } from 'reactstrap';

export default function MyNavItem({ item, isDark, textObject }) {
  return (
    <NavLink
      href={`#${item}`}
      className="nav-items"
      style={{ color: `${isDark ? 'white' : 'black'}` }}
    >
      {textObject.header[item]}
    </NavLink>
  );
}
