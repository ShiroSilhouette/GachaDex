import React from 'react';
import './App.css';

function RoundedContainer({children}) {
  return (
    <div className="rounded-container">
      {children}
    </div>
  );
}

export default RoundedContainer;
