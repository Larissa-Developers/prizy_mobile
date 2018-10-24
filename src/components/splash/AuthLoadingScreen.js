import React from 'react';
import { Content } from 'native-base';
import FullscreenSpinner from '../commons/FullscreenSpinner';

class AuthLoadingScreen extends React.Component {
  render() {
    return (
      <Content>
        <FullscreenSpinner />
      </Content>
    );
  }
}

export default AuthLoadingScreen;
