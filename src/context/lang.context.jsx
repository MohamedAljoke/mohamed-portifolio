import { createContext, useEffect, useState } from 'react';
import { englishData } from '../data/english';
import { portuguesData } from '../data/portugues';

export const LangContext = createContext({
  navItemsArray: [],
});

export const LangProvider = ({ children }) => {
  const [textObject, setTextObject] = useState(englishData);
  const [choosenLang, setChoosenLang] = useState('english');

  useEffect(() => {
    const textObject1 = choosenLang === 'english' ? englishData : portuguesData;
    setTextObject(textObject1);
  }, [choosenLang]);

  const navItemsArray = Object.keys(textObject.header);

  const value = {
    choosenLang,
    setChoosenLang,
    textObject,
    setTextObject,
    navItemsArray,
  };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
