import React from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import historias from './data/historias.json';

function App() {
  return (
    <div className="App">
      <Escena historias = {historias}/>
    </div>
  );
}

export default App;
