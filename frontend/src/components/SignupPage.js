import React, {useEffect, useState} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "utils/utils";
import user from "reducer/user";
import styled, { css } from 'styled-components'

const SignupPage = () => {
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("register"); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (accessToken) {
        navigate("/");
    }
}, [accessToken])

const onFormSubmit =(event) => {
  event.preventDefault();
      const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({username: username, password: password, nickname: nickname})
      }
      fetch(API_URL(mode), options)
          .then(response => response.json())
          .then(data => {
              if(data.success) {
                  batch(()=> {
                      dispatch(user.actions.setUsername(data.response.username));
                      dispatch(user.actions.setNickname(data.response.nickname));
                      dispatch(user.actions.setUserId(data.response.id))
                      dispatch(user.actions.setAccessToken(data.response.accessToken));
                      dispatch(user.actions.setError(null));
                  });
              } else {
                  batch (() => {
                      dispatch(user.actions.setUsername(null));
                      dispatch(user.actions.setNickname(null));
                      dispatch(user.actions.setUserId(null))
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
        <ParentElement>
            <Container>
                <Text>
                  <h1>Character creator online</h1>
                  <h2>Create a new account to enjoy the features.</h2>
                </Text>
                <form onSubmit={onFormSubmit}>
                <input 
            required
            type="text"
            id="nickname"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder='Nickname' />
              <input 
            required
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Username' />
        <input
            required 
            type="password" 
            id="password" 
            placeholder="password"
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
              <button type="submit" onClick={() => setMode("register")}>Submit</button>
              </form>
            </Container>
        </ParentElement>
        </>
    )
} 

const Header = styled.div`
  display: flex;
  top: 0%;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: rgb(0,0,0)
  `

const ParentElement = styled.div`
display: flex;
justify-items: center;
flex-direction: column;
height: 100vh;
width: 100vw;
background-color: rgb(85, 128, 162);
justify-content: center;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
background-color: rgba(255,255,255,0.8);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

height: 600px;
width: 500px;
border-radius: 25px;
`

const Input = styled.input`
margin: 20px;
padding: 6px;
background: transparent;
border-top-color: transparent;
border-left-color: transparent;
border-right-color: transparent;
border-bottom-color: black;
`
const Text = styled.div`
color: Black;
font-size: large;
font-family: Space Grotesk;
font-weight: bold;
padding-left: 20%;
padding-right: 20%;

${props => props.Header && css`
color: white;
font-size: xxx-large;
font-family: Space Grotesk;
font-weight: bold;
padding-right: 2%;
`}
`
export default SignupPage;