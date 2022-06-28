import React from 'react';
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

export default function ToggleLang({ isDark, textObject, setChoosenLang }) {
  const choosenTextColor = { color: `${isDark ? 'white' : 'black'}` };
  return (
    <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav className="nav-items" style={choosenTextColor}>
        {textObject.language}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => setChoosenLang('english')}>
          English
        </DropdownItem>
        <DropdownItem onClick={() => setChoosenLang('portugues')}>
          Português
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
