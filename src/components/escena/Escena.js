import React, { useState} from "react";
import {Texto, Container, Button,DivButtons} from "./styled-components";

function Escena({historias}){
  //con useState creamos contador y establecemos valor inicial en 0
  const [count, setCount] = useState(0);
  return(
    //Para cada uno de los botones establecemos qie onClick() el setCount hará que el contador se incremente o disminuya en 1
    <Container>
      <DivButtons>
      <Button onClick={()=> setCount(count - 1)}>Anterior</Button>
      <Button onClick={()=> setCount(count + 1)}>Següent</Button>
      </DivButtons>
      {historias.map((historia)=>(
        //con el map obtenemos de cada historia tambien el id (previamente hemos modificado json) y establecemos selesctedHistoria con boolean dependiendo de si coinciden id y count
        <Texto 
        key={historia.id}
        selectedHistoria = {historia.id === count ? true : false}
        >
          {historia.text}
        </Texto>
      ))}
    </Container>
    )
  }
export default Escena;