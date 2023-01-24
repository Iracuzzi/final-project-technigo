import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import CreateCharacter from 'assets/dd1.jpg';
import Porfile from 'assets/dd2.jpg';
import Characters from 'assets/dd3.jpg';
import LogIn from 'assets/dd4.jpg';

const MainContent = () => {
  return (
    <>
    <Header>
      <Text>Online character creator for D&D players</Text>
    </Header>
    <ParentElement>
      <Link to={`/character`} title="Go to create your Character">
        <Container Image>
          <Image src={CreateCharacter} alt="Creation character page"/>
        </Container>
      </Link>
      <ContainerWhite>
        <Container Text>
          <Text White>Here you can create your character, save and share with others.</Text>
        </Container>
      </ContainerWhite>
      <ContainerBlack>
        <Container Text>
          <Text Black>You can save character from other people, change your porfile and write a back story for your character.</Text>
        </Container>
      </ContainerBlack>
      <Link  to={`/character-list`} title="Go to see all Characters">
        <Container Image>
          <Image src={Characters} alt="Characters page"/>
        </Container>
      </Link>
      <Link to={`/signup`} title="Create an account">
        <Container Image>
          <Image src={Porfile} alt="Porfile page"/>
        </Container>
      </Link>
      <ContainerWhite>
        <Container Text>
          <Text White>You can find other porfiles and take a look.</Text>
        </Container>
      </ContainerWhite>
      <ContainerBlack>
        <Container Text>
          <Text Black>You can save others characters to copy and change some stats or history.</Text>
        </Container>
      </ContainerBlack>
      <Link to={`/login`} title="Log in or create a new account">
        <Container Image>
          <Image src={LogIn} alt="Log In page" />
        </Container>
      </Link>
    </ParentElement>
    </>
  );
  }
const ParentElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`
const Header = styled.div`
  display: flex;
  top: 0%;
  justify-content: center;
  flex-direction: raw;
  width: 100%;
  background-color: rgb(0,0,0);
`
const Container = styled.div`
  display: flex;
  flex-direction: raw;

  ${props => props.TopButtons && css`
  position: absolute;
  top: 2%;
  right: 4%;
`}

  ${props => props.Image && css`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 200px;
`}

  ${props => props.Text && css`
  display: flex;
  justify-content: flex-end;
  padding-right: 2%;
  `}
`

const Text = styled.h1`
  color: white;
  font-size: xxx-large;
  font-family: Space Grotesk;
  font-weight: bold;
  padding-right: 2%;

  ${props => props.White && css`
  color: black;
  font-size: x-large;
  padding-left: 5%;
  `}

  ${props => props.Black && css`
  color: white;
  padding-left: 2%;
  font-size: x-large;
  `}
`

const ContainerWhite = styled.div`
  background-color: white;
  display: flex;
  flex-direction: raw;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 200px;

`

const ContainerBlack = styled.div`
  background-color: black;
  display: flex;
  flex-direction: raw;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 200px;
  border-right-color: 5px white;
`

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  font-size: large;
  text-decoration: underline;
  &:hover {
    text-shadow: 0px 0px 5px white;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  &:hover{
    opacity: 0.7;
  }
`
export default MainContent;