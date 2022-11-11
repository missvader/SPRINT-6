import React, { useState } from "react";
import { Texto, Container, Button, DivButtons } from "./styled-components";
function Escena({ historias }) {
  //con useState creamos contador y establecemos valor inicial en 0 para que la primera historia por defecto esté coloreada pq empieza por index 0
  const [count, setCount] = useState(0);
  return (
    //Para cada uno de los botones establecemos que onClick() el setCount hará que el contador se incremente o disminuya en 1
    //logica para que pare cuando llegue a inicio o final historias:
    //si count mayor que 0, el boton anterior ejecuta count -1, sino, count se queda igual(asi se queda seleccionada la primera historia que tiene index 0)
    //si count es menor que la longitud del array, el count puede avanzar sumando 1, hasta que no se cumpla cond pq está en la ultima historia y entonces count se queda igual
    <Container background={historias[count].img}>
      <DivButtons>
        <Button onClick={() => setCount(count > 0 ? count - 1 : count)}>
          Anterior
        </Button>
        <Button onClick={() => setCount(count < (historias.length - 1)  ? count + 1 : count)}>
          Següent
        </Button>
      </DivButtons>
      {historias.map((historia, index) => (
        //con el map obtenemos de cada historia tambien index y txt.establecemos prop selesctedHistoria con boolean dependiendo de si coinciden index y count
        <Texto
          key={index}
          selectedHistoria={index === count ? true : false}
        >
          {historia.txt}
        </Texto>
      ))}
    </Container>
  );
}
export default Escena;
