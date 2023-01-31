import React from 'react';;
import { Link } from 'react-router-dom';
import { ParentElement, Header, Container, Text } from './MainPageStyle';

const MainContent = () => {
  return (
    <>
    <Header>
      <Text Header>Online character creator for D&D players</Text>
    </Header>
    <ParentElement>
    <Container>
        <Container Child>
          <Text>Creat a new account and you can enjoy all the service.</Text>
          <Link to={`/signup`} title="Create an account">
            <button>Create an account</button>
          </Link>
        </Container>
      </Container>
      <Container>
        <Container Child>
          <Text>Log in and start creating a character.</Text>
          <Link to={`/login`} title="Log in with your account">
           <button>Log in</button>
          </Link>
        </Container>
      </Container>
      <Container>
        <Container Child>
          <Text>Creat a character and write the story behind.</Text>
          <Link to={`/character`} title="Go to create your Character">
            <button>Go to create a Character</button>
          </Link>
        </Container>
      </Container>
      <Container>
        <Container Child>
          <Text>Look the other peapole characters and histories.</Text>
          <Link  to={`/character-list`} title="Go to see all Characters">
            <button>Go to the Character list</button>
          </Link>
        </Container>
      </Container>
    </ParentElement>
    </>
  );
  }

export default MainContent;