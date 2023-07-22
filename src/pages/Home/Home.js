import React from 'react';
import { HomeContainer, Nav,Container,NavContainer,Text,Author } from './Home.styled';

export default function Home() {
  return (
    <HomeContainer>
      <Container>
        <Text>
          A phone book with built-in keyword search is extremely useful for
          saving and quickly finding contacts. The phone book is always at hand.
        </Text>

        <NavContainer>
          To use the application, you need to <Nav to="/register">Sign up</Nav>
          up or<Nav to="/login">Sign in</Nav>
          <Author>Created by Konstantin Sorochan</Author>
        </NavContainer>
      </Container>
    </HomeContainer>
  );
}
