import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled, { css } from 'styled-components'
import { API_URL } from "utils/utils";
import { combineReducers, configureStore } from '@reduxjs/toolkit';



const ShowCharPage = () => {

  const [CharacterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(false);
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

useEffect(() => {
  if (!accessToken) {
      navigate("/login");
  }
}, [accessToken]);

  const fetchCharacters = () => {
    setLoading(true)
    fetch('https://final-project-backend-xnbc5z4fva-lz.a.run.app/character-list')
      .then(res => res.json())
      .then(data => setCharacterList(data.response))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchCharacters();
  }, []);


  if (loading) {
    return <h1>Loading in progres...</h1>
  }



  return (
    <>
      <Header>
        <Text>Online character creator for D&D players</Text>
      </Header>
      <Link to={"/"} >
        <Text Back> ← Back</Text>
      </Link>
    <ParentElement>
      <Container Child>
      {CharacterList.map(character => (
        <Container Character>
         <Text Character> Name: {character.name}</Text>
         <Text Character> Race: {character.race}</Text>
         <Text Character> Strength: {character.strength}</Text>
         <Text Character> Dexterity: {character.dexterity}</Text>
         <Text Character> Constitution: {character.constitution}</Text>
         <Text Character> Intelligence: {character.intelligence}</Text>
         <Text Character> Wisdom: {character.wisdom}</Text>
         <Text Character> Charisma: {character.charisma}</Text>
         <Text Character> Profession: {character.profession}</Text>
         <Text Character> Backstory:</Text><Text Character><br></br> {character.backstory}</Text>
        </Container>
      ))}
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
`

const Container = styled.div`
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
const Header = styled.div`
  display: flex;
  top: 0%;
  justify-content: center;
  align-items: center;
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

export default ShowCharPage;