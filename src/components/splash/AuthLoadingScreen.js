import React from 'react';
import { Content } from 'native-base';
import firebase from 'firebase';
import FullscreenSpinner from '../commons/FullscreenSpinner';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return (
      <Content>
        <FullscreenSpinner />
      </Content>
    );
  }
}

export default AuthLoadingScreen;
