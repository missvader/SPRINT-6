import React from "react";
import {Texto, Container} from "./styled-components";
function Escena({historias}){
  return(
    <Container>
      {historias.map((historia)=>(
        <Texto><p>{historia}</p></Texto>
        
      ))}
    </Container>
    )
  }
export default Escena;