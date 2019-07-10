import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './Picker';
import Timer from './Timer';
function App() {
  return (
    <div className="App">
      <Picker />
    <h1>  Heure : </h1>
      <Timer />
    </div>
  );
}

export default App;
