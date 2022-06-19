import React from 'react';
import './Caption.scss'

const Caption = ({children}) => {
  return (
    <h1 className="caption">
      {children}
    </h1>
  );
};

export default Caption;
