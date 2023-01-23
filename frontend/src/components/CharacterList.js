import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import { API_URL } from "utils/utils";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([])
  const [mode, setMode] = useState("character-list");
  const fetchCharacters = () => {
    fetch(API_URL(mode))
      .then(res => res.json())
      .then(data => setCharacterList(data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    if (!accessToken) {
        navigate("/login");
    }
}, [accessToken])

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