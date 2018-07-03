import React, { Component } from 'react'
import { Button, View } from 'react-native'
import firebase from 'firebase'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  }
  showMoreApp = () => {
    this.props.navigation.navigate('Other')
  }
  signOut = () => {
    firebase.auth()
      .signOut()
      .then(this.props.navigation.navigate('Auth'))
  }

  render () {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this.showMoreApp}/>
        <Button title="Actually, sign me out :)" onPress={this.signOut}/>
      </View>
    )
  }
}

export default HomeScreen