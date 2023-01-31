import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ParentElement, Header, Container, Text } from './ShowCharPageStyle';



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
      .then(data => setCharacterList(data.characterList))
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

export default ShowCharPage;