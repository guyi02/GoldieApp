import React, { Component } from 'react';

import { Container, Header, MessageText } from './styles';

const EmptyList = ({ message }) => {
  return (
    <Container
      style={{
        elevation: 2,
      }}
    >
      <Header>
        <MessageText>{message}</MessageText>
      </Header>
    </Container>
  );
};

export default EmptyList;
