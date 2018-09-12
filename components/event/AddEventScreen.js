import React from 'react';
import { Button } from 'react-native';
import firebase from 'firebase';
import { Container, Content, Form, Textarea } from 'native-base';
import FullscreenSpinner from '../commons/FullscreenSpinner';

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

    firebase
      .database()
      .ref('events/')
      .push({
        eventName: this.state.eventName,
      })
      .catch(error => {
        console.log(error);
      })
      .then(this.props.navigation.goBack());
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
