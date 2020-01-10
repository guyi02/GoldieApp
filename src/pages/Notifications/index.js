import React, { Component } from 'react';
import { BemVindo, Container } from './styles';

export default class Notifications extends Component {
  render() {
    return (
      <Container>
        <BemVindo>
          é simplesmente uma simulação de texto da indústria tipográfica e de
          impressos, e vem sendo utilizado desde o século XVI, quando um
          impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
          fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não{' '}
        </BemVindo>
      </Container>
    );
  }
}
