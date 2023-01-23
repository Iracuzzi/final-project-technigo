import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import styled, { css } from 'styled-components'
import { API_URL } from "utils/utils";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([])
  const accessToken = useSelector((store) => store.user.accessToken);
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
      <Container>
        {characterList}
      </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: raw;
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

export default CharacterList;