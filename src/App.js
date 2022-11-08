import React from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import Buttons from './components/Buttons';
import historias from './data/historias.json';


function App() {
  return (
    <div className="App">
      <Buttons/>
      <Escena historias = {historias}/>
    </div>
  );
}

export default App;
