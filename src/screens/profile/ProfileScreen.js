import React from 'react';
import { connect } from 'react-redux';
import { Container, Text } from 'native-base';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const { user } = this.props.account;
    return (
      <Container>
        <Text>{`First name: ${user.first_name}`}</Text>
        <Text>{`Last name:  ${user.last_name}`}</Text>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
