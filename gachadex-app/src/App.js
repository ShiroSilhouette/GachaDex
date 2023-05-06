import React from 'react';
import './App.css';
import RoundedContainer from './RoundedContainer';
import NavigationBar from './navbar';
import NewRounded from './NewRounded';
import UpcomingRounded from './UpcomingRounded';


function App() {
  return (
    <div>
    <NavigationBar />
    
    <div className="grid-container" style={{ marginTop: '50px' }}>
     
      <RoundedContainer>
      <center>Active Gacha</center>
      <ul className="grid-item">
        <li>
          <img className="square-img" src="/images/fgo.png" alt="square" />
        </li>
        <li>
          <img className="square-img" src="/images/arknights.png" alt="square" />
        </li>
      </ul>
    

    
      <ul className="grid-item">
        <li>
          <img className="square-img" src="/images/fgo.png" alt="square" />
        </li>
        <li>
          <img className="square-img" src="/images/arknights.png" alt="square" />
        </li>
      </ul>
 
</RoundedContainer>

<NewRounded>
    <center>New Gacha</center>
      <ul>
        <li>
        <img className="square-img" src="/images/hsr.png" alt="square" />
        </li>
        <li>
        <img className="square-img" src="/images/hsr.png" alt="square" />
        </li>
      </ul>

      <ul>
        <li>
        <img className="square-img" src="/images/hsr.png" alt="square" />
        </li>
        <li>
        <img className="square-img" src="/images/hsr.png" alt="square" />
        </li>
      </ul>
</NewRounded>

<UpcomingRounded>
    <center>Upcoming Gacha</center>
      <ul>
        <li>
        <img className="square-img" src="/images/endfield.jpg" alt="square" />
        </li>
        <li>
        <img className="square-img" src="/images/endfield.jpg" alt="square" />
        </li>
      </ul>

      <ul>
        <li>
        <img className="square-img" src="/images/endfield.jpg" alt="square" />
        </li>
        <li>
        <img className="square-img" src="/images/endfield.jpg" alt="square" />
        </li>
      </ul>
</UpcomingRounded>

    </div>

    </div>
    


  );

}

export default App;
