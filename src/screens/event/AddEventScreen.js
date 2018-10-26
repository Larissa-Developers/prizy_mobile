import React from 'react';
import { Button } from 'react-native';

import { Container, Content, Form, Textarea } from 'native-base';
import FullscreenSpinner from '../../components/commons/FullscreenSpinner';

class AddEventScreen extends React.Component {
  static navigationOptions = {
    title: 'Add new meetup',
  };

  state = {
    loading: false,
    eventName: '',
    date: new Date(),
  };

  save = () => {
    console.log('saving');
    this.setState({ loading: true });
  };

  showLoading() {
    if (this.state.loading) {
      return <FullscreenSpinner />;
    }

    return (
      <Content padder>
        <Form>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Textarea"
            onChangeText={text => this.setState({ eventName: text })}
            value={this.state.eventName}
          />
        </Form>
        <Button title="Save" onPress={this.save} />
      </Content>
    );
  }

  render() {
    return <Container>{this.showLoading()}</Container>;
  }
}

export default AddEventScreen;
