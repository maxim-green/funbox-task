import React from 'react';
import './Caption.scss'

const Caption = ({children}) => {
  return (
    <div className="caption">
      {children}
    </div>
  );
};

export default Caption;
