import React, { useContext } from 'react';
import { ThemContext } from '../../context/theme.context';

export default function SwitchMode({ styleMode }) {
  const { isDark, setIsDark, choosenTextColor } = useContext(ThemContext);
  return (
    <div className="theme-switch-wrapper">
      <span id="toggle-icon">
        <span className="toggle-text" style={choosenTextColor}>
          {styleMode}
        </span>
        <i
          className={`fas ${isDark ? 'fa-moon' : 'fa-sun'} `}
          style={choosenTextColor}
        ></i>
      </span>
      <label className="theme-switch">
        <input type="checkbox" onClick={() => setIsDark((prev) => !prev)} />
        <div className="slider round"></div>
      </label>
    </div>
  );
}
