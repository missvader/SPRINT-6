import React from "react";

function Escena({historias}){
  return(
    <>
      {historias.map((historia)=>(
        <p>{historia}</p>
      ))}
    </>
    );
  }
export default Escena;