import React, { useState } from "react";
import { Texto, Container, Button, DivButtons } from "./styled-components";

function Escena({ historias }) {
  //con useState creamos contador y establecemos valor inicial en 1 para que la primera historia por defecto esté coloreada pq empieza por id 1
  let [count, setCount] = useState(1);
  return (
    //Para cada uno de los botones establecemos que onClick() el setCount hará que el contador se incremente o disminuya en 1
    //con ternario establecemos la condicion para que cuando llegue al principio o al final de las historias de la vuelta
    <Container>
      <DivButtons>
        <Button onClick={() => setCount(count <= 1 ? (count = 4) : count - 1)}>
          Anterior
        </Button>
        <Button onClick={() => setCount(count >= 4 ? (count = 1) : count + 1)}>
          Següent
        </Button>
      </DivButtons>
      {historias.map((historia) => (
        //con el map obtenemos de cada historia tambien el id (previamente hemos modificado json) y establecemos prop selesctedHistoria con boolean dependiendo de si coinciden id y count
        <Texto
          key={historia.id}
          selectedHistoria={historia.id === count ? true : false}
        >
          {historia.text}
        </Texto>
      ))}
    </Container>
  );
}
export default Escena;
