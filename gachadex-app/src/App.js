import React from 'react';
import './App.css';
import RoundedContainer from './RoundedContainer';
import NavigationBar from './navbar';


function App() {
  return (
    <div>
    <NavigationBar />

    <div className="grid-container" style={{ marginTop: '100px' }}>
      <RoundedContainer>
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

<br></br>
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

      <br></br>
  <ul className="grid-item">
        <li>
          <img className="square-img" src="/images/fgo.png" alt="square" />
        </li>
        <li>
          <img className="square-img" src="/images/arknights.png" alt="square" />
        </li>
      </ul>
</RoundedContainer>
    </div>
    </div>

  );

}

export default App;
