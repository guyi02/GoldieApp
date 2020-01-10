import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeStack from '~/navigations/HomeStack';
import Notificacoes from '~/pages/Notifications';
import Graficos from '~/pages/Graficos';
import Perfil from '~/pages/Perfil';

const AppStack = createBottomTabNavigator(
  {
    "Home":HomeStack,
    "Gráficos": Graficos,
    "Notificações": Notificacoes,
    Perfil,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Perfil') {
          iconName = 'user';
        } else if (routeName === 'Gráficos') {
          iconName = 'chart-pie';
        } else if (routeName === 'Notificações') {
          iconName = 'bell';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fdd26a',
      inactiveTintColor: '#888',
      style: {
        backgroundColor: '#060c1f',
      },
    },
  }
);

export default createAppContainer(AppStack);
