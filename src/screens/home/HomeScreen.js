import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import {
  ActionSheet,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Toast,
  Text,
} from 'native-base';
import { fetchEvents } from '../../store/actions/events-actions';
import EmptySpaceContainer from '../../components/emptySpaceContainer/EmptySpaceContainer';
import RetryView from '../../components/commons/RetryView';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <Button
          transparent
          primary
          onPress={navigation.getParam('onMoreOptions')}
        >
          <Icon
            type={'MaterialIcons'}
            name={Platform.select({
              ios: 'more-horiz',
              android: 'more-vert',
            })}
          />
        </Button>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {};

    this.showToast = this.showToast.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
    this.renderEmptySpace = this.renderEmptySpace.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ onMoreOptions: this._onMoreOptions });
    this.loadData();
  }

  _onMoreOptions = () => {
    ActionSheet.show(
      {
        options: ['Cancel', 'Logout', 'Profile', 'About'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
        title: 'Options',
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 1:
            this.signOut();
            break;
          case 2:
            this.props.navigation.navigate('Profile');
            break;
          case 3:
            this.props.navigation.navigate('About');
            break;
          default:
            break;
        }
      }
    );
  };

  /**
   * Accepts an error and returns a proper message based on the given error.
   *
   * @memberof HomeScreen
   */
  getErrorMessage = error => {
    const { description, status } = error || {};

    let msg = 'No events available';
    if (status) {
      msg = `Network error: ${status}`;
    }
    return description || msg;
  };

  loadData() {
    this.props
      .fetchEvents()
      .then(res => this.setState({ error: undefined }))
      .catch(error => {
        const { events } = this.props;
        const { list } = events;
        if (list.length) {
          Alert.alert(this.getErrorMessage(error));
        }
        this.setState({ error });
      });
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
    const { events } = this.props;
    const { listing } = events;
    if (listing) {
      return <ActivityIndicator animating={true} />;
    }

    const { error } = this.state;
    return (
      <RetryView
        message={this.getErrorMessage(error)}
        onPress={this.loadData}
      />
    );
  }

  render() {
    const { events } = this.props;
    const { list, listing } = events;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <EmptySpaceContainer
          showEmptySpace={!list.length}
          onRenderEmptySpace={this.renderEmptySpace}
        >
          <Content
            refreshControl={
              <RefreshControl refreshing={listing} onRefresh={this.loadData} />
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
