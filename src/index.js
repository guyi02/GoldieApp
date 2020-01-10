import React, { Component } from 'react';
import { YellowBox } from 'react-native';

import '~/config/ReactotronConfig';

// Desabilita aviso (warning) de proptypes com tipagem divergente
YellowBox.ignoreWarnings([
  'Warning: Each',
  'Warning: Failed prop type',
  'VirtualizedLists should never be nested',
]);

import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components/native';

// Serviço que adiciona funções de roteamento para redux/redux sagas
import { setNavigator } from '~/services/navigationService';
import { metrics, fonts, colors } from '~/styles';

import Routes from '~/routes';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
  state = {
    user: null,
  };
  async componentDidMount() {
    let userStorage = await AsyncStorage.getItem('@user:credentials');
    const userinfo = JSON.parse(userStorage);
    this.setState({ user: userinfo });
  }

  render() {
    const { user } = this.state;
    const clientTheme = {
      metrics,
      fonts,
      colors:
        user == null || user == undefined || user == ''
          ? colors
          : {
              ...colors,
              primary: user?.background_1,
              secondary: user?.background_2,
              tertiary: user?.background_3,
            },
    };

    return (
      <Provider store={store}>
        <ThemeProvider theme={clientTheme}>
          <Routes ref={setNavigator} />
        </ThemeProvider>
      </Provider>
    );
  }
}
