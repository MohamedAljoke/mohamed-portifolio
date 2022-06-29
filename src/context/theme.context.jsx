import { createContext, useEffect, useState } from 'react';

export const ThemContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const choosenTextColor = {
    color: `${isDark ? 'white' : 'black'}`,
  };

  useEffect(() => {
    const body = document.body;
    const color = isDark ? 'black' : '#ffffff';
    body.style.backgroundColor = color;
  }, [isDark]);

  const value = { isDark, setIsDark, choosenTextColor };
  return <ThemContext.Provider value={value}>{children}</ThemContext.Provider>;
};
