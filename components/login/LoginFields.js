import React from 'react';
import { Form, Item, Input, Label } from 'native-base';

export default class LoginFields extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <Form>
        <Item fixedLabel>
          <Label>Email</Label>
          <Input
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
        </Item>
        <Item fixedLabel last>
          <Label>Password</Label>
          <Input
            autoCapitalize="none"
            value={this.state.password}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({ password });
              this.props.onPasswordEntered(password);
            }}
          />
        </Item>
      </Form>
    );
  }
}
