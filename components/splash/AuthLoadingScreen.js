import React, { Component } from 'react'
import { Content, Spinner } from 'native-base'
import firebase from 'firebase'
import FullscreenSpinner from '../commons/FullscreenSpinner'

class AuthLoadingScreen extends Component {

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('App')
      } else {
        this.props.navigation.navigate('Auth')
      }
    })
  }

  render () {
    return (
      <Content>
        <FullscreenSpinner/>
      </Content>
    )
  }
}

export default AuthLoadingScreen