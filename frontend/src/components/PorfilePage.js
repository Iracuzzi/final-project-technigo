import React from 'react';
import styled, { css } from 'styled-components'

const PorfilePage = () => {
  return (
    <>
      <Header>
        <Text>Online character creator for D&D players</Text>
      </Header>
      <ParentElement>
        <Container>
      
        </Container>
      </ParentElement>
      </>
  )
} 


const ParentElement = styled.div`
display: flex;
justify-items: center;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
background-color: rgb(33, 46, 167);
`
const Header = styled.div`
  display: flex;
  top: 0%;
  justify-content: center;
  flex-direction: raw;
  width: 100%;
  background-color: rgb(0,0,0);
`
const Text = styled.h1`
  color: white;
  font-size: xxx-large;
  font-family: Space Grotesk;
  font-weight: bold;
  padding-right: 2%;
`
const Container = styled.div`
  background-color: rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 75%;
  border-radius: 25px;
`

export default PorfilePage;