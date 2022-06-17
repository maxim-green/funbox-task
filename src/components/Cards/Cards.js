import React from 'react';
import './Cards.scss'

const Cards = ({children}) => {
  return (
    <ul className="cards">
      {children}
    </ul>
  );
};

export default Cards;
