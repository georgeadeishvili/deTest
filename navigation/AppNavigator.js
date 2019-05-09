import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TabNavigation from "./MainTabNavigator";
import ResetScreen from '../screens/ResetScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: TabNavigation
  })
);
