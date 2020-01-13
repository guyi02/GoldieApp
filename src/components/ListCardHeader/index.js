import React from 'react';
import { Container, ClientName, Square } from './styles';

const ListCardHeader = ({ clientName, bg }) => {
  return (
    <Container>
      <Square bg={bg} />
      <ClientName>{clientName}</ClientName>
    </Container>
  );
};

export default ListCardHeader;
