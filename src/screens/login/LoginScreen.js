import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import Welcome from './Welcome';
import LoginFields from './LoginFields';
import FullscreenSpinner from '../../components/commons/FullscreenSpinner';

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
      <Content>
        <Welcome />
        <LoginFields
          onEmailEntered={this.onEmailEntered}
          onPasswordEntered={this.onPasswordEntered}
        />
        <Text style={styles.errorText}> {this.state.error} </Text>
        <Button style={styles.button} onPress={() => this.handleLogin()}>
          <Text>Login or sign up!</Text>
        </Button>
      </Content>
    );
  };

  render() {
    return <Container>{this.showLoading()}</Container>;
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
  errorText: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default LoginScreen;
