import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Credencials from '~/pages/Auth/Credencials';
import Login from '~/pages/Auth/Login';

const AuthStack = createStackNavigator(
  {
    Credencials,
    Login,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AuthStack);
