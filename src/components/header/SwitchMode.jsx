import React from 'react';

export default function SwitchMode({ isDark, styleMode, setIsDark }) {
  const choosenTextColor = { color: `${isDark ? 'white' : 'black'}` };
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
