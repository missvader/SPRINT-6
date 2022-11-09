import styled from 'styled-components';
export const Texto = styled.p`
  display: flex;
  border: 2px solid black;
  justify-content: center;
  border-radius: 50px;
  margin-right: 2rem;
  margin-left: 2rem;
  padding: 1rem 0 1rem 0;
  background-color: ${({selectedHistoria})=>
    (selectedHistoria ? "#FF9F9F" : "white") };
`
export const Container = styled.div`
  display: grid;

`
export const Button = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.5rem;
  &:hover{
    cursor: pointer;
  }
  background-color: #5A8787;
  color: white;
`
export const DivButtons = styled.div`
  display: flex;
  margin: 0.5rem;
`

export const Start = styled.button`
  background-color: #DE543F;
  width: 15%;
  height: 2rem;
  border: 1px solid grey;
  font-weight: bolder;
  &:hover{
    cursor: pointer;
  }
`
export const Ingles = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 3rem;
`
export const Catalan = styled.p`
  color: #1BDABA;
  font-size: 2rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
export const Castellano = styled.p`
  color: #C2A83E;
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
`
export const Aleman = styled.p`
  color: #15B097;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 2rem;
`
export const Frances = styled.p`
  color: #314949;
  font-size: 1rem;
  font-family: 'Courier New', Courier, monospace;
`
export const Chino = styled.p`
  color: #09493E;
  font-size: 2rem;
`
