/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import LoginScreen from './components/login/LoginScreen';
import HomeScreen from './components/home/HomeScreen';
import AuthLoadingScreen from './components/splash/AuthLoadingScreen';
import AddEventScreen from './components/event/AddEventScreen';
import WinnerScreen from './components/winner/WinnerScreen';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <AppLaunchStack />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}

const AppStack = createStackNavigator({
  Home: HomeScreen,
  AddEvent: AddEventScreen,
  Winner: WinnerScreen,
});
const AuthStack = createStackNavigator({ Login: LoginScreen });

const AppLaunchStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
