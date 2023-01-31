import styled, { css } from "styled-components";

export const ParentElement = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.div`
  display: flex;
  top: 0%;
  justify-content: center;
  align-items: center;
  flex-direction: raw;
  width: 100%;
  background-color: rgb(0,0,0);
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  ${props => props.Text && css`
    display: flex;
    justify-content: flex-end;
    padding-right: 2%;
  `}

  ${props => props.Child && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    font-family: Space Grotesk;
    font-weight: bold;
    margin: 2%;
    padding: 2%;
    width: 500px;
    border-radius: 25px;
`}
`

export const Text = styled.h1`
  color: Black;
  font-size: x-large;
  font-family: Space Grotesk;
  font-weight: bold;
  
  ${props => props.Header && css`
    color: white;
    font-size: xxx-large;
  `}
`

export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  font-size: large;
  text-decoration: underline;
  &:hover {
    text-shadow: 0px 0px 5px white;
  }
`