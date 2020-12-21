import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import Login from '../screens/LoginScreen/Login'
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen'
import MovieScreen from '../screens/MovieScreen/MovieScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen/MovieDetailScreen';

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    Login: {screen: Login},
    RegistrationScreen: {screen: RegistrationScreen},
    MovieScreen: {screen: MovieScreen},
    MovieDetailScreen: {screen: MovieDetailScreen},
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
