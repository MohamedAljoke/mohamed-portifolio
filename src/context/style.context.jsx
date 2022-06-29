import { createContext, useEffect, useState } from 'react';

export const StyleContext = createContext({
  isDark: true,
  setIsDark: () => null,
});

export const StyleProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const choosenTextColor = {
    color: `${isDark ? 'white' : 'black'}`,
  };
  useEffect(() => {
    const body = document.querySelector('#root');
    const color = isDark ? 'black' : '#ffffff';
    body.style.backgroundColor = color;
  }, [isDark]);
  const value = { isDark, setIsDark, choosenTextColor };
  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};
