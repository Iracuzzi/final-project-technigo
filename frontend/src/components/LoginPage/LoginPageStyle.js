import styled, { css } from "styled-components";

export const Header = styled.div`
  display: flex;
  top: 0%;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: rgb(0,0,0)
`

export const ParentElement = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  background-color: rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 400px;
  padding: 5%;
  border-radius: 25px;
`

export const Input = styled.input`
  margin: 20px;
  padding: 6px;
  background: transparent;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: black;
`
export const Text = styled.div`
  color: Black;
  font-size: large;
  font-family: Space Grotesk;
  font-weight: bold;

  ${props => props.Back && css`
    margin-top: 5%;
    margin-left: 5%;
    color: white;
    font-size: large;
    font-family: Space Grotesk;
    font-weight: bold;
  `}

  ${props => props.Header && css`
  display: flex;
  justify-content: center;
  color: white;
  font-size: xxx-large;
  font-family: Space Grotesk;
  font-weight: bold;
  padding-right: 2%;
  `}

  ${props => props.Create && css`
    color: blue;
    font-size: small;
    font-family: Space Grotesk;
    font-weight: bold;
    padding: 20px;
  `}
`
export const Button = styled.button`
  margin-left: 45%;
`