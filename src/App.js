import React, {useState} from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import historias from './data/historias';
import Wellcome from './components/escena/Wellcome';

//estado inicial true. Si el estado es true se renderiza welcome. con el boton start cambiamos el estado a false y se renderiza Escena

function App() {
  const [state, setState] = useState(true);
  return (
       state ?
      (<Wellcome start={()=> setState(!state)}/>) :
      (<Escena historias = {historias}/>)
  );
}

export default App;
