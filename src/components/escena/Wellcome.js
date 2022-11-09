import React from "react";
import {Ingles, Catalan, Castellano,Frances, Chino, Aleman,Start} from "./styled-components";
function Wellcome({start}){
  //importante pasar props para poder hacer renderizado condicional en app.js
  return(
    <div className="wellcome">
      <Ingles>Wellcome</Ingles>
      <Catalan>Benvingut</Catalan>
      <Castellano>Bienvenido</Castellano>
      <Frances>Bienvenue</Frances>
      <Aleman>Willkommen</Aleman>
      <Chino>欢迎</Chino>
      <Start onClick={start}>START</Start>
    </div>
  )
}
export default Wellcome;