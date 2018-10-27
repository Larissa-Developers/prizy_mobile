import React from 'react';
import { View, Text } from 'react-native';

class WinnerScreen extends React.Component {
  static navigationOptions = {
    title: 'Winners',
  };

  render() {
    const { navigation } = this.props;
    const winners = navigation.getParam('winners', []);

    return (
      <View style={{ flex: 1 }}>
        <Text>Winner one: {winners[0].member}</Text>
        <Text>Winner two: {winners[1].member}</Text>
      </View>
    );
  }
}

export default WinnerScreen;
