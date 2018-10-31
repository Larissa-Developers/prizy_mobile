import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
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
    const { user } = this.props.account;
    return user != null && user.id != null;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FullscreenSpinner />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account,
});

export default connect(mapStateToProps)(AuthLoadingScreen);
