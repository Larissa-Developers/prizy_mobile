import React from 'react';
import firebase from 'firebase';
import {
  Container,
  Content,
  ActionSheet,
  Button,
  List,
  ListItem,
  Toast,
  Text,
} from 'native-base';
import { checkUserIn, getCheckedInUsersForEvent } from '../../libs/database';
import { getUrl } from '../../config/Meetup';
import FullscreenSpinner from '../commons/FullscreenSpinner';

const BUTTONS = ['Check In', 'Prize', 'Cancel'];
const CHECK_IN_INDEX = 0;
const PRIZE_INDEX = 1;
const CANCEL_INDEX = 2;
let selectedEvent = '';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      loading: true,
    };

    this.onOptionSelected = this.onOptionSelected.bind(this);
    this.showToast = this.showToast.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
  }

  componentDidMount() {
    fetch(getUrl())
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          events: responseJson,
          loading: false,
        });
      })
      .catch(error => this.showToast(error.message));
  }

  componentWillUnmount() {
    firebase
      .database()
      .ref()
      .off('value');
  }

  onOptionSelected(index) {
    if (index === CANCEL_INDEX) {
      return;
    }

    if (index === CHECK_IN_INDEX) {
      checkUserIn(firebase.auth().currentUser.email, selectedEvent)
        .then(this.showToast('Checked in successfully, good luck!'))
        .catch(error => this.showToast(error.message));
      return;
    }

    if (index === PRIZE_INDEX) {
      if (firebase.auth().currentUser.email !== 'renegens@gmail.com') {
        return;
      }

      getCheckedInUsersForEvent(selectedEvent).on(
        'child_added',
        childSnapshot => {
          const users = [];
          users.push({
            member: childSnapshot.val().email,
          });

          const firstWinner = users[Math.floor(Math.random() * users.length)];

          console.log('First Winner ' + firstWinner);

          this.props.navigation.navigate('Winner', {
            winners: [firstWinner, firstWinner],
          });
        }
      );
    }
  }

  showToast(message) {
    Toast.show({
      text: message,
      buttonText: 'Dismiss',
      duration: 3000,
    });
  }

  updateEvents(events) {
    this.setState({
      events: events,
      clicked: 'd',
    });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(this.props.navigation.navigate('Auth'));
  };

  render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading && <FullscreenSpinner />}

        {!loading && (
          <Content>
            <List
              dataArray={this.state.events}
              renderRow={item => (
                <ListItem
                  button
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        title: 'Options',
                      },
                      buttonIndex => {
                        selectedEvent = item.id;
                        this.onOptionSelected(buttonIndex);
                      }
                    )
                  }
                >
                  <Text>{item.name}</Text>
                </ListItem>
              )}
            />
          </Content>
        )}

        <Button block danger onPress={this.signOut}>
          <Text>Logout</Text>
        </Button>
      </Container>
    );
  }
}

export default HomeScreen;
