/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { initializeFirebase } from './libs/initialize'
import LoginForm from './components/login/LoginForm'

export default class App extends Component<Props> {

  componentWillMount () {
    initializeFirebase()
  }

  render () {
    return (
      <LoginForm/>
    )
  }
}
