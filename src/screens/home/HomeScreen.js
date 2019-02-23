import React from 'react';
import { ActivityIndicator, RefreshControl, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Content, Button, List, ListItem, Toast, Text } from 'native-base';
import { fetchEvents } from '../../store/actions/events-actions';
import EmptySpaceContainer from '../../components/emptySpaceContainer/EmptySpaceContainer';
import RetryView from '../../components/commons/RetryView';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.showToast = this.showToast.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
    this.renderEmptySpace = this.renderEmptySpace.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
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
                <ListItem button onPress={() => {}}>
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
