/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { initializeFirebase } from './libs/initialize'
import LoginScreen from './components/login/LoginScreen'
import HomeScreen from './components/home/HomeScreen'
import AuthLoadingScreen from './components/splash/AuthLoadingScreen'
import AddEventScreen from './components/event/AddEventScreen'
import WinnerScreen from './components/winner/WinnerScreen'

import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { Root } from 'native-base'

export default class App extends Component {

  componentWillMount () {
    initializeFirebase()
  }

  render () {
    return (
      <Root>
        <AppLaunchStack/>
      </Root>
    )
  }
}

const AppStack = createStackNavigator({
    Home: HomeScreen,
    AddEvent: AddEventScreen,
    Winner: WinnerScreen
  }
)
const AuthStack = createStackNavigator({Login: LoginScreen})

const AppLaunchStack = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)