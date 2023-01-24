import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import styled, { css } from 'styled-components';
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from 'utils/utils';
import user from 'reducer/user';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  
  useEffect( () => {
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
          body: JSON.stringify({username: username, password: password})
      }
      fetch(API_URL(mode), options)
          .then(response => response.json())
          .then(data => {
              if(data.success) {
                  batch(()=> {
                      dispatch(user.actions.setUsername(data.response.username));
                      dispatch(user.actions.setUserId(data.response.id))
                      dispatch(user.actions.setAccessToken(data.response.accessToken));
                      dispatch(user.actions.setError(null));
                  });
              } else {
                  batch (() => {
                      dispatch(user.actions.setUsername(null));
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
    <Link to={"/"} >
        <Text Back> ← Back</Text>
    </Link>
    <ParentElement>
      <Container>
        <Text>
          <h1>Character creator online</h1>
          <h2>Enter with your account to get acces to all the features.</h2>
        </Text>
        <form onSubmit={onFormSubmit} onChange={()=>setMode("login")}>
        <Input 
            required
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Username' />
        <Input
            required 
            type="password" 
            id="password" 
            placeholder="password"
            value={password} 
            onChange={e => setPassword(e.target.value)}/><br></br>
        <Button onSubmit={onFormSubmit}>Log in</Button>
        </form>
        <Link to={"/signup"} >
        <Text Create>Create an acount</Text>
        </Link>
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
  width: 400px;
  padding: 5%;
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
const Button = styled.button`
  margin-left: 45%;
`

export default LoginPage;