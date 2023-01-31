import styled, { css } from "styled-components";

export const ParentElement = styled.div`
display: flex;
justify-items: center;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  ${props => props.Character && css`
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
${props => props.Child && css`
    display: flex;
    felx-direction: column;
    font-family: Space Grotesk;
    font-weight: bold;
`}
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
export const Text = styled.h1`
  color: white;
  font-size: xxx-large;
  font-family: Space Grotesk;
  font-weight: bold;
  padding-right: 2%;

  ${props => props.Character && css`
    color: black;
    font-size: medium;
    font-family: Space Grotesk;
    font-weight: bold;
    padding-right: 2%;
`}
  ${props => props.Back && css`
    margin-top: 5%;
    margin-left: 5%;
    color: white;
    font-size: large;
    font-family: Space Grotesk;
    font-weight: bold;
  `}
`