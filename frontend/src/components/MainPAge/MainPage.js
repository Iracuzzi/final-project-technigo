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
          <Text>Here you can create your character, save and share with others.</Text>
          <Link to={`/character`} title="Go to create your Character">
            <button>Go to create a Character</button>
          </Link>
        </Container>
      </Container>
      <Container>
        <Container Child>
          <Text>You can save character from other people, change your porfile and write a back story for your character.</Text>
          <Link to={`/login`} title="Log in with your account">
           <button>Log in</button>
          </Link>
        </Container>
      </Container>
      <Container>
        <Container Child>
          <Text>You can find other porfiles and take a look.</Text>
          <Link  to={`/character-list`} title="Go to see all Characters">
            <button>Go to the Character list</button>
          </Link>
        </Container>
      </Container>
      <Container>
        <Container Child>
          <Text>You can save others characters to copy and change some stats or history.</Text>
          <Link to={`/signup`} title="Create an account">
            <button>Create an account</button>
          </Link>
        </Container>
      </Container>
    </ParentElement>
    </>
  );
  }

export default MainContent;