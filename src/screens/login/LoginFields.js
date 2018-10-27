import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class LoginFields extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View>
        <View>
          <Text>Email :</Text>
          <TextInput
            autoCapitalize="none"
            value={this.state.email}
            onSubmitEditing={event => {
              this.refs._root.password.focus();
            }}
            onChangeText={email => {
              this.setState({ email });
              this.props.onEmailEntered(email);
            }}
            autoCorrect={false}
          />
        </View>
        <View>
          <Text>Password :</Text>
          <TextInput
            autoCapitalize="none"
            value={this.state.password}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({ password });
              this.props.onPasswordEntered(password);
            }}
          />
        </View>
      </View>
    );
  }
}
