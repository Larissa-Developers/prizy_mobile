import React from 'react';
import { ActivityIndicator, RefreshControl, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import {
  Content,
  ActionSheet,
  Button,
  List,
  ListItem,
  Toast,
  Text,
} from 'native-base';
import { fetchEvents } from '../../store/actions/events-actions';
import EmptySpaceContainer from '../../components/emptySpaceContainer/EmptySpaceContainer';
import RetryView from '../../components/commons/RetryView';

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
    this.renderEmptySpace = this.renderEmptySpace.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
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

  renderEmptySpace() {
    const { events, fetchEvents: onFetchEvents } = this.props;
    const { listing } = events;
    if (listing) {
      return <ActivityIndicator animating={true} />;
    }
    return (
      <RetryView message={'No events available'} onPress={onFetchEvents} />
    );
  }

  render() {
    const { events, fetchEvents: onFetchEvents } = this.props;
    const { list, listing } = events;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <EmptySpaceContainer
          showEmptySpace={!list.length}
          onRenderEmptySpace={this.renderEmptySpace}
        >
          <Content
            refreshControl={
              <RefreshControl refreshing={listing} onRefresh={onFetchEvents} />
            }
          >
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
        </EmptySpaceContainer>

        <Button block danger onPress={this.signOut}>
          <Text>Logout</Text>
        </Button>
      </SafeAreaView>
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
