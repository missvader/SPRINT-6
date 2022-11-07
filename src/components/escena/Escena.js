import React from "react";
import {Texto} from "./Escena.styles";
import {Container} from "./Escena.styles";
function Escena({historias}){
  return(
    <Container>
      {historias.map((historia)=>(
        <Texto><p>{historia}</p></Texto>
        
      ))}
    </Container>
    );
  }
export default Escena;