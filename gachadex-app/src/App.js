import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid-container" style={{ marginTop: '100px' }}>
      <ul className="grid-item">
        <li>
          <img className="square-img" src="/images/fgo.png" alt="square" />
        </li>
        <li>
          <img className="square-img" src="/images/arknights.png" alt="square" />
        </li>
      </ul>
<br></br>
      <ul className="grid-item">
        <li>
          <img className="square-img" src="/images/fgo.png" alt="square" />
        </li>
        <li>
          <img className="square-img" src="/images/arknights.png" alt="square" />
        </li>
      </ul>

    </div>
  );
}

export default App;
