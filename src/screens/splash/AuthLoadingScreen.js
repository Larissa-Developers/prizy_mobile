import React from 'react';
import { Content } from 'native-base';
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
      <Content>
        <FullscreenSpinner />
      </Content>
    );
  }
}

export default AuthLoadingScreen;
