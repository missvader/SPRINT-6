import React, {useState} from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import historias from './data/historias.json';
import Wellcome from './components/escena/Wellcome';



function App() {
  const [state, setState] = useState(true);
  return (
       state ?
      (<Wellcome start={()=> setState(!state)}/>) :
      (<Escena historias = {historias}/>)
  );
}

export default App;
