import React from "react";
import {Start, Intro} from "./styled-components";
function Wellcome({start}){
  //importante pasar props para poder hacer renderizado condicional en app.js
  return(
    <div className="wellcome">
      <Intro>Aquesta es la història d´un superheroi...</Intro>
      <Start onClick={start}>START</Start>
    </div>
  )
}
export default Wellcome;