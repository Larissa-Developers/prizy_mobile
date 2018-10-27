import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.welcome}>
          Welcome to Prizy, please login to get your prize!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 25,
    marginLeft: 15,
    marginTop: 10,
    marginRight: 15,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});
