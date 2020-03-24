import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {
  const userName  = "Luis García";
  const edad      = 37;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Saludar name = {userName} edad = {edad}/>
      </header>
    </div>
  );
}

export default App;
