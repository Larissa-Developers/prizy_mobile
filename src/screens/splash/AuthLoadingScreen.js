import React from 'react';
import { View } from 'react-native';
import FullscreenSpinner from '../../components/commons/FullscreenSpinner';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    if (this.isAuthenticated()) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  isAuthenticated = () => {
    //TODO: Fix authentication process
    return false;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FullscreenSpinner />
      </View>
    );
  }
}

export default AuthLoadingScreen;
