import React from 'react';
import { Container, ClientName } from './styles';

const ListCardHeader = ({ clientName }) => {
  return (
    <Container>
      <ClientName>{clientName}</ClientName>
    </Container>
  );
};

export default ListCardHeader;
