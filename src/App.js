import React from 'react';
import './App.css';
import Vendorbanner from './Components/Vendorbanner';
import Vendorfile from './Components/Vendorfile';
import Vendornotification from './Components/Vendornotification';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='main-logo'>
              StyleMyWay
          </div>
          <div className="vendor-name">
            Hello again, Surya 
          </div>
          <div className="logout-btn">
              <button className='btn red lighten-2 logout-text'>Logout</button>
          </div>
      </header>
      <Vendorbanner /><br/><div>
        <Vendornotification />
      </div>
      <div className='grey lighten-4'>
      <div className='container file-container'>
      <p className='file-title'>Got new dresses to sell?</p>
      <p className='file-subtitle'>Upload them here</p>
      <div className='card hoverable pink lighten-5'>
    <Vendorfile/>
    </div></div>
    </div>
    </div>
  );
}

export default App;
