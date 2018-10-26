import React from 'react';
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
import { getUrl } from '../../config/Meetup';
import FullscreenSpinner from '../../components/commons/FullscreenSpinner';

const BUTTONS = ['Check In', 'Prize', 'Cancel'];
const CHECK_IN_INDEX = 0;
const PRIZE_INDEX = 1;
const CANCEL_INDEX = 2;
//let selectedEvent = '';

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

  onOptionSelected(index) {
    if (index === CANCEL_INDEX) {
      return;
    }

    if (index === CHECK_IN_INDEX) {
      //TODO: check in user
      return;
    }

    if (index === PRIZE_INDEX) {
      //TODO: handle
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
    //TODO: handle sign out
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
                        //selectedEvent = item.id;
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
