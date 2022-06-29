import React, { useContext, useEffect, useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavbarBrand } from 'reactstrap';

import { ThemContext } from '../../context/theme.context';
import { LangContext } from '../../context/lang.context';

import MyNavItem from './NavItem';
import SwitchMode from './SwitchMode';
import ToggleLang from './ToggleLang';

export default function Header() {
  const { isDark, choosenTextColor } = useContext(ThemContext);
  const { navItemsArray, textObject, setChoosenLang } = useContext(LangContext);

  const [toggleNav, setToggleNav] = useState(false);
  const [styleMode, setStyleMode] = useState('');

  useEffect(() => {
    const styleMode1 = isDark
      ? textObject.styleMode.dark
      : textObject.styleMode.light;
    setStyleMode(styleMode1);
  }, [isDark, textObject]);

  const navItems = navItemsArray.map((item) => {
    return <MyNavItem item={item} isDark={isDark} textObject={textObject} />;
  });

  const choosenTextColor1 = {
    color: `${isDark ? 'white' : 'black'}`,
    backgroundColor: `white`,
  };
  return (
    <Navbar
      expand="md"
      light
      fixed="top"
      style={{
        padding: '20px',
        display: 'flex',
        backgroundColor: `${isDark ? '#00000080' : '#ffffff80'}`,
      }}
    >
      <NavbarBrand className="nav-items" style={choosenTextColor} href="/">
        {textObject.name}
      </NavbarBrand>
      <NavbarToggler
        style={choosenTextColor1}
        onClick={() => setToggleNav((prev) => !prev)}
      />
      <Collapse navbar isOpen={toggleNav}>
        <Nav className="me-auto" navbar>
          {navItems}
          <ToggleLang textObject={textObject} setChoosenLang={setChoosenLang} />
        </Nav>
        <Nav>
          <SwitchMode styleMode={styleMode} />
        </Nav>
      </Collapse>
    </Navbar>
  );
}
