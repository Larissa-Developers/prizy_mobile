import React from 'react';
import { View, Text, TextInput } from 'react-native';
import LoginFieldsStyle from './LoginFieldsStyle';

export default class LoginFields extends React.Component {
  state = {
    email: '',
    name: '',
  };

  render() {
    return (
      <View style={this.props.style}>
        <View style={LoginFieldsStyle.fieldContainer}>
          <Text style={[LoginFieldsStyle.text]}>Email :</Text>
          <TextInput
            style={LoginFieldsStyle.loginInput}
            autoCapitalize="none"
            value={this.state.email}
            onSubmitEditing={event => {
              this.nameField.focus();
            }}
            onChangeText={email => {
              this.setState({ email });
              this.props.onEmailEntered(email);
            }}
            autoCorrect={false}
          />
        </View>
        <View style={LoginFieldsStyle.fieldContainer}>
          <Text style={LoginFieldsStyle.text}>Name :</Text>
          <TextInput
            ref={input => {
              this.nameField = input;
            }}
            style={LoginFieldsStyle.loginInput}
            autoCapitalize="none"
            value={this.state.name}
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={name => {
              this.setState({ name });
              this.props.onNameEntered(name);
            }}
          />
        </View>
      </View>
    );
  }
}
