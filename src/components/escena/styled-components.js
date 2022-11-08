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
`
export const DivButtons = styled.div`
  display: flex;
  margin: 0.5rem;
`