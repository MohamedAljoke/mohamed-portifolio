import React from 'react';

export default function Main({ isDark }) {
  const choosenTextColor = {
    color: `${isDark ? 'white' : 'black'}`,
    paddingTop: '100px',
  };
  return <section style={choosenTextColor}>Main</section>;
}
