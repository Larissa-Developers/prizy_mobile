import React from 'react';
import Welcome from './Welcome';
import LoginFields from './LoginFields';
import FullscreenSpinner from '../../components/commons/FullscreenSpinner';
import LoginStyle from './LoginScreenStyle';
import { View, Text, TouchableOpacity } from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login or Register!',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onEmailEntered = email => {
    this.setState({ email });
  };

  onPasswordEntered = password => {
    this.setState({ password });
  };

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
    this.props.navigation.navigate('App');
  };

  onLoginError = error => {
    this.setState({
      loading: false,
      error: error,
    });
  };

  handleLogin = () => {
    //TODO: Fix login process
  };

  showLoading = () => {
    if (this.state.loading) {
      return <FullscreenSpinner />;
    }

    return (
      <View style={{ backgroundColor: 'white' }}>
        <Welcome />
        <LoginFields
          onEmailEntered={this.onEmailEntered}
          onPasswordEntered={this.onPasswordEntered}
        />
        <Text style={LoginStyle.errorText}> {this.state.error} </Text>
        <TouchableOpacity
          style={LoginStyle.button}
          onPress={() => this.handleLogin()}
        >
          <Text>Login or sign up!</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return <View>{this.showLoading()}</View>;
  }
}

export default LoginScreen;
