import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from 'react-native';

import Home from '~/pages/Dashboard';
import OrderDetail from '~/pages/OrderDetail';

const HomeStack = createStackNavigator(
  {
    Home,
    OrderDetail,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(HomeStack);
