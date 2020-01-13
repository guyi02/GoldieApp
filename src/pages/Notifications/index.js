import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from './styles';
import EmptyList from '~/components/EmptyList';

export default class Notifications extends Component {
  static navigationOptions = {
    title: 'Notificaçãoes',
  };

  state = {
    data: [
      {
        id: 1,
        message: 'Lista 1',
      },
      {
        id: 2,
        message: 'Lista 2',
      },
      {
        id: 3,
        message: 'Lista 3',
      },
      {
        id: 4,
        message: 'Lista 4',
      },
    ],
  };

  render() {
    return (
      <Container>
        {this.state.data.map(item => (
          <View key={item.id}>
            <EmptyList message={item.message} />
          </View>
        ))}
      </Container>
    );
  }
}
