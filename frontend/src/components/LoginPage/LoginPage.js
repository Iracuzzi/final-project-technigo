import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from 'utils/utils';
import user from 'reducer/user';
import { ParentElement, Header, Container, Input, Text, Button } from './LoginPageStyle';

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

export default LoginPage;