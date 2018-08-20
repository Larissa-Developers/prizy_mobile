import React, { Component } from 'react'
import { Container, Text } from 'native-base'

class WinnerScreen extends Component {

  static navigationOptions = {
    title: 'Winners',
  }

  render () {
    const {navigation} = this.props
    const winners = navigation.getParam('winners', [])

    return (
      <Container>
        <Text>Winner one: {winners[0].member}</Text>
        <Text>Winner two: {winners[1].member}</Text>
      </Container>
    )
  }
}

export default WinnerScreen