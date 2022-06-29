import React, { useContext } from 'react';
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { ThemContext } from '../../context/theme.context';

export default function ToggleLang({ textObject, setChoosenLang }) {
  const { choosenTextColor } = useContext(ThemContext);
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
