import React, { useEffect, useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavbarBrand } from 'reactstrap';
import { englishData } from '../../data/english';
import { portuguesData } from '../../data/portugues';
import MyNavItem from './NavItem';
import SwitchMode from './SwitchMode';
import ToggleLang from './ToggleLang';

export default function Header({ isDark, setIsDark }) {
  const [textObject, setTextObject] = useState(englishData);
  const [choosenLang, setChoosenLang] = useState('english');
  const [toggleNav, setToggleNav] = useState(false);
  const [styleMode, setStyleMode] = useState('');

  useEffect(() => {
    const styleMode1 = isDark
      ? textObject.styleMode.dark
      : textObject.styleMode.light;
    setStyleMode(styleMode1);
  }, [isDark, textObject]);

  useEffect(() => {
    const textObject1 = choosenLang === 'english' ? englishData : portuguesData;
    setTextObject(textObject1);
  }, [choosenLang]);

  const navItemsArray = Object.keys(textObject.header);
  const navItems = navItemsArray.map((item) => {
    return <MyNavItem item={item} isDark={isDark} textObject={textObject} />;
  });
  const choosenTextColor = {
    color: `${isDark ? 'white' : 'black'}`,
  };
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
          <ToggleLang
            isDark={isDark}
            textObject={textObject}
            setChoosenLang={setChoosenLang}
          />
        </Nav>
        <Nav>
          <SwitchMode
            isDark={isDark}
            styleMode={styleMode}
            setIsDark={setIsDark}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
}
