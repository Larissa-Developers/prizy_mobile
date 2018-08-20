import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Button, Text, Spinner } from 'native-base'
import firebase from 'firebase'
import Welcome from './Welcome'
import LoginFields from './LoginFields'
import FullscreenSpinner from '../commons/FullscreenSpinner'

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login or Register!',
  }

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
    this.onEmailEntered = this.onEmailEntered.bind(this)
    this.onPasswordEntered = this.onPasswordEntered.bind(this)
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginError = this.onLoginError.bind(this)
  }

  onEmailEntered (email) {
    this.setState({email})
  }

  onPasswordEntered (password) {
    this.setState({password})
  }

  onLoginSuccess () {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
    this.props.navigation.navigate('App')
  }

  onLoginError (error) {
    this.setState({
      loading: false,
      error: error
    })
  }

  handleLogin () {
    this.setState({
      error: '',
      loading: true
    })
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(this.onLoginSuccess)
          .catch((error) => {
            console.log(error.message)
            this.onLoginError(error.message)
          })
      })
  }

  showLoading () {
    if (this.state.loading) {
      return <FullscreenSpinner/>
    }

    return (
      <Content>
        <Welcome/>
        <LoginFields
          onEmailEntered={this.onEmailEntered}
          onPasswordEntered={this.onPasswordEntered}
        />
        <Text style={styles.errorText}> {this.state.error} </Text>
        <Button
          style={styles.button}
          onPress={() => this.handleLogin()}
        >
          <Text>Login or sign up!</Text>
        </Button>
      </Content>
    )
  }

  render () {
    return (
      <Container>
        {this.showLoading()}
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignSelf: 'center'
  },
  errorText: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center'
  },
})

export default LoginScreen