import React from 'react';
import styled, { css } from 'styled-components'

const CharacterList = () => {

  return (
    <>
    <ParentElement>
      <Header>
        <Text>Online character creator for D&D players</Text>
      </Header>
    </ParentElement>
    </>
  )
} 


const ParentElement = styled.div`
display: flex;
justify-items: center;
flex-direction: column;
height: 100%;
width: 100%;
`

export default CharacterList;