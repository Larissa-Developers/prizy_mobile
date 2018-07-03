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
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

export default class App extends Component {

  componentWillMount () {
    initializeFirebase()
  }

  render () {
    return (
      <AppLaunchStack/>
    )
  }
}

const AppStack = createStackNavigator({Home: HomeScreen})
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