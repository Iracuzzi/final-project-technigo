import React, {useEffect, useState} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import user from "reducer/user";
import { Header, ParentElement, Container, Input, Text, Button } from "./SignupPageStyle";

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
        <Link to={"/"} >
          <Text Back> ← Back</Text>
        </Link>
        <ParentElement>
          <Container>
            <Text>
              <h1>Character creator online</h1>
              <h2>Create a new account to enjoy the features.</h2>
            </Text>
            <form onSubmit={onFormSubmit}>
              <Input 
                required
                type="text"
                id="nickname"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                placeholder='Nickname' />
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
              <Button type="submit" onClick={() => setMode("register")}>Submit</Button>
            </form>
          </Container>
        </ParentElement>
        </>
    )
} 

export default SignupPage;