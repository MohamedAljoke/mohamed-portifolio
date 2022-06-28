import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/hero/Main';
import Projetos from './components/projetos/Projetos';

function App() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const body = document.querySelector('#root');
    const color = isDark ? 'black' : '#ffffff';
    body.style.backgroundColor = color;
  }, [isDark]);
  return (
    <div>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="main-wrapper">
        <Projetos isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
