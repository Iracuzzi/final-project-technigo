import React, {useEffect, useState} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import user from "reducer/user";
import { Header, ParentElement, Container, Input, Text } from "./CharacterPageStyle";

const CharacterPage = () => {
  const [name, setName] = useState("");
  const [backstory, setBackstory] = useState("");
  const [race, setRace] = useState("");
  const [strength, setStrength] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [constitution, setConstitution] = useState("");
  const [intelligence, setintelligence] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [charisma, setCharisma] = useState("");
  const [profession, setProfession] = useState("");
  const [mode, setMode] = useState("new-character");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    if (!accessToken) {
        navigate("/login");
    }
  }, [accessToken])

  const onFormSubmit =(event) => {
    event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
              {name: name,
               backstory: backstory,
               race: race,
               strength: strength,
               dexterity: dexterity,
               constitution: constitution,
               intelligence: intelligence,
               wisdom: wisdom,
               charisma: charisma,
               profession: profession,
              })
        }
        fetch(API_URL(mode), options)
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    batch(()=> {
                        dispatch(user.actions.setName(data.response.name));
                        dispatch(user.actions.setBackstory(data.response.backstory));
                        dispatch(user.actions.setRace(data.response.race));
                        dispatch(user.actions.setStrength(data.response.strength));
                        dispatch(user.actions.setDexterity(data.response.dexterity));
                        dispatch(user.actions.setConstitution(data.response.constitution));
                        dispatch(user.actions.setintelligence(data.response.intelligence));
                        dispatch(user.actions.setWisdom(data.response.wisdom));
                        dispatch(user.actions.setCharisma(data.response.charisma));
                        dispatch(user.actions.setProfession(data.response.profession));
                        dispatch(user.actions.setAccessToken(data.response.accessToken));
                        dispatch(user.actions.setError(null));
                    });
                } else {
                    batch (() => {
                      dispatch(user.actions.setName(null));
                      dispatch(user.actions.setBackstory(null));
                      dispatch(user.actions.setRace(null));
                      dispatch(user.actions.setStrength(null));
                      dispatch(user.actions.setDexterity(null));
                      dispatch(user.actions.setConstitution(null));
                      dispatch(user.actions.setintelligence(null));
                      dispatch(user.actions.setWisdom(null));
                      dispatch(user.actions.setCharisma(null));
                      dispatch(user.actions.setProfession(null));
                      dispatch(user.actions.setAccessToken(null));
                      dispatch(user.actions.setError(data.response));
                    });
                }
            })
    }
    return (
      <>
      <Header>
        <Text Header>Online character creator for D&D players</Text>
      </Header>
      <Link to={"/"} >
        <Text Back> ??? Back</Text>
      </Link>
      <ParentElement>
          <Container Child>
              <Text>
                <h1>Character creator online</h1>
                <h2>Create a new Character now.</h2>
              </Text>
              <Container Form>
              <form onSubmit={onFormSubmit}>
                <Input 
                  required
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder='Character Name' />
                <Input 
                  required
                  type="text"
                  id="backstory"
                  value={backstory}
                  onChange={e => setBackstory(e.target.value)}
                  placeholder='Character backstory' />
                <Input
                  required 
                  type="text" 
                  id="race" 
                  placeholder="Race"
                  value={race} 
                  onChange={e => setRace(e.target.value)}/>
                <Input
                  required 
                  type="number" 
                  id="strength" 
                  placeholder="Strength"
                  value={strength} 
                  onChange={e => setStrength(e.target.value)}/>
                <Input
                  required 
                  type="number" 
                  id="dexterity" 
                  placeholder="Dexterity"
                  value={dexterity} 
                  onChange={e => setDexterity(e.target.value)}/>
                <Input
                  required 
                  type="number" 
                  id="constitution" 
                  placeholder="Constitution"
                  value={constitution} 
                  onChange={e => setConstitution(e.target.value)}/>
                <Input
                  required 
                  type="number" 
                  id="intelligence" 
                  placeholder="Intelligence"
                  value={intelligence} 
                  onChange={e => setintelligence(e.target.value)}/>
                <Input
                  required 
                  type="number" 
                  id="wisdom" 
                  placeholder="Wisdom"
                  value={wisdom} 
                  onChange={e => setWisdom(e.target.value)}/>
                <Input
                  required 
                  type="number" 
                  id="charisma" 
                  placeholder="Charisma"
                  value={charisma} 
                  onChange={e => setCharisma(e.target.value)}/>
                <Input
                  required 
                  type="text" 
                  id="profession" 
                  placeholder="Profession"
                  value={profession} 
                  onChange={e => setProfession(e.target.value)}/><br></br>
                <button type="submit" onClick={() => setMode("new-character")}>Create Character</button>
              </form>
              
            </Container>
          </Container>
      </ParentElement>
      </>
  )
} 

export default CharacterPage;