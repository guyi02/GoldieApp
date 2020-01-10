import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// APP NAVIGATIONS
import AppStack from '~/navigations/AppStack';
// AUTH NAVIGATIONS
import AuthStack from '~/navigations/AuthStack';

import AuthLoading from '~/pages/LoadingScreen';

// SWITCH DE ROTAS PRIMÁRIAS
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      AppStack,
      AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default createAppContainer(Routes);
