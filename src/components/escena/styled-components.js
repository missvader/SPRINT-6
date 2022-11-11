import styled from 'styled-components';
export const Texto = styled.p`
  display: flex;
  height: 2rem;
  border: 2px solid black;
  justify-content: center;
  border-radius: 50px;
  margin-right: 2rem;
  margin-left: 2rem;
  padding: 1rem 0 1rem 0;
  
  background-color: ${({selectedHistoria})=>
    (selectedHistoria ? "#FF9F9F" : "rgb(255,255,255,0.4)") };
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({background})=> `url(${background})`};

`
export const Button = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.5rem;
  &:hover{
    cursor: pointer;
  }
  background-color: rgb(90, 135, 135,0.5);
  color: white;
`
export const DivButtons = styled.div`
  display: flex;
  margin: 0.5rem;
`

export const Start = styled.button`
  width: 15%;
  height: 3rem;
  font-weight: bold;
  border-color: #61196C;
  color: #fff;
  box-shadow: 0 0 40px 40px #61196C inset, 0 0 0 0 #61196C;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  &:hover {
  box-shadow: 0 0 10px 0 #61196C inset, 0 0 10px 4px #61196C;
  color: #61196C;
  }

 
`
export const Intro = styled.p`
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  font-family: 'Courier New', Courier, monospace;
`
