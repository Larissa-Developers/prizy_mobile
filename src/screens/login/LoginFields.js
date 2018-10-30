import React from 'react';
import { View, Text, TextInput } from 'react-native';
import LoginFieldsStyle from './LoginFieldsStyle';

export default class LoginFields extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View>
        <View style={LoginFieldsStyle.fieldContainer}>
          <Text style={LoginFieldsStyle.text}>Email :</Text>
          <TextInput
            style={LoginFieldsStyle.loginInput}
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
        <View style={LoginFieldsStyle.fieldContainer}>
          <Text style={LoginFieldsStyle.text}>Password :</Text>
          <TextInput
            style={LoginFieldsStyle.loginInput}
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
