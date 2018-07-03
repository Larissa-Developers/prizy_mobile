import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default class Welcome extends Component {
  render () {
    return (
      <Card style={styles.card}>
        <CardItem>
          <Body>
          <Text style={styles.welcome}>Welcome to Prizy, please login to get your prize!</Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 50,
    marginEnd: 50,
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})