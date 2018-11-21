import React from 'react';
import { connect } from 'react-redux';
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
import { fetchEvents } from '../../store/actions/events-actions';
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

    this.onOptionSelected = this.onOptionSelected.bind(this);
    this.showToast = this.showToast.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
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
    const { list, listing } = this.props.events;

    return (
      <Container>
        {listing && <FullscreenSpinner />}

        {!listing && (
          <Content>
            <List
              dataArray={list}
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

const mapStateToProps = state => ({
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
